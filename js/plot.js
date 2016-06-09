var Plot = function() {
    var all_data = [{}];
    var measures = $(".graph-measures").val();
    if (measures == "coordinate"){
        $.each(player.entities, function (index, entity) {
            all_data[0]['data'+index]=[];
            $.each(player.frames, function (i, frame) {
                all_data[0]['data'+index].push([frame[index].x, frame[index].y])
            })
        });
    }
    else if (measures == "velocity"){
        $.each(player.entities, function (index, entity) {
            all_data[0]['data'+index]=[];
            $.each(player.frames, function (i, frame) {
                all_data[0]['data'+index].push([frame[index].v, frame[index].t])
            })
        });
    }
    else if (measures == "impulse"){
        $.each(player.entities, function (index, entity) {
            all_data[0]['data'+index]=[];
            $.each(player.frames, function (i, frame) {
                all_data[0]['data'+index].push([frame[index].p, frame[index].t])
            })
        });
    }
    var dataset = [
        {
            label: "Шарик 1",
            data: all_data[0]['data0'],
            yaxis: 1,
            color: "#FF0000",
            points: { symbol: "circle", fillColor: "#FF0000"},
            lines: { show: true }
        }, {
            label: "Шарик 2",
            data: all_data[0]['data1'],
            yaxis: 1,
            color: "#0062FF",
            points: { symbol: "triangle", fillColor: "#0062FF" },
            lines: {show:true}
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
