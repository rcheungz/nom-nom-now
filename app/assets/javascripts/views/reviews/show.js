NomNom.Views.ReviewShow = Backbone.View.extend({
	template: JST["reviews/show"],
	
	render: function () {
		var username = $(".username").html();
		var renderedContent = this.template({
			review: this.model,
			username: username
		});
		this.$el.html(renderedContent);
		return this;
	},
});