/**
 * A module for the router of the mobile application.
 *
 */
define("router",[
    'jquery',
    'jquerymobile',
    'underscore',
    'utilities',
    'text!../templates/mobile/home-view.html'
],function ($,
            jqm,
            _,
            utilities,
            HomeViewTemplate) {

    /**
     * The Router class contains all the routes within the application - i.e. URLs and the actions
     * that will be taken as a result.
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
        },
        home:function () {
            utilities.applyTemplate($("#container"), HomeViewTemplate);
            $("#container").enhanceWithin();
        }
    });
    
    // Create a router instance
    var router = new Router();
    
    return router;
});