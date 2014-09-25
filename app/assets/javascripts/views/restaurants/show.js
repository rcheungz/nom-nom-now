NomNom.Views.RestaurantShow = Backbone.CompositeView.extend({
	template: JST["restaurants/show"],
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model, "sync", this.calculateRating);
		this.listenTo(this.model.reviews(), "add", this.addReview);
		this.renderReviews();
		this.renderReviewsForm();
	},
	
	addReview: function (review) {
		var reviewView = new NomNom.Views.ReviewShow({
			model: review
		});
		this.addSubview(".review-list", reviewView);
	},
	
	roundToHalf: function (num) {
	    num = Math.round(num*2)/2;
	    return num;
	},

	calculateRating: function () {
		var sum = 0;
		var nums = 0;
		this.model.reviews().each( function (review) {
			nums++;
			sum += review.attributes.rating;
		});
		return this.roundToHalf(sum / nums);
	},
	
	render: function () {
		var renderedContent = this.template({
			restaurant: this.model,
			rating: this.calculateRating()
		});
		this.$el.html(renderedContent);
		this.attachSubviews();
		return this;
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

