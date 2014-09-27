NomNom.Views.RestaurantIndex = Backbone.View.extend({
	template: JST["restaurants/index"],
	
	className: "restaurants-index",
	
	events: {
		"click .geocode": "codeAddress",
		"mouseover a": "hoverThing",
		"mouseout a": "hoverOff"
	},
	
	initialize: function (options) {
		this.searchString = options.keyword;
		this.listenTo(this.collection, "sync", this.render);
		this.markers = [];
	},
	
	render: function () { //doesn't retain data after refresh
		var renderedContent = this.template({
			restaurants: this.collection,
			// function: this.codeAddress
			//restaurants: this.filterCollection
		});
		this.$el.html(renderedContent);
		// this.initializeMap();//important this must stay here so that after the page renders then the map pops up so it isn't removed.
		this.initializeMap();
		this.dropMarkers();
		return this;
	},
	
	hoverThing: function(event) {
		console.log("hovering over: "+ event.currentTarget);
		console.log(this.collection.get($(event.currentTarget).data('id')).marker);
		window.marker = this.collection.get($(event.currentTarget).data('id')).marker;
		this.collection.get($(event.currentTarget).data('id')).marker.icon.strokeColor = "blue";
	},
	
	hoverOff: function(event) {
		console.log("leaving: " + event.currentTarget);
		this.collection.get($(event.currentTarget).data('id')).marker.icon[strokeColor] = "red";
	},
	
	dropMarkers: function () {
		var that = this;
		var markers = [];
		var marker = 0;
		this.collection.each(function(restaurant) {
			var address = restaurant.escape("address");
		  that.geocoder.geocode( { 'address': address}, function(results, status) {
		    if (status == google.maps.GeocoderStatus.OK) {
		      restaurant.marker = new google.maps.Marker({
		          map: that.map,
							animation: google.maps.Animation.DROP,
		          position: results[0].geometry.location
		      });
					
					// markers.push(marker);
			// 		debugger;
					google.maps.event.addListener(restaurant.marker, 'click', that.toggleBounce.bind(that, marker));
		    } else {
					console.log('Geocode was not successful for the following reason: ' + status);
		    }
			});
	  });
		// debugger;
	},
	
	// dropMarkers: function () {
	//
	// },
	
	
	
	
	
	
	
	
	
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
	
	currentLocation: function () { //traces user's current position and brings it up on map
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
	
	codeAddress: function () { //used to find coordinates of given address
	  var address = document.getElementById('address').value;
		var that = this;
	  this.geocoder.geocode( { 'address': address}, function(results, status) {
			console.log("entered geocoder loop");
	    if (status == google.maps.GeocoderStatus.OK) {
				console.log("entered status loop");
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
	
	toggleBounce: function (marker) {

	  if (marker.getAnimation() != null) {
	    marker.setAnimation(null);
	  } else {
	    marker.setAnimation(google.maps.Animation.BOUNCE);
	  }
	},
	
	// onRender: function () {
	// 	this.initializeMap();
	// },
	
});
