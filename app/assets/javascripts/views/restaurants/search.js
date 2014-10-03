NomNom.Views.RestaurantSearch = Backbone.CompositeView.extend({
	template: JST["restaurants/search"],
	
	events: {
		"submit form": "submitSearch"
	},
	
	initialize: function () {
		this.renderListings();
		this.render();
	},
	
	submitSearch: function (event) {
		event.preventDefault();
		var searchString = $("#search-bar").val();
		var searchArea = $("#area-bar").val();
		var url = "restaurants?query=" + encodeURI(searchString) + "+" + encodeURI(searchArea);
		Backbone.history.navigate(url, { trigger: true });
	},
	
	
	render: function (){
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		// this.autoComplete();
		this.attachSubviews();
		return this;
	},
	
	addListing: function (listing) {
		var rating = this._calculateRatingRound(listing);
		var listingShow = new NomNom.Views.ListingShow({
			model: listing,
			rating: rating,
			numReviews: listing.reviews().length
		});
		this.addSubview(".highest-reviewed", listingShow);
	},
	
	renderListings: function () {
		var that = this;
		var restaurants = this.highestReviewed();
		// var area = this.searchArea.toLowerCase().split(", ");
		// restaurants.each(function (listing) {
// 			var address = listing.escape("address").toLowerCase();
// 			if((address.indexOf(area[0]) > -1) || (address.indexOf("bellevue") > -1 && area[0] === "seattle")) {
// 				that.addListing(listing);
// 			}
// 		});
		// restaurants.each(function(restaurant) {
// 			that.addListing(restaurant);
// 		});
		for(var i = 0; i < restaurants.length; i++) {
			that.addListing(restaurants[i]);
		}
		
	},
	
	_roundToHalf: function (num) {
	    num = Math.round(num*2)/2;
	    return num;
	},

	_calculateRatingRound: function (restaurant) {
		var sum = 0;
		var nums = 0;
		restaurant.reviews().each( function (review) {
			nums++;
			sum += review.attributes.rating;
		});
		// this.rating = this._roundToHalf(sum / nums);//allows outside to access rating
		return this._roundToHalf(sum / nums);
	},
	
	highestReviewed: function () {
		var numberOne = new NomNom.Models.Restaurant();
		var ratingOne = 0;
		var numberTwo = new NomNom.Models.Restaurant();
		var ratingTwo = 0;
		var numberThree = new NomNom.Models.Restaurant();
		var ratingThree = 0;
		var that = this;
		var highest = [numberOne, numberTwo, numberThree];
		var sorted = false;
		var num = 0;
		while (!sorted) {
			sorted = true;
			this.collection.each(function (restaurant) {
				var rating = that._calculateRating(restaurant);
				if (rating > ratingOne || (rating === ratingOne && restaurant.reviews().length > highest[0].reviews().length)) {
					highest[0] = restaurant;
					ratingOne = rating;
					sorted = false;
				} else if (rating > ratingTwo || (rating === ratingTwo && restaurant.reviews().length > highest[1].reviews().length)) {
					if (highest[0] !== restaurant) {
						highest[1] = restaurant;
						ratingTwo = rating;
						sorted = false;
					}
				} else if (rating > ratingThree || (rating === ratingThree && restaurant.reviews().length > highest[2].reviews().length)) {
					if (highest[0] !== restaurant && highest[1] !== restaurant) {
						highest[2] = restaurant;
						ratingThree = rating;
						sorted = false
					}
				}
			});
		}
		return highest;
	},

	_calculateRating: function (restaurant) {
		var sum = 0;
		var nums = 0;
		restaurant.reviews().each( function (review) {
			nums++;
			sum += review.attributes.rating;
		});
		
		if (nums === 0) {
			return 0;
		} else {
			return (sum / nums);
		}
	},
	
	// autoComplete: function () {
// 	    var availableTags = [
// 	      "ActionScript",
// 	      "AppleScript",
// 	      "Asp",
// 	      "BASIC",
// 	      "C",
// 	      "C++",
// 	      "Clojure",
// 	      "COBOL",
// 	      "ColdFusion",
// 	      "Erlang",
// 	      "Fortran",
// 	      "Groovy",
// 	      "Haskell",
// 	      "Java",
// 	      "JavaScript",
// 	      "Lisp",
// 	      "Perl",
// 	      "PHP",
// 	      "Python",
// 	      "Ruby",
// 	      "Scala",
// 	      "Scheme"
// 	    ];
// 	    $( ".search-bar" ).autocomplete({
// 	      source: availableTags
// 	    });
// 	 },
	
	
});