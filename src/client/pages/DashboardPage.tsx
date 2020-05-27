import React from "react";
import {posts} from "../data/dummydata/posts"

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
                    <div key={index}>
                        {post.author}
                        hello world
                    </div>
                    )
                })
              }
          </div>
        </div>
      </div>
    </>
  );
};
