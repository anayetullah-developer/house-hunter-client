import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const DashboardNavbar = () => {
  const { user } = useAuth();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    // You might want to redirect the user to the login page after logout
    // For example:
    window.location.href = "/login";
  };

  return (
    <div className="d-flex align-items-center">
      <div className="ms-auto">
        {user ? (
          <Link
            to="/login"
            className="btn btn-outline-primary mx-4"
            onClick={handleLogOut}
          >
            Logout
          </Link>
        ) : (
          <Link to="/login" className="btn btn-primary mx-4">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default DashboardNavbar;
