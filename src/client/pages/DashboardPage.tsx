import React, { useEffect, useState } from "react";
import { posts } from "../data/dummydata/posts"
import { PostComp } from "../comps/dashboard/Post";
import { Footer } from "../comps/ojet/Footer";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Post} from "../data/post"


interface DashboardPageProps {}

export const DashboardPage: React.FC<DashboardPageProps> = ({}) => {

  const [fetched, setFetched] = useState<Post[]>([]);
  const [searchQuery, setsearchQuery] = useState("");


  useEffect(() => {
    fetch("/api/post")
    .then((res: any) => {
      if (res.status === 200){
        return res.json()
      } else {
        throw new Error("error");
      }
    }).then((data:Post[]) => {
      console.log(data);
      setFetched(data);
    }).catch((err:any) => {
      console.log(err);
    })
  }, [])

  let searchOnChange = function(e) { 
    setsearchQuery(`${e.target.value}`)   
  };


  return (
    <>
      <div className="dashboard">
        <div className="dashboard-outermost">
          <div className="dashboard-container">


            <div>
              <Input type="text" name="search" id="search" placeholder="search some stuff" onChange={searchOnChange}/>
            </div>

              {
                fetched.filter( post => {
                  console.log(searchQuery)
                  return post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.author.name.toLowerCase().includes(searchQuery.toLowerCase())
                }
                  ).map((post, index) => {
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
