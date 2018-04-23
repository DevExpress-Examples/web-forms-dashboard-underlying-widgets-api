function customizeWidgets(args) {
    if (args.ItemName == "gridDashboardItem1") {
        var grid = args.GetWidget();
        grid.option({
            hoverStateEnabled: true
        });
    }
    if (args.ItemName == "chartDashboardItem1") {
        var chart = args.GetWidget();
        chart.option({
            tooltip: {
                enabled: false
            },
            onArgumentAxisClick: function (info) {
                info.component.getAllSeries()[0].getPointsByArg(info.argument)[0].showTooltip()
            }
        });
    }
    if (args.ItemName == "pieDashboardItem1") {
        var pie = args.GetWidget()[0];
        pie.option({
            legend: {
                visible: true,
                border: {
                    visible: true
                }
            }
        });
    }
}

function unsubscribeFromEvents(args) {
    if (args.ItemName == "chartDashboardItem1") {
        var chart = args.GetWidget();
        chart.option({
            onArgumentAxisClick: undefined
        });
    }
}