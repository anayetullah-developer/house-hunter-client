import { Link } from "react-router-dom";
import useMyHouses from "../../../hooks/useMyHouses";
import axios from "axios";

const MyHouses = () => {
  const [refetch, myHouses] = useMyHouses();
  console.log(myHouses);

  const handleDelete = (id) => {
    axios.delete(`/student/selectedClass/${id}`)
    .then((result) => {
      if (result.data.deletedCount > 0) {
        console.log(result);
        refetch();
      }
    });
  };

  return (
    <div>
      <div className="d-flex gap-3 justify-content-center mt-5 align-items-center font-semibold text-uppercase text-2xl">
        <h1>Total Enrolled Students: {myHouses?.length}</h1>
      </div>

      <div className="table-responsive mt-5 my-10">
        <table className="table table-bordered">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Class Image</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>Price</th>
              <th>Status</th>
              <th>Available Seats</th>
              <th>Feedback</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {myHouses?.map((myHouse, index) => {
              return (
                <tr key={myHouse._id}>
                  <td>{index + 1}</td>
                  <td>{myHouse.name}</td>
                  <td>
                    <img src={myHouse.photoURL} alt="Class" style={{ maxWidth: "100px", maxHeight: "100px" }} />
                  </td>
                  <td>{myHouse.instructorName}</td>
                  <td>{myHouse.email}</td>
                  <td>${myHouse.price}</td>
                  <td>{myHouse.status ? myHouse.status : "Pending"}</td>
                  <td>{myHouse.seats}</td>
                  <td>{myHouse.feedback ? myHouse.feedback : "No feedback"}</td>
                  <td >
                    <Link to={`/dashboard/instructor/MyHouses/${myHouse._id}`}>
                      <button className="btn btn-sm btn-primary">Update</button>
                    </Link>
                    <button className="btn btn-primary btn-sm mt-2" onClick={() => handleDelete(myHouse._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default MyHouses;

