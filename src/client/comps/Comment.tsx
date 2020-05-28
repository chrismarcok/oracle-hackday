import { Container, Row, Col, Button } from 'reactstrap';
import { Comment } from '../data/post'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { comments } from '../data/dummydata/comments';

import React, { useState } from "react";


export interface postProps {

}

export const CommentComp: React.FC<Comment> = (comment) => {
      const [score, setScore] = useState(comment.score);
      const [upColor, setUpColor] = useState("black");
      const [downColor, setDownColor] = useState("black");
      
      return (
        <Container fluid={true} style={{height: "fit-content"}}    >
          <Row style={{minHeight:"250px"}}>

            <Col xs={2} style={{border: "black", outlineStyle: "solid",  justifyContent:"center", display:"grid"}}>
              <FontAwesomeIcon icon="caret-up" size="6x" color={upColor} onClick={() => {
                setScore(comment.score + 1);
                setUpColor("#f80000");
                setDownColor("black")
              }}/>
              <div style={{textAlign:"center", fontSize:"xx-large"}}>{score}</div>
              <FontAwesomeIcon icon="caret-down" size="6x" color={downColor} onClick={() => {
                setScore(comment.score - 1);
                setUpColor("black");
                setDownColor("#f80000")
              }}/>
            </Col>

            <Col xs={10} style={{border: "gray", outlineStyle: "solid"}}>
              <Row style={{paddingTop:"20px"}}>
                <Col style={{display:"inline-flex"}}>
                  <img src={`${comment.author.avatar}`} alt="Avatar" style={{height:"75px", width:"75px"}}/>
                  <div style={{paddingLeft: "20px"}}>{comment.author.name}</div>          
                </Col>

              </Row>
              <Row>
                <Col style={{paddingTop:"20px"}}>
                  {comment.body}
                </Col>
              </Row>
              
            </Col>
          </Row>         
        </Container>
      
        );
}