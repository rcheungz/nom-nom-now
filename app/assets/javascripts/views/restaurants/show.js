NomNom.Views.RestaurantShow = Backbone.CompositeView.extend({
	template: JST["restaurants/show"],
	
	initialize: function () {
		this.renderRating();
		this.listenTo(this.model, "sync", this.render);
		// this.listenTo(this.model, "sync", this.renderRating);
		this.listenTo(this.model.reviews(), "add", this.addReview);
		this.listenTo(this.model.reviews(), "add", this.updateRating);
		this.renderReviews();
		this.renderReviewsForm();
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
		var that = this;
		var address = this.model.escape("address");
	  that.geocoder.geocode( { 'address': address}, function(results, status) {
	    if (status == google.maps.GeocoderStatus.OK) {
	      that.model.marker = new google.maps.Marker({
	          map: that.map,
						animation: google.maps.Animation.DROP,
	          position: results[0].geometry.location
	      });

				// google.maps.event.addListener(that.model.marker, 'click', that.toggleBounce.bind(that, marker));
	    } else {
				console.log('Geocode was not successful for the following reason: ' + status);
	    }
		});
	},
	
	
	// displayMap: function () {
// 		this.geocoder = new google.maps.Geocoder();
// 	  var address = this.model.escape("address");
// 		var that = this;
// 	  var mapOptions = {
// 	    zoom: 6
// 	  };
// 	  this.geocoder.geocode( { 'address': address}, function(results, status) {
//
// 		});
// 	},
	
	
	
	
	
	
	codeAddress: function () { //used to find coordinates of given address
		this.geocoder = new google.maps.Geocoder();
		var mapOptions = {
	    zoom: 15
	  };
	  this.map = new google.maps.Map(this.$('#map-canvas')[0], mapOptions);
	  var address = this.model.escape("address");
		var that = this;
	  this.geocoder.geocode( { 'address': address}, function(results, status) {
	    if (status == google.maps.GeocoderStatus.OK) {
	      that.map.setCenter(results[0].geometry.location);
	      var marker = new google.maps.Marker({
	          map: that.map,
	          position: results[0].geometry.location
	      });
	    } else if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
	          setTimeout(function() {
	              Geocode(address);
	          }, 200);
			} else {
				console.log('Geocode was not successful for the following reason: ' + status);
	    }
	  });
	},



	currentLocation: function () { //traces user's current position and brings it up on map
		this.geocoder = new google.maps.Geocoder();
	  var mapOptions = {
	    zoom: 6
	  };
	  this.map = new google.maps.Map(this.$('#map-canvas')[0], //zero indexing is important here for some reason
	      mapOptions);

	  // Try HTML5 geolocation
		var that = this;
	  if(navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position) {
	      var pos = new google.maps.LatLng(that.codeAddress());
	      var infowindow = new google.maps.InfoWindow({
	        map: that.map,
	        position: pos,
	        content: that.model.escape("name")
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

	
	updateRating: function () {
		this.ratingView.update(this._calculateRating());
	},
	
	addReview: function (review) {
		var reviewView = new NomNom.Views.ReviewShow({
			model: review
		});
		this.addSubview(".review-list", reviewView);
	},
	
	_roundToHalf: function (num) {
	    num = Math.round(num*2)/2;
	    return num;
	},

	_calculateRating: function () {
		var sum = 0;
		var nums = 0;
		this.model.reviews().each( function (review) {
			nums++;
			sum += review.attributes.rating;
		});
		this.rating = this._roundToHalf(sum / nums);//allows outside to access rating
		return this._roundToHalf(sum / nums);
	},
	
	render: function () {
		var renderedContent = this.template({
			restaurant: this.model,
			rating: this._calculateRating()
		});
		this.$el.html(renderedContent);
		// this.currentLocation();
		this.codeAddress();
		// this.initializeMap();
		this.attachSubviews();
		return this;
	},
	
	renderRating: function () {
		var updatedRating = this._calculateRating();
		this.ratingView = new NomNom.Views.RatingShow({
			rating: updatedRating
		});
		this.addSubview(".restaurant-rating", this.ratingView);
	},
	
	renderReviews: function () {
		var that = this
		this.model.reviews().each(function (review) {
			that.addReview(review);
		});
	},
	
	renderReviewsForm: function () {
		var view = new NomNom.Views.ReviewForm({
			collection: this.model.reviews(),
			model: new NomNom.Models.Review()
		});
		this.$(".review-form").val("");
		this.addSubview(".review-form", view);
	},
	
	
});

