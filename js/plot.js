var counter = 0;
var setData = function () {
    var all_data = [{}];
    var function_measure = $("#graph-select-function").val();
    var argument_measure = $("#graph-select-argument").val();
    $.each(player.entities, function (index, entity) {
        all_data[0]['data'+index]=[];

        $.each(player.frames, function (i, frame) {
            var function_data, argument_data;
            if (argument_measure == 'interval'){
                function_data = frame[index][function_measure];
                argument_data = frame[index].t;
            }
            else if (function_measure == 'interval'){
                function_data = frame[index].t;
                argument_data = frame[index][argument_measure];
            }
            else {
                function_data = frame[index][function_measure];
                argument_data = frame[index][argument_measure];
            }
            all_data[0]['data'+index].push([argument_data, function_data]);
        })
    });

    return [
        {
            label: "Шарик1",
            data: all_data[0]['data0'],
            yaxis: {ticks: []},
            xaxis: {ticks: []},
            color: "#FF0000",
            points: { symbol: "circle", fillColor: "#FF0000"},
            lines: { show: true }
        }, {
             label: "Шарик 2",
             data: all_data[0]['data1'],
             xaxis: {ticks: []},
             yaxis: {ticks: []},
             color: "#0062FF",
             points: { symbol: "triangle", fillColor: "#0062FF" },
             lines: {show:true}
         }
    ];
};


var Plot = function () {
   // свойства графика
    var plot_conf = {
        series: {
            lines: {
                show: true,
                lineWidth: 2
            }
        }
    };

    $(".bottom-graphs").append(
        "<div class='graph" + (++counter) + "'><p><noscript><strong style='color: red;'> </strong></noscript></p>" +
        "<div id='graph" + (counter) + "-canvas' class='plot-popup-content' style='width:200px; height:200px;'></div></div>"
    );

    var container_id = '#graph' + (counter) + "-canvas";
    $.plot($(container_id), setData(0), plot_conf);

    //$.plot($("#graph2-canvas"), setData(1), plot_conf);
};


