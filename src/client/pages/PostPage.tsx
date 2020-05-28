import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { CommentComp } from '../comps/Comment'
import {comments} from "../data/dummydata/comments"
import {useParams} from "react-router-dom";
import {posts} from "../data/dummydata/posts"
import {PostComp} from "../comps/dashboard/Post";


interface PostPageProps {

}

export const PostPage: React.FC<PostPageProps> = ({}) => {
        let {postID} = useParams()

        return (
        <Container style={{paddingTop:"50px"}}>
            <Row >
               <PostComp post={posts[0]}/>
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