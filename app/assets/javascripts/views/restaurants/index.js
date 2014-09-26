NomNom.Views.RestaurantIndex = Backbone.View.extend({
	template: JST["restaurants/index"],
	
	className: "restaurants-index",
	
	initialize: function (options) {
		this.searchString = options.keyword;
		this.listenTo(this.collection, "sync", this.render);
	},
	
	render: function () { //doesn't retain data after refresh
		var renderedContent = this.template({
			restaurants: this.collection
			//restaurants: this.filterCollection
		});
		this.$el.html(renderedContent);
		this.initializeMap();
		return this;
	},
	
	initializeMap: function () {
		var mapOptions = {
      center: { lat: 37.751994, lng: -122.443341},
      zoom: 13
    };

	  var map = new google.maps.Map(this.$('#map-canvas')[0],
	      mapOptions);
	},
	
	// onRender: function () {
	// 	this.initializeMap();
	// },
	
});
