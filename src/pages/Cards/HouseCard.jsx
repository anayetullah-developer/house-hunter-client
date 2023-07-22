// import axios from "axios";
import useAuth from "../../hooks/useAuth";

const HouseCard = ({ singleHouse }) => {
 const {user, loading} = useAuth();
 console.log(user?.role);

  const { _id, name, address, phone, photoURL, bedrooms, bathrooms, size, rent, city, date, desc } = singleHouse;


  // const handleSelect = async () => {
  //   await axios.post("/student/selectedClass", {
  //     classId: _id,
  //     instructorName,
  //     name,
  //     photoURL,
  //     email,
  //     seats,
  //     price,
  //   });
  // };
  return (
    <div className="card shadow-lg mb-4">
      <div className="row no-gutters">
        <div className="col-md-12">
          <img
            src={photoURL}
            className="card-img"
            alt="House Image"
            style={{ height: "250px", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="row">
      <h5 className="text-center mt-2">{name}</h5>
        <div className="col-md-6">
          <div className="card-body">
            <p className="card-text mb-2">
              <strong>Address:</strong> {address}
            </p>
            <p className="card-text mb-2">
              <strong>City:</strong> {city}
            </p>
            <p className="card-text mb-2">
              <strong>Bedrooms:</strong> {bedrooms}
            </p>
            <p className="card-text mb-2">
              <strong>Bathrooms:</strong> {bathrooms}
            </p>
            <p className="card-text">
              <strong>Size:</strong> {size} sqft
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <p className="card-text mb-3">
              <strong>Rent:</strong> ${rent}/month
            </p>
            <p className="card-text mb-2">
              <strong>Phone:</strong> {phone}
            </p>
            <p className="card-text">
              <strong>Date:</strong> {date}
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card-body">
            <p className="card-text mt-0 pt-0">
              <strong>Description:</strong> {desc}
            </p>
            <button
            disabled={!loading  && user?.role == "house-owner"}
            className={`btn btn-primary w-full`}
            // onClick={handleSelect}
          >
            Book
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
