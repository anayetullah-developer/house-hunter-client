import { Link } from "react-router-dom";
import useMyHouses from "../../../hooks/useMyHouses";
import axios from "axios";

const MyHouses = () => {
  const [refetch, myHouses] = useMyHouses();
  console.log(myHouses);

  const handleDelete = (id) => {
    axios.delete(`https://house-hunter-server-alpha.vercel.app/my-houses/selected-house/${id}`)
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
        <h1>Total Houses: {myHouses?.length}</h1>
      </div>

      <div className="table-responsive mt-5 my-10">
        <table className="table table-bordered">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Bedrooms</th>
              <th>Bathrooms</th>
              <th>Size</th>
              <th>Rent</th>
              <th>Phone</th>
              <th>Description</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {myHouses?.map((myHouse, index) => {
              return (
                <tr key={myHouse._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={myHouse.photoURL} alt="Class" style={{ maxWidth: "100px", maxHeight: "100px" }} />
                  </td>
                  <td>{myHouse.name}</td>
                  <td>{myHouse.address}</td>
                  <td>{myHouse.city}</td>
                  <td>${myHouse.bedrooms}</td>
                  <td>{myHouse.bathrooms}</td>
                  <td>{myHouse.size}</td>
                  <td>{myHouse.rent}</td>
                  <td>{myHouse.phone}</td>
                  <td>{myHouse.desc}</td>
                  <td >
                    <Link to={`/dashboard/house-owner/MyHouses/${myHouse._id}`}>
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

