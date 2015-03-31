// Add your javascript here
$(function() {
    $("h1").animate({
        "margin-left": "100px"
    }, "slow");

    $.get("GSP-Fire-Stations.csv", function(data) {
        //$(".result").html(data);
        //alert("Load was performed.");
        //alert(data); // Raw CSV input
        var lines = Papa.parse(data).data;
        //alert (lines [0] [2]);
        for (var i = 0; i < lines.length; i++) {
            $("table").append("<tr></tr>");
            var indexList = [2, 3, 1, 0];
            for (var j = 0; j < indexList.length; j++) {
                $('tr:last').append('<td></td>');
                $('td:last').text(lines[i][indexList[j]]);
            }
        }
    });
});