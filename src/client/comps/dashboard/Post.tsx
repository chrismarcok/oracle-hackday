import React, { useState, useEffect } from "react";
import { Post } from "../../data/post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {formatDate} from "../../utils/utils"
import {Tags} from "../dashboard/Tags"
var markdown = require("markdown").markdown;

interface PostCompProps {
  post: Post;
  large?: boolean;
}

export const PostComp: React.FC<PostCompProps> = ({ post, large }) => {
  const midColIcon: "check" | "question" = post.resolved ? "check" : "question";
  console.log(post.tags);
  const [score, setScore] = useState(post.score);
  const [upColor, setUpColor] = useState("black");
  const [downColor, setDownColor] = useState("black");

  const [midColIconCol, setMidColIconCol] = useState("#6cb9d2");

  useEffect(() => {
    if (post.resolved){
      setMidColIconCol("lightgreen")
    }
  }, [])

  return (
    
    <div className="postcomp-outermost" style={{height: large ? "fit-content" : "250px"}}>
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
          <FontAwesomeIcon icon={midColIcon} size="2x" color={midColIconCol}/>
          <h1 className="inline" style={{ paddingLeft: "20px" }}>
            <a href={`/post/${post._id}`}>{post.title}</a>
          </h1>

          <p style={{ fontSize: "0.8rem" }}>
            Authored by {post.author.name} on {formatDate( post.date)}.
          </p>
          <p className="mid-col-body" dangerouslySetInnerHTML={{__html: markdown.toHTML(post.body)}}></p>

            
        </div>
        {!large && <p style={{
                fontSize: "0.8rem",
                position: "absolute",
                bottom: "-30px",
            }}>{post.comments.length} Comment(s)</p>}
        <div style={{fontSize: "0.8rem", position: "absolute", bottom: "-30px", right: "-120px"}}>
            {post.tags.map((tag, index) => {return (<Tags tag={tag} key={index}/> )})}
        </div>
        
        
      </div>
      <div className="right-col post-col">
        <div
          className="post-avatar"
          style={{ backgroundImage: `url(${post.author.avatar})` }}
        ></div>
      </div>
    </div>
  );
};
