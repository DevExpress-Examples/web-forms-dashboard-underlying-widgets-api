<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/128580039/16.2.4%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T492396)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
<!-- default file list -->
*Files to look at*:

* [Default.aspx](./CS/ASPxDashboard_UnderlyingWidgets/Default.aspx) (VB: [Default.aspx](./VB/ASPxDashboard_UnderlyingWidgets/Default.aspx))
* [Default.aspx.cs](./CS/ASPxDashboard_UnderlyingWidgets/Default.aspx.cs) (VB: [Default.aspx.vb](./VB/ASPxDashboard_UnderlyingWidgets/Default.aspx.vb))
* [WidgetsCustomization.js](./CS/ASPxDashboard_UnderlyingWidgets/Scripts/WidgetsCustomization.js) (VB: [WidgetsCustomization.js](./VB/ASPxDashboard_UnderlyingWidgets/Scripts/WidgetsCustomization.js))
<!-- default file list end -->
# How to access API of underlying widgets in the ASP.NET Dashboard Control
<!-- run online -->
**[[Run Online]](https://codecentral.devexpress.com/128580039/)**
<!-- run online end -->


This example demonstrates how to customize client widgets used to visualize data within dashboard items at runtime using <a href="https://documentation.devexpress.com/#Dashboard/clsDevExpressDashboardWebScriptsASPxClientDashboardtopic">ASPxClientDashboard</a>'s API. This approach is described in greater detail in the <a href="https://documentation.devexpress.com/#Dashboard/CustomDocument117573">Access to Underlying Widgets</a> help topic. <br>The following options are changed

* Highlighting of the hovered grid row is enabled in the underlying <a href="https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/">dxDataGrid</a> in the <a href="https://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboard_ItemWidgetCreatedtopic">ItemWidgetCreated</a> event handler.
* A standard tooltip that is invoked when an end-user hovers over a chart series point is disabled. You can invoke a tooltip by clicking the required label on the argument axis. The argumentAxisClick event is used for this purpose. Subscription and unsubscription to/from the argumentAxisClick event are performed in the <a href="https://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboardViewer_ItemWidgetUpdatedtopic">ItemWidgetUpdated</a> and <a href="https://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboardViewer_ItemWidgetUpdatingtopic">ItemWidgetUpdating</a> event handlers respectively.
* A pie legend is shown for the underlying <a href="https://js.devexpress.com/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/">dxPieChart</a>.

<br/>


