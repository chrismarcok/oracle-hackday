import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { CommentComp } from '../comps/Comment'
import {postProps} from "../comps/Comment";

import {comments} from "../data/dummydata/comments"

interface PostPageProps {

}

export const PostPage: React.FC<PostPageProps> = ({}) => {
        return (
        <Container>
            <Row style={{minHeight:"400px", border: "black", outlineStyle: "solid",  backgroundColor: "gray"}} >
                Post Will Go Here
            </Row>
            <Row style={{minHeight:"auto", width: "90%", backgroundColor: "white", marginTop: "20px",  height: "100vh", display:"block"}}>
            {
                comments.map((comment, index) => {
                    return (
                        <div  key={index}style={{ marginTop:"20px"}}>
                             <CommentComp {... comment} />
                        </div>   
                    )
                })
            }
            </Row>

           
        </Container>
        
        );
}