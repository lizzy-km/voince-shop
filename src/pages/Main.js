import { useParams } from "react-router-dom";

const useMain =()=>{
    const {id} = useParams()

    console.log(id);

    return id;
}

export default useMain
