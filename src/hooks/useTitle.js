import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} | Legoland`
    },[title])
}


export default useTitle;
