import React, { useEffect, useState } from "react";
import axios from "axios"
interface TopHelpersProps {

}

export const TopHelpers: React.FC<TopHelpersProps> = ({}) => {
    const [fetched, setFetched] = useState(null);
    const [searchQuery, setsearchQuery] = useState("");
  
  
    useEffect(() => {
        
        axios.get("https://orahub.oci.oraclecorp.com/api/v4/users?username=adam_zartin").then(
            (res) => {if (res.status === 200){
                console.log(res.data);
                setFetched(res.data[0]);
            } else {
              throw new Error("error");
            }}
    )}, [])

    //   fetch("https://orahub.oci.oraclecorp.com/api/v4/users?username=adam_zartin")
    //   .then((res: any) => {
    //     if (res.status === 200){
    //         console.log(res)
    //       return res.json()
    //     } else {
    //       throw new Error("error");
    //     }
    //   }).then((data:any) => {
    //     console.log(data);
    //     setFetched(data);
    //   }).catch((err:any) => {
    //     console.log(err);
    //   })
    // }, [])
  
        return (
            <div>
                  { fetched !== null && <img src={`${fetched.avatar_url}`} alt="Avatar" style={{ height: "75px", width: "75px" }}/>}
                  Top Helper of The Day
            
            </div>
        );
}