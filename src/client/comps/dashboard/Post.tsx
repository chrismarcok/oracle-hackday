import React from "react";
import { Post } from "../../data/post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PostCompProps {
  post: Post;
}

export const PostComp: React.FC<PostCompProps> = ({ post }) => {
  const midColIcon: "check" | "question" = post.resolved ? "check" : "question";

  return (
    <div className="postcomp-outermost">
      <div className="left-col post-col">
        <div className="left-col-inner">
          <FontAwesomeIcon icon="caret-up" size="2x" />
          <div>{post.score}</div>
          <FontAwesomeIcon icon="caret-down" size="2x" />
        </div>
      </div>
      <div className="mid-col post-col">
        <div className="mid-col-inner">
          <FontAwesomeIcon icon={midColIcon} size="2x" />
          <h1 className="inline" style={{ paddingLeft: "20px" }}>
            {post.title}
          </h1>

          <p style={{ fontSize: "0.8rem" }}>
            Authored by {post.author} on INSERT DATE HERE.
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
