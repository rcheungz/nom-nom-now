NomNom.Views.RestaurantRandom = Backbone.CompositeView.extend({
	template: JST["restaurants/random"],

	events: {
		"click button": "onRender"
	},

	initialize: function () {
		view = this;
		this.currentCoords = null;
		this.directionsService = new google.maps.DirectionsService();
		this.geocoder = new google.maps.Geocoder();
		this.bounds = new google.maps.LatLngBounds();
		//this.listenTo(this.collection, "sync", this.calculateDistances)
		this.markersArray = [];
	},
	
	render: function () {
		var renderedContent = this.template({
			view: this
		});
		this.$el.html(renderedContent);
		this.attachSubviews();
		return this;
	},
	
	onRender: function() {
		this.map = new google.maps.Map(this.$('#map-canvas-rand')[0], { zoom: 10 });
		this.directionsDisplay = new google.maps.DirectionsRenderer();
		this.directionsDisplay.setMap(this.map);			
		this.calculateDistances();
	},
	
	renderRandomListing: function (listing) {
		var rating = this._calculateRating(listing);
		$("#random-listing").html("");
		var listingShow = new NomNom.Views.ListingShow({
			model: listing,
			rating: rating
		});
		this.addSubview("#random-listing", listingShow);
	},

	randomSelect: function (destinations) {
		var address = destinations[Math.floor(Math.random() * destinations.length)];
	 	return address;
	},

	calcRoute: function (startPos, endPos) {
		var that = this;
		var request = {
	      origin: startPos, //latlng google position object
	      destination:endPos, //address
	      travelMode: google.maps.TravelMode.DRIVING
	  };
		$("#outputDiv").html()
	  this.directionsService.route(request, function(response, status) {
	    if (status == google.maps.DirectionsStatus.OK) {
	      that.directionsDisplay.setDirections(response);
	    }
	  });
	},

	calculateDistances: function () {
		var that = this;
		var destinations = [];
		var mapOptions = {
      zoom: 6
    };
	  if(navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position) { 47.558910, -122.163282
	      // that.pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				that.pos = new google.maps.LatLng(47.558910, -122.163282);
				that.geocoder.geocode({'latLng': that.pos}, function(results, status) { 
			    if (status == google.maps.GeocoderStatus.OK) {
			      if (results[1]) {
			        var currentAddress = results[1].formatted_address; //this chunk into a method
							that.collection.each(function(restaurant) {
								var address = restaurant.escape("address");
								if (currentAddress.indexOf("San Francisco") >= 0) {
									if (address.indexOf("San Francisco") >= 0) {
										destinations.push(restaurant.escape("address"));
									}
								} else if (currentAddress.indexOf("WA") >= 0) {
									if(address.indexOf("Seattle") >= 0) {
										destinations.push(restaurant.escape("address"));
									}
								}
							});
						  var service = new google.maps.DistanceMatrixService(); //this chunk into a method
							var result;
						  service.getDistanceMatrix(
					 	    {
					 	      origins: [that.pos],
					 	      destinations: destinations,
					 	      travelMode: google.maps.TravelMode.DRIVING,
					 	      unitSystem: google.maps.UnitSystem.IMPERIAL,
					 	      avoidHighways: false,
					 	      avoidTolls: false
					 	    }, that.callback.bind(that));
					
			      } else {
			        alert('No results found');
			      }
			    } else {
			      alert('Geocoder failed due to: ' + status);
			    }
				});
	    }, function() {
	      handleNoGeolocation(true);
	    });
	  } else {
	    // Browser doesn't support Geolocation
	    handleNoGeolocation(false);
	  }
	},

	callback: function (response, status) {
	  if (status != google.maps.DistanceMatrixStatus.OK) {
	    alert('Error was: ' + status);
	  } else {
	    var origins = response.originAddresses;
	    var destinations = response.destinationAddresses;
			var filteredDest = [];
	    for (var i = 0; i < origins.length; i++) {
	      var results = response.rows[i].elements;
	      for (var j = 0; j < results.length; j++) {
					var distance = parseFloat(results[j].distance.text, 10);
					var distanceLimit;
					if(origins[0].indexOf("San Francisco") >= 0) { //this chunk into a method
						distanceLimit = 2.0;
					} else {
						distanceLimit = 30.0;
					}
					if (distance <= distanceLimit) {
						filteredDest.push(destinations[j]);
					}
	      }
	    }
			var endPos = this.randomSelect(filteredDest);
			var randomRestaurant = this.collection.findWhere({ address: endPos });
			this.renderRandomListing(randomRestaurant);
			this.calcRoute(this.pos, endPos);
	  }
	},
	
	handleNoGeolocation: function (errorFlag) {
	  if (errorFlag) {
	    var content = 'Error: The Geolocation service failed.';
	  } else {
	    var content = 'Error: Your browser doesn\'t support geolocation.';
	  }

	  var options = {
	    map: this.map,
	    position: new google.maps.LatLng(60, 105),
	    content: content
	  };

	  var infowindow = new google.maps.InfoWindow(options);
	  this.map.setCenter(options.position);
	},
	
	_roundToHalf: function (num) {
	    num = Math.round(num*2)/2;
	    return num;
	},

	_calculateRating: function (restaurant) {
		var sum = 0;
		var nums = 0;
		restaurant.reviews().each( function (review) {
			nums++;
			sum += review.attributes.rating;
		});
		// this.rating = this._roundToHalf(sum / nums);//allows outside to access rating
		return this._roundToHalf(sum / nums);
	},

});