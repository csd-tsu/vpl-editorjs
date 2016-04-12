$(function() {
   $( ".slider" ).slider({
     value:0.5,
     min: 0,
     max: 1,
     step: 0.1,
     slide: function( event, ui ) {
       $( "#amount" ).val( ui.value );
     }
   });
  // $( "#amount" ).val( $( "#slider" ).slider( "value" ) );
 });

var editor = {
    state: "none",
    setState: function(state) {
        this.state = state;
    }
}

jQuery(document).ready(function($) {
    $(".objects li").click(function(event) {
        if ($(this).hasClass('active')) {
            $(".objects li").removeClass('active');
            editor.setState("none");
        } else {
            var currentState = $(this).attr('data-type');
            $(".objects li").removeClass('active');
            $(this).addClass('active');
            editor.setState(currentState);

        }
    });

    $(".btn-clear").click(function(event) {
        field.clearCnv();
    });
    $(".btn-block").click(function(event){
        field.addBlock();
    });
    $(".btn-ellipse").click(function(event){
        field.addEllipse();
    });
    $(".btn-plane").click(function(event){
        field.addPlane();
    });
    $(".btn-circle").click(function(event){
        field.addСircle();
    });
});
