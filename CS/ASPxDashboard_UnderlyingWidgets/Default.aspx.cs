using DevExpress.DashboardWeb;
using System;

namespace ASPxDashboard_UnderlyingWidgets {
    public partial class Default : System.Web.UI.Page {
        protected void Page_Load(object sender, EventArgs e) {
            DashboardFileStorage storage = new DashboardFileStorage("~/App_Data");
            ASPxDashboard1.SetDashboardStorage(storage);
        }
    }
}