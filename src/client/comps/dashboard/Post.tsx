import React, { useState } from "react";
import { Post } from "../../data/post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {formatDate} from "../../utils/utils"

interface PostCompProps {
  post: Post;
}

export const PostComp: React.FC<PostCompProps> = ({ post }) => {
  const midColIcon: "check" | "question" = post.resolved ? "check" : "question";

  const [score, setScore] = useState(post.score);
  const [upColor, setUpColor] = useState("black");
  const [downColor, setDownColor] = useState("black");

  return (
    
    <div className="postcomp-outermost">
      <div className="left-col post-col">
        <div className="left-col-inner">
          <FontAwesomeIcon icon="caret-up" size="2x" color={upColor} onClick={() => {
            setScore(post.score + 1);
            setUpColor("#f80000");
            setDownColor("black")
          }}/>
          <div>{score}</div>
          <FontAwesomeIcon icon="caret-down" size="2x" color={downColor} onClick={() => {
            setScore(post.score - 1);
            setUpColor("black");
            setDownColor("#f80000")
          }}/>
        </div>
      </div>
      <div className="mid-col post-col">
        <div className="mid-col-inner">
          <FontAwesomeIcon icon={midColIcon} size="2x" />
          <h1 className="inline" style={{ paddingLeft: "20px" }}>
            <a href={`/post/${post._id}`}>{post.title}</a>
          </h1>

          <p style={{ fontSize: "0.8rem" }}>
            Authored by {post.author.name} on {formatDate( post.date)}.
          </p>
          <p className="mid-col-body">{post.body}</p>

            
        </div>
        <p style={{
                fontSize: "0.8rem",
                position: "absolute",
                bottom: "-30px",
            }}>{post.comments.length} Comment(s)</p>
      </div>
      <div className="right-col post-col">
        <div
          className="post-avatar"
          style={{ backgroundImage: `url(${post.authorAvatar})` }}
        ></div>
      </div>
    </div>
  );
};
