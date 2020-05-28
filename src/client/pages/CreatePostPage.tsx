import React from 'react'

import { Comp } from '../comps/Comp'
import { CreatePostInput } from '../comps/CreatePostInput'

interface CreatePostPageProps {

}

export const CreatePostPage: React.FC<CreatePostPageProps> = ({}) => {
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
                                <CreatePostInput {...t_1}/>
                                <CreatePostInput {...t_2}/>
                                <CreatePostInput {...t_3}/>
                                <button className="submit_btn"> WAKANDA Forever! </button>
                            </div>
                        </div>
                        <div className="step_block">
                            Step 1: Daily bug pops up <br></br>
                            Describe how despair you are. <br></br><br></br>
                            Step 2: Restart the computer<br></br>
                            Show how hard you tried to solve it.<br></br><br></br>
                            Step 3: Take a picture <br></br>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}