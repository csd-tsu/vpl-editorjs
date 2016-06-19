var Plot = function() {
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

    var dataset = [
        {
            label: "Шарик 1",
            data: all_data[0]['data0'],
            yaxis: 1,
            color: "#FF0000",
            points: { symbol: "circle", fillColor: "#FF0000"},
            lines: { show: true }
        }
    ];
    // свойства графика
    var plot_conf = {
        series: {
            lines: {
                show: true,
                lineWidth: 2
            }
        },
        zoom: {
            interactive: true
        },
        pan: {
            interactive: true
        }

    };
    // выводим график
    $.plot($("#placeholder"), dataset, plot_conf);
};
