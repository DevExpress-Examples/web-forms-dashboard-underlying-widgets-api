function onBeforeRender(s, e) {
    var dashboardControl = s.GetDashboardControl();
    var viewerApiExtension = dashboardControl.findExtension('viewerApi');
    if (viewerApiExtension) {
        viewerApiExtension.on('itemWidgetOptionsPrepared', customizeWidgetOptions);
        viewerApiExtension.on('itemWidgetUpdated', customizeWidget);
        viewerApiExtension.on('itemWidgetCreated', customizeWidget);
    };
}
function customizeWidgetOptions(e) {
    if (e.dashboardItem instanceof DevExpress.Dashboard.Model.GridItem) {
        e.options.hoverStateEnabled = true
    };
    if (e.dashboardItem instanceof DevExpress.Dashboard.Model.ChartItem) {
        e.options.tooltip = {
            enabled: false
        };
        e.options.animation = {
            enabled: true,
            duration: 1000
        };
        e.options.onArgumentAxisClick = function (info) {
            info.component.getAllSeries()[0].getPointsByArg(info.argument)[0].showTooltip()
        }
    };
    if (e.dashboardItem instanceof DevExpress.Dashboard.Model.PieItem) {
        e.options.legend = {
            visible: true,
            border: {
                visible: true
            }
        };
        e.options.animation = {
            enabled: true,
            duration: 1000
        };
    }
}
function customizeWidget(e) {
    if (e.dashboardItem instanceof DevExpress.Dashboard.Model.GaugeItem) {
        var firstGauge = e.getWidget()[0];
        firstGauge.option('scale.label.font.color','#ef3615');
    }
}
