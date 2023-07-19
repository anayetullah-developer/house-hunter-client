import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const DashboardNavbar = () => {
  const {user} = useAuth()

   const handleLogOut = () => {
    localStorage.removeItem("token");
    // You might want to redirect the user to the login page after logout
    // For example:
    window.location.href = "/login";
  }

  return (
    <div>
        <div>
          <div className="navbar-end">
            <div className="flex gap-3">
              {user ? (
                <Link
                  to="/login"
                  className=" mx-4 btn md:btn-md sm: btn-sm"
                  onClick={handleLogOut}
                >
                  Logout
                </Link>
              ) : (
                <Link to="/dashboard" className=" mx-4 btn md:btn-md sm: btn-sm">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
    </div>
  );
};

export default DashboardNavbar;
