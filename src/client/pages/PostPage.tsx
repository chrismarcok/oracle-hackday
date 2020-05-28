import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'reactstrap';
import { CommentComp } from '../comps/Comment'
import {comments} from "../data/dummydata/comments"
import {useParams} from "react-router-dom";
import {Post} from "../data/post"
import {PostComp} from "../comps/dashboard/Post";


interface PostPageProps {

}

export const PostPage: React.FC<PostPageProps> = ({}) => {
        const {postID} = useParams()

        const [fetched, setFetched] = useState<Post>(null);

        useEffect(() => {
          fetch(`/api/post/${postID}`)
          .then((res: any) => {
            if (res.status === 200){
              return res.json()
            } else {
              throw new Error("error");
            }
          }).then((data:Post) => {
            console.log(data);
            setFetched(data);
          }).catch((err:any) => {
            console.log(err);
          })
        }, [])

        return (
        <Container style={{paddingTop:"50px"}}>
            <Row >
               {fetched !== null && <PostComp post={fetched} large/>}
            </Row>
            <Row style={{minHeight:"auto", backgroundColor: "white", marginTop: "20px",  height: "100vh", display:"block"}}>
            {
                fetched !== null &&
                fetched.comments.map((comment, index) => {
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