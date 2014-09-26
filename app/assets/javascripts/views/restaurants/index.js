NomNom.Views.RestaurantIndex = Backbone.View.extend({
	template: JST["restaurants/index"],
	
	className: "restaurants-index",
	
	events: {
		"click .geocode": "codeAddress"
	},
	
	initialize: function (options) {
		this.searchString = options.keyword;
		this.listenTo(this.collection, "sync", this.render);
	},
	
	render: function () { //doesn't retain data after refresh
		var renderedContent = this.template({
			restaurants: this.collection,
			// function: this.codeAddress
			//restaurants: this.filterCollection
		});
		this.$el.html(renderedContent);
		// this.initializeMap();//important this must stay here so that after the page renders then the map pops up so it isn't removed.
		this.currentLocation();
		return this;
	},
	
	initializeMap: function () {
		this.geocoder = new google.maps.Geocoder();
		var mapOptions = {
      center: { lat: 37.751994, lng: -122.443341},
      zoom: 12
    };
		console.log("entered initialize map first");
	  this.map = new google.maps.Map(this.$('#map-canvas')[0],
	      mapOptions);
	},
	
	currentLocation: function () {
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
	      that.map.setCenter(pos);
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
	
	codeAddress: function () {
	  var address = document.getElementById('address').value;
		debugger;
		var that = this;
	  this.geocoder.geocode( { 'address': address}, function(results, status) {
			console.log("entered geocoder loop");
			debugger;
	    if (status == google.maps.GeocoderStatus.OK) {
				console.log("entered status loop");
				debugger;
	      that.map.setCenter(results[0].geometry.location);
	      var marker = new google.maps.Marker({
	          map: that.map,
	          position: results[0].geometry.location
	      });
	    } else {
				alert('Geocode was not successful for the following reason: ' + status);
	    }
	  });
	},
	
	// onRender: function () {
	// 	this.initializeMap();
	// },
	
});
