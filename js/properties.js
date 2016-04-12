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
