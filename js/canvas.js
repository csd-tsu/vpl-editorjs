var entities = {};

var field = {
    createСircle: function(x, y) {
        var id = Math.floor(Date.now());
        var circle = new fabric.Circle({
            id: id,
            radius: 40,
            fill: '#59dd59',
            left: x-40,
            top: y-40,
			type: "circle",
			m: 1,
			hasRotatingPoint: false,
        });
		circle.setControlVisible("ml", false);
		circle.setControlVisible("mr", false);
		circle.setControlVisible("mt", false);
		circle.setControlVisible("mb", false);

		circle.on('moving', function() {
			entities[circle.id]['vectorLine'].set({
				"x1": circle.left+circle.radius*circle.scaleX,
				"y1": circle.top+circle.radius*circle.scaleX,
			});
			canvas.renderAll();
        });

		var vectorPoint = new fabric.Circle({
            id: id,
            radius: 10,
            fill: 'rgba(0,0,0, 1)',
            left: x+150,
            top: y-10,
			hasRotatingPoint: false,
        });
		vectorPoint.setControlVisible("ml", false);
		vectorPoint.setControlVisible("mr", false);
		vectorPoint.setControlVisible("mt", false);
		vectorPoint.setControlVisible("mb", false);
		vectorPoint.setControlVisible("tl", false);
		vectorPoint.setControlVisible("tr", false);
		vectorPoint.setControlVisible("br", false);
		vectorPoint.setControlVisible("bl", false);

		vectorPoint.on('moving', function() {
			entities[vectorPoint.id]['vectorLine'].set({
				"x2": vectorPoint.left+8,
				"y2": vectorPoint.top+8,
			});
			canvas.renderAll();
        });

		var vectorLine = new fabric.Line([x-2,y-2,x+158,y-2], {
			fill: 'red',
			stroke: 'red',
			strokeWidth: 4,
			selectable: false
        });


        circle.on('selected', function() {
            $(".prop-container").hide();
            $(".circle-props").show().attr('entity-id', circle.id);
			$(".circle-mass input").val(circle.m);
			$(".circle-radius input").val(parseInt(circle.radius*circle.scaleX));
			$(".circle-color input").spectrum({
			    color: circle.fill,
			    change: function(color) {
					entities[circle.id]['object'].fill = color.toHexString();
					canvas.renderAll();
			    }
			});

            console.log(circle.id);
        });

		circle.on('scaling', function() {
            $(".prop-container").hide();
			$(".circle-props").show().attr('entity-id', circle.id);
			$(".circle-mass input").val(circle.m);
			$(".circle-radius input").val(parseInt(circle.radius*circle.scaleX));

			entities[circle.id]['vectorLine'].set({
				"x1": circle.left+circle.radius*circle.scaleX,
				"y1": circle.top+circle.radius*circle.scaleX,
			});
			canvas.renderAll();

            console.log(circle.id);
        });


        entities[id] = {};
		entities[id]['object'] = circle;
		entities[id]['vectorPoint'] = vectorPoint;
		entities[id]['vectorLine'] = vectorLine;

		// entities[id]['vector']
        canvas.add(circle, vectorPoint, vectorLine);
    },
    clear: function() {
        entities = {};
		canvas.clear();
    },
}

jQuery(document).ready(function($) {
    $(window).load(function() {
        canvas = this.__canvas = new fabric.Canvas('canvas', {
            height: $(".canvas-container").height(),
            width: $(".canvas-container").width()
        });
		canvas.on('selection:cleared', function() {
            $(".prop-container").hide();
        });
    });

});
