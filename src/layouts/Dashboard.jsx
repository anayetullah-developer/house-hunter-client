// import { Outlet } from "react-router-dom";
// import Sidebar from "../Pages/Components/DashboardComponents/Sidebar";
// import DashboardNavbar from "../Pages/Components/DashboardComponents/DashboardNavbar";

import { Outlet } from "react-router-dom";
import DashboardNavbar from "../pages/Dashboard/DashboardNavbar/DashboardNavbar";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 col-md-3 bg-light">
          <Sidebar/>
          </div>
          {/* Main content */}
          <div className="col-lg-19 col-md-9">
            {/* Navbar */}
            <div className="p-3 navbar-expand navbar-light bg-light">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Dashboard
                    </a>
                  </li>
                </ul>
                <DashboardNavbar />
              </div>
            </div>
            {/* Page content here */}
            <div className="p-3">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
