/**
 * Module for the Course collection
 */
define([
    // The collection element type and configuration are dependencies
    'app/models/course',
    'configuration',
    'backbone'
], function (Course, config) {
    /**
     *  Here we define the Courses collection
     *  We will use it for CRUD operations on Bookings
     */
	    var Courses = Backbone.Collection.extend({
												// operations
		model : Course,
		id : "id", // the 'id' property of the model is the identifier

		initialize : function(models, options) {
			this.categoryId = parseInt(options.categoryId);
			this.current = 0;
		},
		url : function() { // the URL for performing CRUD
			return config.baseUrl + "rest/course/category/"+ this.categoryId ;
		},
		
		setCurrent: function(index){
		    // ensure the requested index exists
			index = parseInt(index);
		    if ( index > -1 && index < this.size() )
		        this.current = index;
		    else 
		    	alert("Failed to set courses index: "+index);
		},
		prev: function() {
			if(!this.isPrev()){
				return null;
			}
		   this.setCurrent(this.current -1);
		   return this.at(this.current);
		},
		next: function() {
			if(!this.isNext()){
				return null;
			}
		    this.setCurrent(this.current +1);
			return this.at(this.current);
		},
		getCurrent: function(){
			return this.at(this.current);
		},
		getCurrentKey: function(){
			return this.current;
		},
		isNext: function() {
			return this.current+1 < this.size() ? true : false;
		},
		isPrev: function(){
			return this.current-1 < this.size() &&  this.current-1 > -1 ? true : false;
		}
	
    });
    return Courses;
    
});