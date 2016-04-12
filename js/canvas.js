var canvas;
var field;
var entities = {};
jQuery(document).ready(function($) {
    field = {
        addBlock: function() {
            var id = Math.floor(Date.now());

            var rect = new fabric.Rect({
                id: id,
                type: 'block',
                left: 150,
                top: 200,
                originX: 'left',
                originY: 'top',
                width: 150,
                height: 120,
                fill: 'rgba(255,0,0,0.5)',
                transparentCorners: false,
                stroke: '#333',
            });
            rect.on('selected', function() {
                //hide other prop - DO IT FOR ALL ENTITIES
                $(".prop-container").hide();
                $(".prop-container-block").show();

                console.log(rect.id);
            });
            entities[id] = rect;
            canvas.add(rect).setActiveObject(rect);

        },
        addEllipse: function() {
            var id = Math.floor(Date.now());

            var ellipse = new fabric.Ellipse({
                id: id,
                rx: 100,
                ry: 50,
                fill: 'rgba(221, 221, 221, 0.5)',
                left: 150,
                top: 200,
                minScaleLimit: 0.03,
                originX: 'left',
                originY: 'top',
                width: 150,
                height: 120,
                stroke: '#333',

            });

            ellipse.on('selected', function() {
                $(".prop-container").hide();
                $(".prop-container-ellipse").show();

                console.log(ellipse.id);
            });
            entities[id] = ellipse;
            canvas.add(ellipse).setActiveObject(ellipse);

        },
        addPlane: function() {
            var id = Math.floor(Date.now());

            var plane = new fabric.Path('M 100 0 L 300 200 L 0 100 z', {
                id:id,
                left: 150,
                top: 150,
                width: 130,
                height: 140,
                fill: '#ddd',

            });
            plane.on('selected', function() {
                $(".prop-container").hide();
                $(".prop-container-plane").show();
                console.log(plane.id);
            });
            entities[id] = plane;

            canvas.add(plane).setActiveObject(plane);
            /*
                        var plane = fabric.Path('M 0 0 L 300 100 L 200 300 z', {
                            left: 150,
                            top: 150,
                            width: 175,
                            height: 140,
                            fill: '#ddd',

                        });
                        plane.on('selected', function() {
                            $(".prop-container").hide();
                            $(".prop-container-plane").show();
                            console.log(plane.id);
                        });
                        entities[id] = plane;
                        canvas.add(plane).setActiveObject(plane);*/

        },
        addСircle: function() {
            var id = Math.floor(Date.now());

            var circle = new fabric.Circle({
                id: id,
                radius: 60,
                fill: 'rgba(90, 221, 90, 0.5)',
                left: 100,
                top: 100
            });
            circle.on('selected', function() {
                //hide other prop - DO IT FOR ALL ENTITIES
                $(".prop-container").hide();
                $(".prop-container-cirlce").show();

                console.log(circle.id);
            });
            entities[id] = circle;
            canvas.add(circle).setActiveObject(circle);


        },
        clearCnv: function() {
            canvas.remove('selectedObject');
            //	fabric.deleteActiveObject(fabric.selectedObject);
            //    fabric.setDirty(true);

            console.log('clear');
            //    var removing = canvas.getentities();
            //removing.id
            //    console.log(removing);

            //    canvas.remove(removing.id);

            //    entities[removing.id ] =;
            //    canvas.add(rect).setActiveObject(rect);
            //      canvas.remove(rect);
        },
    };
    $(window).load(function() {
        canvas = this.__canvas = new fabric.Canvas('canvas', {
            height: $(".canvas-container").height(),
            width: $(".canvas-container").width()
        });
    });
    $(window).resize(function() {
        canvas.setHeight($(".canvas-container").height());
        canvas.setWidth($(".canvas-container").width());
    });
    //for show and hide properties
    $(".show").click(function() {

        $(".invisible").show("slow");

    });

});
