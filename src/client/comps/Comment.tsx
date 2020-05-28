import { Container, Row, Col, Button } from "reactstrap";
import { Comment } from "../data/post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
var markdown = require("markdown").markdown;

import React, { useState } from "react";
import { formatDate } from "../utils/utils";

export interface postProps {}

export const CommentComp: React.FC<Comment> = (comment) => {
  const [score, setScore] = useState(comment.score);
  const [upColor, setUpColor] = useState("black");
  const [downColor, setDownColor] = useState("black");

  return (
    <Container fluid={true} style={{ height: "fit-content" }}>
      <Row style={{ minHeight: "250px" }}>
        <Col
          xs={2}
          style={{
            backgroundColor: "rgb(230, 227, 224)",
            justifyContent: "center",
            display: "grid",
          }}
        >
          <FontAwesomeIcon
            icon="caret-up"
            size="6x"
            color={upColor}
            onClick={() => {
              setScore(comment.score + 1);
              setUpColor("#f80000");
              setDownColor("black");
            }}
          />
          <div style={{ textAlign: "center", fontSize: "xx-large" }}>
            {score}
          </div>
          <FontAwesomeIcon
            icon="caret-down"
            size="6x"
            color={downColor}
            onClick={() => {
              setScore(comment.score - 1);
              setUpColor("black");
              setDownColor("#f80000");
            }}
          />
        </Col>

        <Col xs={10} style={{backgroundColor: "rgb(230, 227, 224)"}}>
          <Row style={{ paddingTop: "20px" }}>
            <Col style={{ display: "inline-flex" }}>
              <img
                src={`${comment.author.avatar}`}
                alt="Avatar"
                style={{ height: "75px", width: "75px" }}
              />
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  paddingLeft: "20px",
                }}
              >
                {comment.accepted && (
                  <>
                    <FontAwesomeIcon
                      icon="check"
                      color="lightgreen"
                      style={{ marginRight: "10px", fontSize: "2rem" }}
                    />
                    {"Accepted Answer: "}
                  </>
                )}
                {comment.author.name}
              </div>
              <div style={{
                color: "#999",
                fontSize: "10px"
              }}>
                {formatDate(comment.date)}
              </div>
            </Col>
          </Row>
          <Row>
            <Col style={{ paddingTop: "20px" }}>
              <div
                className="comment-body"
                dangerouslySetInnerHTML={{
                  __html: markdown.toHTML(comment.body),
                }}
              ></div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
