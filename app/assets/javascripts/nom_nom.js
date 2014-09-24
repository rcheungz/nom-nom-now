window.NomNom = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  initialize: function() {
    new NomNom.Routers.Router({
    	 $rootEl: $(".container")
    });
    Backbone.history.start();
  }
};