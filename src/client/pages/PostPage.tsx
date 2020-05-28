import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { CommentComp } from "../comps/Comment";
import { useParams } from "react-router-dom";
import { Post, Comment } from "../data/post";
import { PostComp } from "../comps/dashboard/Post";
var markdown = require("markdown").markdown;
import axios from "axios";

interface PostPageProps {}

interface Commit {
  author: string;
  message: string;
  date: string;
}

interface RepoInfo {
  description: string;
  name: string;
  url: string;
}

export const PostPage: React.FC<PostPageProps> = ({}) => {
  const { postID } = useParams();

  const [fetched, setFetched] = useState<Post>(null);
  const [editVal, setEditVal] = useState<string>("");
  const [addingComment, setAddingComment] = useState<boolean>(false);
  const [repoCommit, setRepoCommit] = useState<Commit>(null);
  const [repoInfo, setRepoInfo] = useState<RepoInfo>(null);
  let token = "";

  
  useEffect(() => {
    axios.get("/token")
      .then((res:any) => {
        console.log('%cTOKEN','color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold');
        console.log(res);
        if (!res.data.error){
          token = res.data.token;
        }
        return fetch(`/api/post/${postID}`);
      })
      .then((res: any) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("error");
        }
      })
      .then((data: Post) => {
        console.log(data);
        setFetched(data);
        if (data.repo && token !== ""){
          const promises = [axios.get(`https://orahub.oci.oraclecorp.com/api/v4/projects/${data.repo.repo_id}/repository/branches/${data.repo.branch}?private_token=${token}`)]
          promises.push(axios.get(`https://orahub.oci.oraclecorp.com/api/v4/projects/${data.repo.repo_id}?private_token=${token}`))
          return Promise.all(promises);
        } else {
          throw new Error("No repo found.")
        }
      })
      .then((values: any[]) => {
        console.log('%cHey, Listen!','color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold');
        console.log(values);
        values.forEach((v:any) => {
          
          if (v.config.url.includes("branches")){
            setRepoCommit({
              author:v.data.commit.author_name,
              date:v.data.commit.committed_date,
              message:v.data.commit.message,
            })
          } else {
            setRepoInfo({
              description: v.data.description,
              name: v.data.name,
              url: v.data.web_url,
            })
          }
        })
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);


  return (
    <>
      <Container style={{ paddingTop: "50px" }}>
        <Row>{fetched !== null && <PostComp post={fetched} large />}</Row>
        {(fetched && fetched.repo && repoInfo && repoCommit) && <div style={{
          width: "100%",
          backgroundColor: "red",
          marginBottom: "10px",
        }}>
          done!
        </div>}
        <div
          style={{
            backgroundColor: "#e6e3e0",
            color: "black",
            padding: "10px",
          }}
          onClick={() => {
            setAddingComment(!addingComment);
          }}
        >
          {addingComment ? "Discard Answer" : "Add Answer"}
        </div>
        {addingComment && (
          <>
            <textarea
              placeholder={"Write your response here. Markdown is supported."}
              value={editVal}
              onChange={(e) => setEditVal(e.target.value)}
              style={{ width: "100%", height: "200px" }}
            />
            <h2>Preview</h2>
            <div
              className="comment-body"
              style={{ marginBottom: "10px" }}
              dangerouslySetInnerHTML={{ __html: markdown.toHTML(editVal) }}
            />
            <div
              style={{
                backgroundColor: "lightblue",
                color: "black",
                padding: "10px",
                cursor: "pointer",
              }}
              onClick={() => {
                const data: Comment = {
                  score: 0,
                  accepted: false,
                  author: {
                    name: "George",
                    avatar:
                      "https://api.adorable.io/avatars/285/djnjsd@adorable.io.png",
                  },
                  body: editVal,
                  date: new Date().getTime(),
                };

                fetch(`/api/post/${postID}`, {
                  method: "POST",
                  mode: "cors",
                  cache: "no-cache",
                  credentials: "same-origin",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  redirect: "follow", // manual
                  referrerPolicy: "no-referrer", // no-referrer
                  body: JSON.stringify(data),
                })
                  .then((res: any) => {
                    console.log(res);
                    if (res.status === 200) {
                      window.location.reload(true);
                    } else {
                      throw new Error(res);
                    }
                  })
                  .catch((err: any) => {
                    console.log(err);
                  });
              }}
            >
              Submit
            </div>
          </>
        )}

        <Row
          style={{
            minHeight: "auto",
            backgroundColor: "white",
            marginTop: "20px",
            height: "100vh",
            display: "block",
          }}
        >
          {fetched !== null &&
            fetched.comments.map((comment, index) => {
              console.log("mapping");
              return (
                <div key={index} style={{ marginTop: "20px" }}>
                  <CommentComp {...comment} />
                </div>
              );
            })}
        </Row>
      </Container>
    </>
  );
};
