NomNom.Views.RestaurantRandom = Backbone.View.extend({
	template: JST["restaurants/random"],

	events: {
		"click button": "getCurrentCoords('226 Kearny St San Francisco, CA 94108')",
	},
	
	initialize: function () {
		this.currentCoords = null;
		this.geocoder = new google.maps.Geocoder();
		this.bounds = new google.maps.LatLngBounds();
		this.markersArray = [];
	},

	render: function () {
		//this.randomSelect();
		var renderedContent = this.template({
			view: this
		});
		this.$el.html(renderedContent);
		this.calculateDistances("226 Kearny St San Francisco, CA 94108");
		//this.calculateDistances();
		return this;
	},

	calculateDistances: function (dest) {
		var that = this;
		var mapOptions = {
      zoom: 6
    };
		  if(navigator.geolocation) {
		    navigator.geolocation.getCurrentPosition(function(position) {
		      pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
					
				  that.map = new google.maps.Map(that.$('#map-canvas')[0], mapOptions);
					
				  var service = new google.maps.DistanceMatrixService();
				  service.getDistanceMatrix(
			 	    {
			 	      origins: [pos],
			 	      destinations: [dest],
			 	      travelMode: google.maps.TravelMode.DRIVING,
			 	      unitSystem: google.maps.UnitSystem.METRIC,
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
	    var outputDiv = $('#outputDiv');
	    outputDiv.innerHTML = '';
	    this.deleteOverlays();

	    for (var i = 0; i < origins.length; i++) {
	      var results = response.rows[i].elements;
	      this.addMarker(origins[i], false);
	      for (var j = 0; j < results.length; j++) {
	        this.addMarker(destinations[j], true);
	        outputDiv.innerHTML += origins[i] + ' to ' + destinations[j]
	            + ': ' + results[j].distance.text + ' in '
	            + results[j].duration.text + '<br>';
	      }
	    }
	  }
	},

	addMarker: function (location, isDestination) {
	  var icon;
	  if (isDestination) {			
	    icon = 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=D|FF0000|000000';
	  } else {
	    icon = 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=O|FFFF00|000000';
	  }
		var that = this;
	  this.geocoder.geocode({'address': location}, function(results, status) {
	    if (status == google.maps.GeocoderStatus.OK) {
	      that.bounds.extend(results[0].geometry.location);
	      that.map.fitBounds(that.bounds);
	      var marker = new google.maps.Marker({
	        map: that.map,
	        position: results[0].geometry.location,
	        icon: icon
	      });
	      that.markersArray.push(marker);
	    } else {
	      alert('Geocode was not successful for the following reason: '
	        + status);
	    }
	  });
	},

	deleteOverlays: function () {
	  for (var i = 0; i < this.markersArray.length; i++) {
	    this.markersArray[i].setMap(null);
	  }
	  this.markersArray = [];
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