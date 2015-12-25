/**
 * Module for the Events collection
 */
define([
    // The collection element type and configuration are dependencies
    'app/models/courseCategory',
    'configuration',
    'backbone'
], function (CourseCategory, config) {
    /**
     *  Here we define the Bookings collection
     *  We will use it for CRUD operations on Bookings
     */
    var CourseCategorys = Backbone.Collection.extend({
        url: config.baseUrl + "rest/categories", // the URL for performing CRUD operations
        model: CourseCategory,
        id:"id" // the 'id' property of the model is the identifier
        
    });
    return CourseCategorys;
});