/**
 * A module for the router of the desktop application
 */
define("router", [
    'jquery',
    'underscore',
    'configuration',
    'utilities',
    'app/collections/courseCategorys',
    'app/views/desktop/home',
    'app/collections/courses',
    'app/views/desktop/learning',
    'app/views/desktop/about',
    'text!../templates/desktop/main.html'
],function ($,
            _,
            config,
            utilities,
            CourseCategorys, //collection
            HomeView,
            Courses, //collection
            LearningView,
            AboutView,
            MainTemplate) {

    $(document).ready(new function() {
       utilities.applyTemplate($('body'), MainTemplate)
    })

    /**
     * The Router class contains all the routes within the application -
     * i.e. URLs and the actions that will be taken as a result.
     *
     * @type {Router}
     */

    var Router = Backbone.Router.extend({
        initialize: function() {
            //Begin dispatching routes
            Backbone.history.start();
        },
        routes:{
        	"":"home",
        	"home":"home",
        	"learning/:categoryId":"learning", 
            "about":"about",	
        }
        ,home : function () {
        	
        	var courseCategorys = new CourseCategorys();
            var homeView = new HomeView({model:courseCategorys, el:$("#content")});
         
            courseCategorys.on("reset",
                function () {
                    utilities.viewManager.showView(homeView);
                }).fetch({
                    reset : true,
                    error : function() {
                        utilities.displayAlert("Failed to retrieve events from the server.");
                    }
                });

        }
        ,learning: function (categoryId) {
        	
        	var courses = new Courses(null, {categoryId: categoryId});
        	//console.log(JSON.stringify(courses));
        	var learningView = new LearningView({model:courses, el:$("#content")});
        	courses.on("reset",function () {
        	
        		    //shuffle items within a Collection
        	     	learningView.model.reset(learningView.model.shuffle(), {silent:true});
                    utilities.viewManager.showView(learningView);
                    }).fetch({
                        reset : true,
                        error : function() {
                            utilities.displayAlert("Failed to retrieve curses from the server.");
                        }
            });
     
        }	
        ,about : function () {
            utilities.viewManager.showView(new AboutView({el:$("#content")}));
        }

    });

    // Create a router instance
    var router = new Router();

    
    return router;
});