import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import HouseCard from "../Cards/HouseCard";

const Houses = () => {

    const { data: houses = [] } = useQuery({
        queryKey: ['houses'],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:5000/houses`);
            return response.data;
        },
      })

  return (
    <div className="container mt-5">
      <h2 className="text-center display-4 font-weight-bold text-uppercase my-4">Available Houses</h2>
      <div className="row row-cols-1 row-cols-md-3 ">
        {houses.map((singleHouse) => (
          <div key={singleHouse._id} className="col">
            <HouseCard singleHouse={singleHouse} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Houses;
