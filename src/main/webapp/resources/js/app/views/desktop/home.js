/**
 * The Home view
 */
define([
    'utilities',
    'bootstrap',
    'text!../../../../templates/desktop/home.html'
], function (
		utilities,
		bootstrap,
		HomeTemplate
		) {

    var HomeView = Backbone.View.extend({
    	events: {
            "click #button-start": "startClicked"
        },
        render:function () {       	  
            utilities.applyTemplate($(this.el),HomeTemplate,{ model:this.model});
            return this;
            
        },
        startClicked :function (e) {
        	e.preventDefault();
        	window.location.hash = 'study/'+$("#categoryId").val();
        	 
        }
    });
    
   

    return HomeView;
});