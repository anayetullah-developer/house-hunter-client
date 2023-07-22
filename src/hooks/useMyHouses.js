
import axios from "axios";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useMyHouses = () => {
    const {user, loading} = useAuth();
    console.log(user)
    const { refetch, data: myHouses = [] } = useQuery({
        queryKey: ['myHouses'],
        enabled: !loading,
        queryFn: async () => {
            const response = await axios.get(`https://house-hunter-server-alpha.vercel.app/house-owner/myHouses?phone=${user?.phone}`);
            return response.data;
        },
      })

      return [refetch, myHouses]

};

export default useMyHouses;