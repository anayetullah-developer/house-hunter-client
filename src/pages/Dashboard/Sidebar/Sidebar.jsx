import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Sidebar = () => {
  const { user } = useAuth();

  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

      <ul className="list-group p-4 w-60 bg-light">
        {!user ? (
          <></>
        ) : user.role === "house-owner" ? (
          <>
            <li className="list-group-item">
              <Link to="/dashboard/house-owner/add-house">Add A House</Link>
            </li>
            <li className="list-group-item">
              <Link to="/dashboard/house-owner/my-houses">My Houses</Link>
            </li>
            <li className="list-group-item">
              <Link to="/">Home</Link>
            </li>
          </>
        ) : (
          <>
            <li className="list-group-item">
              <Link to="/dashboard/student/selected-classes">
                Booked Houses
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/">Home</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
