var editor = {
    object: "none",
	addObject: function(){
		if(editor.object=="circle")
			field.createСircle(event.offsetX, event.offsetY);

		editor.object = "none";
		$(".objects li").removeClass('active');
	},
	renderAnimation: function(){
		var data = {
			width: canvas.width,
			height: canvas.height,
			gravity: parseInt($(".scene-gravity input").val()),
			duration: parseFloat($(".scene-duration input").val()),
			interval: parseFloat($(".scene-interval input").val()),
			c_friction: parseFloat($(".scene-c-friction input").val()),
			k: 55,
            c_recovery: parseFloat($(".scene-c-recovery input").val()),
			entities: [],
		}
		$.each(entities, function( index, value ) {
			var obj = {
				x: parseInt(value['object'].left),
				y: canvas.height - parseInt(value['object'].top),
				type: value['object'].type,
				r: parseInt(value['object'].radius*value['object'].scaleX),
				vx: parseInt(value['vectorPoint'].left+10) - parseInt(value['object'].left+value['object'].radius*value['object'].scaleX),
				vy: (canvas.height - parseInt(value['vectorPoint'].top+10)) - (canvas.height -parseInt(value['object'].top+value['object'].radius*value['object'].scaleX)),
				color: value['object'].fill,
				m: value['object'].m
			}
			console.log(obj.vy);
			data.entities.push(obj);
		});
		console.log(data);

		$.ajax({
			url: 'http://lookatmy.site/python/',
			type: 'post',
			dataType: "json",
			data: {data: JSON.stringify(data)}
		})
		.done(function(result) {
			player.init(result);
		})
		.fail(function(result) {
			console.log(result);
		});

	}
}

jQuery(document).ready(function($) {
    $(".block-types li").click(function(event) {
        $(".objects li").removeClass('active');
		$(this).addClass('active');
		editor.object = $(this).attr('object');
    });

	$(".render-animation").click(function(event) {
		editor.renderAnimation();
	});

	$("body").on('click', '.upper-canvas', function(event) {
		event.preventDefault();
		editor.addObject();
	});

	$(".clear-scene").click(function(event) {
		canvas.clear();
		entities = {};
	});

	$(".bottom-controls-play").click(function(event) {
		player.play();
	});

	$(".bottom-controls-stop").click(function(event) {
		player.stop();
	});

	$(".bottom-controls-next").click(function(event) {
		player.next();
	});
	$(".bottom-controls-prev").click(function(event) {
		player.prev();
	});

	$(".bottom-controls-slider").click(function(event) {
		console.log(event);
		var p = event.offsetX/$(this).width();
		var frame = parseInt(player.frames.length*p);
		player.status="stop";
		player.setFrame(frame);
	});
});
