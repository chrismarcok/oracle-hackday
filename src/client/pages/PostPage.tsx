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
            <Row style={{minHeight:"200px", border: "black", outlineStyle: "solid",  backgroundColor: "red"}} ></Row>
            <Row style={{minHeight:"auto", backgroundColor: "blue", marginTop: "20px"}}>
                <CommentComp {... comments[0]}/>
            </Row>

           
        </Container>
        
        );
}