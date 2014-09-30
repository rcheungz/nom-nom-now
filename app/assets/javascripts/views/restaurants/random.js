NomNom.Views.RestaurantRandom = Backbone.CompositeView.extend({
	template: JST["restaurants/random"],

	events: {
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
		//this.randomSelect();
		var renderedContent = this.template({
			view: this
		});
		this.$el.html(renderedContent);
		return this;
	},
	
	onRender: function() {
		this.map = new google.maps.Map(this.$('#map-canvas')[0], { zoom: 10 });
		this.directionsDisplay = new google.maps.DirectionsRenderer();
		this.directionsDisplay.setMap(this.map);			
		this.calculateDistances();
	},

	randomSelect: function () {
	  var arr = this.collection.pluck("id");
	  return this.collection.get(arr[Math.floor(Math.random() * arr.length)]);
	},

	calcRoute: function (startPos, endPos) {
		var that = this;
		var request = {
	      origin: startPos,
	      destination:endPos.escape("address"),
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
		this.collection.each(function(restaurant) {
			destinations.push(restaurant.escape("address"));
		});
			var mapOptions = {
	      zoom: 6
	    };
		  if(navigator.geolocation) {
		    navigator.geolocation.getCurrentPosition(function(position) {
		      that.pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

				  var service = new google.maps.DistanceMatrixService();
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
	    

	    for (var i = 0; i < origins.length; i++) {
	      var results = response.rows[i].elements;
	      for (var j = 0; j < results.length; j++) {
					var distance = parseFloat(results[j].distance.text, 10);
					if (distance > 2.0) {
						var restaurant = this.collection.findWhere({ address: destinations[j] });
						this.collection.remove(restaurant);
					}
	      }
	    }
			var endPos = this.randomSelect();
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

});