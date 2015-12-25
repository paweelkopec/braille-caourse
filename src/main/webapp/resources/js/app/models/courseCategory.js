/**
 * Module for the CourseCategory model
 */
define([ 
    'configuration',
    'backbone'
], function (config) {
    /**
     * The Event model class definition
     * Used for CRUD operations against individual events
     */
    var CourseCategory = Backbone.Model.extend({
        urlRoot: config.baseUrl + 'rest/categories', // the URL for performing CRUD operations
        
    });
    // export the Event class
    return CourseCategory;
});