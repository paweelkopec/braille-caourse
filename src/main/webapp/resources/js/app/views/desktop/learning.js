/**
 * The Learning view
 */
define([
    'utilities',
    'text!../../../../templates/desktop/learning.html'
], function (utilities, LearningTemplate) {

    var LearningView = Backbone.View.extend({
    	events: {
    		"click #button-next": "nextClicked",
    		"click #button-check": "checkClicked",
        },
        render:function () {
        	this.incorrect = 0;
        	this.correct = 0;
        /*	
         * console.log(JSON.stringify(this.model.next()));
         */
            utilities.applyTemplate($(this.el),LearningTemplate,{model:this.model});
            this.setFirst();
            return this;
        },
        
        setFirst: function (){
    		var t = this.model.size();
    		var c = this.model.getCurrentKey()+1;
    		$("#question span").text(c+'/'+t);
    		$("#image").prop("src", "resources/braille/"+ this.model.getCurrent().get('img'));
    		$("#button-next").attr("disabled", true);
        },
        nextClicked: function(e){
        	e.preventDefault();
        	$("#answer").val('').focus();
        	$("#button-check").attr("disabled", false);
        	$(".alert-success, .alert-warning").addClass("hidden");
        	if(this.model.isNext()){
        	    this.model.next();
        		var t = this.model.size();
        		var c = this.model.getCurrentKey()+1;
        		$("#question span").text(c+'/'+t);
        		$("#image").prop("src", "resources/braille/"+ this.model.getCurrent().get('img'));
        		$("#button-next").attr("disabled", true);
        	}else{// show results
        		$("#curse").addClass("hidden");
        		$("#total-question span").text(this.model.size());
        		$("#correct span").text(this.correct);
        		$("#incorrect span").text(this.incorrect);
        		$("#result").removeClass("hidden");
        	}
        },
        
        checkClicked: function(e){
        	e.preventDefault();
        	$("#button-check").attr("disabled", true);
        	$("#button-next").attr("disabled", false);
        	if(this.model.getCurrent().get('name')==$("#answer").val()){
        		$(".alert-success").removeClass("hidden");
        		this.correct++;
        	}else{
        		$(".alert-warning b").text( this.model.getCurrent().get('name'));
        		$(".alert-warning").removeClass("hidden");
        		this.incorrect++;
        	}
        }
    
    
    });

    return LearningView;
});