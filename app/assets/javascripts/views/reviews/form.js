NomNom.Views.ReviewForm = Backbone.CompositeView.extend({
	template: JST["reviews/form"],
	
	events: {
		"click button": "submit"
	},
	
	render: function () {
		var renderedContent = this.template({
			review: this.model
		});
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
		this.model.set(attrs);
		
		if(this.model.isNew()) {
			this.collection.create(this.model, {
				success: function () {
					Backbone.history.navigate("restaurants/" + this.model.escape("restaurant_id")) //not sure if this is what I'm supposed to do here
				},
			});
		} else {
			this.model.save({}, {
				success: function () {
					Backbone.history.navigte("restaurants/" + this.model.escape("restaurant_id")) //not sure if this is what I'm supposed to do here
				},
			});
		}
	}
});