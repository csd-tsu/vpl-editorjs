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
