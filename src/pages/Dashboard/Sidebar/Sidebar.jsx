import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Sidebar = () => {
  const { user } = useAuth();
  console.log(user)

  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

      <ul className="list-group p-4 w-60 bg-light">
        {!user ? <></> : user.role === "house-owner" ? (
          <>
            <li className="list-group-item">
              <Link to="/dashboard/instructors/add-class">Add A House</Link>
            </li>
            <li className="list-group-item">
              <Link to="/dashboard/instructors/my-classes">My Houses</Link>
            </li>
          </>
        ) : (
          <>
            <li className="list-group-item">
              <Link to="/dashboard/student/selected-classes">Selected Classes</Link>
            </li>
            <li className="list-group-item">
              <Link to="/dashboard/student/enrolled-classes">Enrolled Class</Link>
            </li>
            <li className="list-group-item">
              <Link to="/dashboard/student/payment-history">Payment History</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
