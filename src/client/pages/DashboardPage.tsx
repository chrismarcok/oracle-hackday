import React from "react";
import {posts} from "../data/dummydata/posts"
import {PostComp} from "../comps/dashboard/Post";
import { Footer } from "../comps/ojet/Footer";

interface DashboardPageProps {}

export const DashboardPage: React.FC<DashboardPageProps> = ({}) => {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard-outermost">
          <div className="dashboard-container">
              {
                posts.map((post, index) => {
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
