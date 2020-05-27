import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import { Comment } from '../data/post'

export interface postProps {
    name: string,
    myBool?: boolean,
    age: number
}

export const CommentComp: React.FC<Comment> = (comment) => {
      return (
        <Container fluid={true} style={{height: "fit-content"}}    >
          <Row style={{minHeight:"250px"}}>

            <Col xs={2} style={{border: "black", outlineStyle: "solid",  justifyContent:"center"}}>
              

            </Col>

            <Col xs={10} style={{border: "gray", outlineStyle: "solid"}}>
              <Row style={{paddingTop:"20px"}}>
                <Col style={{display:"inline-flex"}}>
                  <div style={{backgroundColor:"cyan", height:"75px", width:"75px"}}></div>
                  <div style={{paddingLeft: "20px"}}>{comment.author}</div>          
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