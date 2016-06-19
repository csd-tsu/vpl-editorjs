jQuery(document).ready(function($) {
	$(".scene-duration input").val(24);
    $(".scene-duration .slider").slider({
        value: 24,
        min: 10,
        max: 50,
        step: 1,
        slide: function(event, ui) {
            $(".scene-duration input").val(ui.value);
        }
    });


	$(".scene-gravity input").val(1);
    $(".scene-gravity .slider").slider({
        value: 1,
        min: 0,
        max: 1,
        step: 1,
        slide: function(event, ui) {
            $(".scene-gravity input").val(ui.value);
        }
    });

	$(".scene-interval input").val(0.01);
    $(".scene-interval .slider").slider({
        value: 0.01,
        min: 0.01,
        max: 1,
        step: 0.01,
        slide: function(event, ui) {
            $(".scene-interval input").val(ui.value);
        }
    });

    $(".scene-c-recovery input").val(1);
    $(".scene-c-recovery .slider").slider({
        value: 1,
        min: 0,
        max: 1,
        step: 0.1,
        slide: function(event, ui) {
            $(".scene-c-recovery input").val(ui.value);
        }
    });

    $(".scene-c-friction input").val(0);
    $(".scene-c-friction .slider").slider({
        value: 1,
        min: 0,
        max: 1,
        step: 0.1,
        slide: function(event, ui) {
            $(".scene-c-friction input").val(ui.value);
        }
    });

	$(".circle-mass input").keyup(function(event) {
		var index = $(".circle-props").attr('entity-id');
		entities[index]['object'].m = parseInt($(this).val());
	});
});
