var player = {
	entities: {},
	frames: [],
	frame: 0,
	status: "stop",
	init: function(data){
		console.log(data);
		field.clear();

		player.frames = data.frames;
		player.frame = 0;

		$.each(data['entities'], function( index, entity ) {
			var circle = new fabric.Circle({
	            radius: entity.r,
	            fill: entity.color,
	            left: entity.x,
	            top: canvas.height - entity.y,
				hasRotatingPoint: false,
	        });
			player.entities[index] = circle;
			canvas.add(circle);
		});
	},
	play: function(){
		if(player.status == "stop"){
			player.status = "play";
			player.setFrame(0);
			player.nextFrame();
		}
	},
	stop: function(){
		player.status = "stop";
	},
	next: function(){
		player.status = "stop";
		if(player.frame<player.frames.length-1){
			player.setFrame(++player.frame);
		}else{
			player.setFrame(0);
		}
	},
	prev: function(){
		player.status = "stop";
		if(player.frame>0){
			player.setFrame(--player.frame);
		}else{
			player.setFrame(player.frames.length-1);
		}
	},
	nextFrame:function(){
		if(player.status=="play"){
			if(player.frame<player.frames.length-1){
				player.setFrame(++player.frame);
				setTimeout(function(){
					player.nextFrame();
				}, 10);
			}else{
				player.status = "stop"
				player.setFrame(0);
			}
		}
	},
	setFrame: function(number){
		player.frame = number;
		var curEntities = player.frames[parseInt(number)];
		$.each(curEntities, function( index, entity ) {
			player.entities[index].left = entity.x;
			player.entities[index].top = canvas.height - entity.y;
		});
		canvas.renderAll();
		player.updateProgress();
	},
	updateProgress: function(){
		var progress = parseInt((player.frame/player.frames.length)*100)+1;
		$(".bottom-controls-progress").width(progress+"%");
	},
}
