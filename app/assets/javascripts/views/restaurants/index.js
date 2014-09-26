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
			function: this.codeAddress
			//restaurants: this.filterCollection
		});
		this.$el.html(renderedContent);
		this.initializeMap();//important this must stay here so that after the page renders then the map pops up so it isn't removed.
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
