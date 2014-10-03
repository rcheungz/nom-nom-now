NomNom.Views.ReviewForm = Backbone.CompositeView.extend({
	template: JST["reviews/form"],
	tagName: 'form',
	
	events: {
		"click button": "submit"
	},
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		return this;
	},
	
	create: function (event) {
		event.preventDefault();
		var rating = this.getRating();
		debugger;
		this.collection.create({
			body: this.$('textarea').val(),
			rating: rating,
			restaurant_id: this.collection.restaurant.id
		}, { wait: true });
		this.$('textarea').val('');
		this.$('textarea').focus();
	},
	
	submit: function (event) {
		event.preventDefault();
		var attrs = this.$el.serializeJSON();
		attrs.review.restaurant_id = this.collection.restaurant.id;
		// attrs.rating = this.getRating();
		this.collection.create(attrs.review, {error: function () {
		}, wait: true});
		$("input[type='radio']").prop("checked", false);
		$("textarea").val("");
		// this.model.set(attrs);
	// 	this.model.set('restaurant_id', this.collection.restaurant.id);
	// 	this.model.save({}, {
	// 		success: function () {
	// 				that.collection.add(that.model)
	// 		},
	// 	});

	}
});