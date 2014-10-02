NomNom.Views.RestaurantSearch = Backbone.View.extend({
	template: JST["restaurants/search"],
	
	events: {
		"submit form": "submitSearch"
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
		return this;
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