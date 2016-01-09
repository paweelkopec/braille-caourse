/**
 * The Study view
 */
define([
    'utilities',
    'text!../../../../templates/desktop/study.html'
], function (utilities, StudyTemplate) {

    var StudyView = Backbone.View.extend({
    	events: {
    		"click #button-start": "startClicked",
        },
        
        render:function () {
        /*	
         * console.log(JSON.stringify(this.model.next()));
         */ 
            utilities.applyTemplate($(this.el),StudyTemplate,{model:this.model});
            return this;
        },
        
        startClicked: function(e){
        	e.preventDefault();
        	window.location.hash = 'learning/'+this.categoryId;
        },
        setCategoryId: function(categoryId){
        	this.categoryId = parseInt(categoryId);
        	return this;
        }
        
    
    
    });

    return StudyView;
});