NomNom.Views.RestaurantRandom = Backbone.CompositeView.extend({
	template: JST["restaurants/random"],

	events: {
		"click button": "searchAgain",
	},

	render: function () {
		this.randomSelect();
		var renderedContent = this.template({
		});
		this.$el.html(renderedContent);
		this.currentLocation();
		return this;
	},

	randomSelect: function () {

	},

	filterRestaurants: function () { //filters out the collection to only contain restaurants that are within a certain distance of the user's current location

	},

	currentLocation: function () { //traces user's current position and brings it up on map this shit is weird ASK ABOUT MINI LOADING MAP
	debugger;
	  var mapOptions = {
	    zoom: 6
	  };
	  this.map = new google.maps.Map(this.$('#map-canvas')[0],
	      mapOptions);

	  // Try HTML5 geolocation
		var that = this;
	  if(navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position) {
	      var pos = new google.maps.LatLng(position.coords.latitude,
	                                       position.coords.longitude);

	      var infowindow = new google.maps.InfoWindow({
	        map: that.map,
	        position: pos,
	        content: 'Location found using HTML5.'
	      });
	      that.map.setCenter(pos)
				that.map.setZoom(15);
	    }, function() {
	      handleNoGeolocation(true);
	    });
	  } else {
	    // Browser doesn't support Geolocation
	    handleNoGeolocation(false);
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
	//
	// codeAddress: function () { //used to find coordinates of given address
	//   var address = document.getElementById('address').value;
	// 	var that = this;
	//   this.geocoder.geocode( { 'address': address}, function(results, status) {
	// 		console.log("entered geocoder loop");
	//     if (status == google.maps.GeocoderStatus.OK) {
	// 			console.log("entered status loop");
	//       that.map.setCenter(results[0].geometry.location);
	//       var marker = new google.maps.Marker({
	//           map: that.map,
	//           position: results[0].geometry.location
	//       });
	//     } else if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
	//             setTimeout(function() {
	//                 Geocode(address);
	//             }, 200);
	// 		} else {
	// 			alert('Geocode was not successful for the following reason: ' + status);
	//     }
	//   });

});