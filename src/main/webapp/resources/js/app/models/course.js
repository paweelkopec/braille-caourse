/**
 * Module for the CourseCategory model
 */
define([ 'configuration', 'backbone' ], function(config) {
	/**
	 * The Event model class definition
	 * Used for CRUD operations against individual events
	 */
	var Course = Backbone.Model.extend({
		urlRoot : config.baseUrl + 'rest/course', // the URL for performing CRUD operations
	});
	// export the Event class
	return Course;
});