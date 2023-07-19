
import axios from "axios";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useMyHouses = () => {
    const {user, loading} = useAuth();

    const { refetch, data: myHouses = [] } = useQuery({
        queryKey: ['myHouses'],
        enabled: !loading,
        queryFn: async () => {
            const response = await axios.get(`http://localhost:5000/house-owner/myHouses?email=${user?.email}`);
            return response.data;
        },
      })

      return [refetch, myHouses]

};

export default useMyHouses;