define([
    'utilities',
    'bootstrap',
    'text!../../../../templates/desktop/course.html'
], function (
    utilities,
    bootstrap,
    CourseTemplate) {
    var CourseView = Backbone.View.extend({
        render:function () {
        /*
            var courses = _.uniq(
                _.map(this.model.models, function(model){
                    return model.get('id') 
                }), false, function(item){
                    return item.id
            */
        	

        //	MyCollection.first()
        	console.log(JSON.stringify(this.model.first()));

            utilities.applyTemplate($(this.el), CourseTemplate, { model:this.model})
          /*  $(this.el).find('.item:first').addClass('active');
            $(".carousel").carousel();
            $("a[rel='popover']").popover({trigger:'hover',container:'body'});
            */
            return this;
        }
    });
    return  CourseView;
});