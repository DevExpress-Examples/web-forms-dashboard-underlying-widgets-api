Imports System
Imports DevExpress.DashboardWeb

Namespace ASPxDashboard_UnderlyingWidgets
    Partial Public Class [Default]
        Inherits System.Web.UI.Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            Dim storage As New DashboardFileStorage("~/App_Data")
            ASPxDashboard1.SetDashboardStorage(storage)
        End Sub
    End Class
End Namespace