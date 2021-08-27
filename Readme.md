<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/128580039/21.1.3%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T492396)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
<!-- default file list -->
*Files to look at*:

* [Default.aspx](./CS/ASPxDashboard_UnderlyingWidgets/Default.aspx) (VB: [Default.aspx](./VB/ASPxDashboard_UnderlyingWidgets/Default.aspx))
* [Default.aspx.cs](./CS/ASPxDashboard_UnderlyingWidgets/Default.aspx.cs) (VB: [Default.aspx.vb](./VB/ASPxDashboard_UnderlyingWidgets/Default.aspx.vb))
* [WidgetsCustomization.js](./CS/ASPxDashboard_UnderlyingWidgets/Scripts/WidgetsCustomization.js) (VB: [WidgetsCustomization.js](./VB/ASPxDashboard_UnderlyingWidgets/Scripts/WidgetsCustomization.js))
<!-- default file list end -->
# ASP.NET Web Forms Dashboard - How to access API of underlying widgets
<!-- run online -->
**[[Run Online]](https://codecentral.devexpress.com/t492396/)**
<!-- run online end -->


The following example shows how to customize options of underlying widgets in ASP.NET Web Forms. For this, you need to handle the [onItemWidgetOptionsPrepared](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtensionOptions?p=netframework#js_devexpress_dashboard_viewerapiextensionoptions_onitemwidgetoptionsprepared) event.

The customized options are listed below:

- The hovered grid row is highlighted in the underlying [dxDataGrid](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxDataGrid/).
- A standard tooltip that appears when a user hovers over a chart's series point is disabled. 
- A custom tooltip appears when a user clicks a label on the chart's argument axis. The [onArgumentAxisClick](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxChart/Configuration/#onArgumentAxisClick) property executes a function that invokes the custom tooltip.
- The [animation](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxChart/Configuration/animation/) is enabled for the [dxChart](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxChart/) and [dxPieChart](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxPieChart/) widgets.
- The [dxPieChart](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxPieChart/) widget displays a legend.

## Documentation

- [Access to Underlying Widgets in ASP.NET Web Forms](https://docs.devexpress.com/Dashboard/117573/web-dashboard/aspnet-web-forms-dashboard-control/access-to-underlying-widgets)

## More Examples

- [ASP.NET MVC Dashboard - How to access API of underlying widgets](https://github.com/DevExpress-Examples/asp-net-mvc-dashboard-underlying-widgets-api)
- [ASP.NET Core Dashboard - How to access API of underlying widgets](https://github.com/DevExpress-Examples/asp-net-core-dashboard-underlying-widgets-api)
- [Dashboard Component for React - How to access API of underlying widgets](https://github.com/DevExpress-Examples/dashboard-react-underlying-widgets-api)
