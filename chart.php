<script>
    window.onload = function () {
        var data_json = <?php echo json_encode($data, JSON_PRETTY_PRINT); ?>;
        data_template = [{
                name: "TMT-A",
                type: "spline",
                yValueFormatString: "# Mins",
                showInLegend: true,
                dataPoints: [
                ]
            },
            {
                name: "TMT-B",
                type: "spline",
                yValueFormatString: "# Mins",
                showInLegend: true,
                dataPoints: [
                ]
            }];
        for (var i = 0; i < data_json.year.length; i++) {
            var temp_a = { x: new Date(data_json.year[i],data_json.month[i],data_json.day[i]), y: parseFloat(data_json.time_A_arr[i]) };
            var temp_b = { x: new Date(data_json.year[i],data_json.month[i],data_json.day[i]), y: parseFloat(data_json.time_B_arr[i]) };
            data_template[0].dataPoints.push(temp_a);
            data_template[1].dataPoints.push(temp_b);
        }
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            title:{
                text: "Test Result"
            },
            axisX: {
                valueFormatString: "DD MMM,YY"
            },
            axisY: {
                title: "Time Taken(in minutes)",
                includeZero: true,
                suffix: "Mins"
            },
            legend:{
                cursor: "pointer",
                fontSize: 16,
                itemclick: toggleDataSeries
            },
            toolTip:{
                shared: true
            },
            data: data_template
        });
        chart.render();
        
        function toggleDataSeries(e){
            if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            }
            else{
                e.dataSeries.visible = true;
            }
            chart.render();
        }
    }
    // data_template = [{
    //         name: "TMT-A",
    //         type: "spline",
    //         yValueFormatString: "# Mins",
    //         showInLegend: true,
    //         dataPoints: [
    //             { x: new Date(2017,6,24), y: 1 },
    //             { x: new Date(2018,6,25), y: 2.1 },
    //             { x: new Date(2019,7,26), y: 3 },
    //         ]
    //     },
    //     {
    //         name: "TMT-B",
    //         type: "spline",
    //         yValueFormatString: "# Mins",
    //         showInLegend: true,
    //         dataPoints: [
    //             { x: new Date(2017,6,24), y: 1 },
    //             { x: new Date(2018,6,25), y: 2 },
    //             { x: new Date(2019,6,26), y: 3.5},

    //         ]
    //     }];
</script>