<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" 
    Inherits="ASPxDashboard_UnderlyingWidgets.Default" %>

<%@ Register Assembly="DevExpress.Dashboard.v21.1.Web.WebForms, Version=21.1.9.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" 
    Namespace="DevExpress.DashboardWeb" TagPrefix="dx" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Web Dashboard</title>
    <script src="Scripts/WidgetsCustomization.js"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div style="position:absolute; left:0; right:0; top:0; bottom:0;">
        <dx:ASPxDashboard ID="ASPxDashboard1" runat="server" 
            WorkingMode="Viewer"
            Height="100%" Width="100%">
            <ClientSideEvents BeforeRender="onBeforeRender" />  
        </dx:ASPxDashboard>
    </div>
    </form>
</body>
</html>
