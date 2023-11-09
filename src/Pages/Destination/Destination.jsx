import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Destination = () => {
  const { destinationName } = useParams();
  const [singleData, setSingleData] = useState(null) ;

  async function fetchData() {
    const res = await axios.get(
      "http://localhost:5000/destination/" + destinationName
      );
      
      setSingleData(res?.data?.data);
    }
    
    useEffect(() => {
      if (destinationName) [fetchData()];
    }, [destinationName]);
    
    console.log(singleData)
  return (
    <div>
    <img className="h-full w-full border-2 border-orange-700" src={singleData?.travelSpots[0]?.image} alt="" />
     <div className="grid grid-cols-4">
     {
        singleData?.travelSpots?.slice(1 ,4).map((data , index)=> <img key={index} src={data?.image} alt="" />)
      }
      <div>
        <img src="" alt="" />
      
      </div>
     </div>
    </div>
  );
};

export default Destination;
