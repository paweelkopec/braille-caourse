/**
 * The About view
 */
define([
    'utilities',
    'text!../../../../templates/desktop/test.html'
], function (utilities, TestTemplate) {

    var TestView = Backbone.View.extend({
        render:function () {
            utilities.applyTemplate($(this.el),TestTemplate,{});
            return this;
        }
    });

    return TestView;
});