/**
 * The About view
 */
define([
    'utilities',
    'text!../../../../templates/desktop/about.html'
], function (utilities, AboutTemplate) {

    var AboutView = Backbone.View.extend({
        render:function () {
            utilities.applyTemplate($(this.el),AboutTemplate,{});
            return this;
        }
    });

    return AboutView;
});