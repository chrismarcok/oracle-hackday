import React, { useEffect, useState } from "react";
import {posts} from "../data/dummydata/posts"
import {PostComp} from "../comps/dashboard/Post";
import { Footer } from "../comps/ojet/Footer";

interface DashboardPageProps {}

export const DashboardPage: React.FC<DashboardPageProps> = ({}) => {

  const [fetched, setFetched] = useState([]);

  useEffect(() => {
    fetch("/api/post")
    .then((res: any) => {
      if (res.status === 200){
        return res.json()
      } else {
        throw new Error("error");
      }
    }).then((data:any[]) => {
      console.log(data);
      setFetched(data);
    }).catch((err:any) => {
      console.log(err);
    })
  }, [])


  return (
    <>
      <div className="dashboard">
        <div className="dashboard-outermost">
          <div className="dashboard-container">
              {
                fetched.map((post, index) => {
                    return (
                    <PostComp 
                        post={post} 
                        key={index}
                    />
                    )
                })
              }
          </div>
        </div>
      </div>
      
    </>
  );
};
