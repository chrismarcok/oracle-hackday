import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { CommentComp } from "../comps/Comment";
import { comments } from "../data/dummydata/comments";
import { useParams } from "react-router-dom";
import { Post, Comment } from "../data/post";
import { PostComp } from "../comps/dashboard/Post";
import { Footer } from "../comps/ojet/Footer";

interface PostPageProps {}

export const PostPage: React.FC<PostPageProps> = ({}) => {
  const { postID } = useParams();

  const [fetched, setFetched] = useState<Post>(null);
  const [editVal, setEditVal] = useState<string>("");
  const [addingComment, setAddingComment] = useState<boolean>(false);

  useEffect(() => {
    fetch(`/api/post/${postID}`)
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
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <Container style={{ paddingTop: "50px" }}>
      <Row>{fetched !== null && <PostComp post={fetched} large />}</Row>
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
          <div
            style={{
              backgroundColor: "lightblue",
              color: "black",
              padding: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              const data:Comment = {
                score: 0,
                accepted: false,
                author: {
                  name: "George",
                  avatar:
                    "https://api.adorable.io/avatars/285/djnjsd@adorable.io.png",
                },
                body: editVal,
                date: (new Date()).getTime()
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
              .then((res:any) => {
                console.log(res)
                if (res.status === 200){
                  window.location.reload(true);
                } else {
                  throw new Error(res)
                }
              })
              .catch((err:any) => {
                console.log(err)
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
