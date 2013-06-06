require(["ember", "handlebars"], function(Ember, _, Handlebars) {

	'use strict';

	var App = Ember.Application.create();

	App.Router.map(function() {
		// put your routes here
	});

	App.IndexRoute = Ember.Route.extend({
		model: function() {
			return ['red', 'yellow', 'blue'];
		}
	});

});