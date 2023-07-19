import axios from "axios";
import useAuth from "../../hooks/useAuth";

const HouseCard = ({ singleHouse }) => {
 const {user, loading} = useAuth();
 console.log(user?.role);

  const { _id, instructorName, name, photoURL, email, seats, price } = singleHouse;
  let convertedSeat = parseFloat(seats);

  const handleSelect = async () => {
    await axios.post("/student/selectedClass", {
      classId: _id,
      instructorName,
      name,
      photoURL,
      email,
      seats,
      price,
    });
  };
  http://localhost:5000/
  return (
    <div className="mb-4">
      <div className={`card ${convertedSeat < 1 ? "bg-red-300 text-white" : "text-gray-600"}`}>
        <img className="card-img-top" src={photoURL} alt="Class Image" />
        <div className="card-body">
          <h2 className="card-title text-xl font-semibold mb-2">{name}</h2>
          <p className="card-text mb-4">Instructor: {instructorName}</p>
          <div className="d-flex justify-content-between align-items-center">
            <p className="font-weight-bold">Price: ${price}</p>
            <p className="font-weight-bold">Available Seats: {seats}</p>
          </div>
          <button
            disabled={!loading  && user?.role == "house-owner" || convertedSeat === 0}
            className={`btn btn-primary mt-3 ${seats === "0" ? "text-white" : "text-gray-700"}`}
            onClick={handleSelect}
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
