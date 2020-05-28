import React, { useEffect, useState } from "react";
import {Post} from "../data/post"

import { Comp } from '../comps/Comp'
import { CreatePostInput } from '../comps/CreatePostInput'

interface CreatePostPageProps {

}

export const CreatePostPage: React.FC<CreatePostPageProps> = ({}) => {
        
        const [title, setTitle] = useState("e.g. Dogs or Cats?")
        const [body, setBody] = useState("Something.")
        const [tags, setTags] = useState("e.g. AMS")


        const t_1:any= {
            id: "input_title",
            title: "Title!",
            text: "Be general and hope someone can answer.",
            place_holder: "e.g. Dogs or Cats?"
        }
        const t_2:any= {
            id: "input_body",
            title: "Body!",
            text: "If you see something, say something.",
            place_holder: "Something."
        }
        const t_3:any= {
            id: "input_tag",
            title: "Tags!",
            text: "Drag this group of people into the water.",
            place_holder: "e.g. AMS"
        }
                
        return (<div> 

            <div className="cpost">         
                <div className="container">
                    <div className="content">
                        <div className="title">
                            <div className="headline">
                                Create Your Post
                            </div>
                        </div>
                        <div className="mygrid">
                            <div className="editbar">
                                <CreatePostInput id={"input_title"} title={"Title!"} text={"Be general and hope someone can answer."} place_holder={title} len={32}/>
                                <CreatePostInput  id={"input_body"} title= {"Body!"} text= {"If you see something, say something."} place_holder= {body} len={32}/>
                                <CreatePostInput id= {"input_tag"} title={"Tags!"} text={"Drag this group of people into the water."} place_holder={tags} len={32}/>
                                <button className="submit_btn" onClick={() => {console.log("dsas")}}> WAKANDA Forever! </button>
                            </div>
                        </div>
                        <div className="step_block">
                            Step 1: Daily bug pops up <br></br>
                            Describe how much despair you are in. <br></br><br></br>
                            Step 2: Restart your computer<br></br>
                            Show how hard you tried to solve it.<br></br><br></br>
                            Step 3: Take a picture <br></br>
                            Say Cheese!
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}