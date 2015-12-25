define([
    'utilities',
    'bootstrap',
    'text!../../../../templates/desktop/courseCategory.html'
], function (
    utilities,
    bootstrap,
    courseCategoryTemplate) {

    var CourseCategorysView = Backbone.View.extend({
        render:function () {
            var categories = _.uniq(
                _.map(this.model.models, function(model){
                    return model.get('id')
                }), false);
            /*
            utilities.applyTemplate($(this.el), courseCategoryTemplate, {categories:categories, model:this.model})
            $(this.el).find('.item:first').addClass('active');
            $(".carousel").carousel();
            $("a[rel='popover']").popover({trigger:'hover',container:'body'});
            return this;
            */
        }
    });

    return  CourseCategorysView;
});