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
		this.collection.create({
			body: this.$('textarea').val(),
			restaurant_id: this.collection.restaurant.id
		}, { wait: true });
		this.$('textarea').val('');
		this.$('textarea').focus();
	},
	
	submit: function (event) {
		event.preventDefault();
		var attrs = this.$el.serializeJSON();
		attrs.restaurant_id = this.collection.restaurant.id;
		this.collection.create(attrs);
		// this.model.set(attrs);
	// 	this.model.set('restaurant_id', this.collection.restaurant.id);
	// 	this.model.save({}, {
	// 		success: function () {
	// 				that.collection.add(that.model)
	// 		},
	// 	});

	}
});