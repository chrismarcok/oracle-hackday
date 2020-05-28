import React, { useEffect, useState } from "react";
import { Post } from "../data/post";

import { Comp } from "../comps/Comp";
import { CreatePostInput } from "../comps/CreatePostInput";
import { Footer } from "../comps/ojet/Footer";

interface CreatePostPageProps {}

export const CreatePostPage: React.FC<CreatePostPageProps> = ({}) => {
  const title = "e.g. Dogs or Cats?";
  const body = "Something.";
  const tags = "e.g. AMS";

<<<<<<< HEAD
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
=======
  const [titleVal, setTitleVal] = useState("");
  const [bodyVal, setBodyVal] = useState("");
  const [tagVal, setTagVal] = useState("");
>>>>>>> 9517f6038bfa9b2925b5e56e66d8cb079a1fd0c1

  return (
    <div>
      <div className="cpost">
        <div className="container">
          <div className="content">
            <div className="title">
              <div className="headline">Create Your Post</div>
            </div>
            <div className="mygrid">
              <div className="editbar">
                <CreatePostInput
                  id={"input_title"}
                  title={"Title!"}
                  text={"Be general and hope someone can answer."}
                  place_holder={title}
                  len={32}
                  setValue={setTitleVal}
                  value={titleVal}
                />
                <CreatePostInput
                  id={"input_body"}
                  title={"Body!"}
                  text={"If you see something, say something."}
                  place_holder={body}
                  len={32}
                  setValue={setBodyVal}
                  value={bodyVal}
                />
                <CreatePostInput
                  id={"input_tag"}
                  title={"Tags!"}
                  text={
                    "Drag this group of people into the water (separate tags with spaces)."
                  }
                  place_holder={tags}
                  len={32}
                  setValue={setTagVal}
                  value={tagVal}
                />
                <button
                  className="submit_btn"
                  onClick={() => {
                    const data = {
                        title: titleVal,
                        author: {
                          name: "Billy123",
                          avatar: "https://api.adorable.io/avatars/285/fdsafdfffffsa@adorable.io.png"
                        },
                        score: 0,
                        comments: [],
                        resolved: false,
                        body: bodyVal,
                        tags: (tagVal === "") ? [] : tagVal.split(" ")
                    };
                    // console.log(data)
                    fetch("/api/post", {
                      method: "POST",
                      mode: "cors",
                      cache: "no-cache",
                      credentials: "same-origin",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      redirect: "follow", // manual
                      referrerPolicy: "no-referrer", // no-referrer
                      body: JSON.stringify(data),
                    }).then((res:any) => {
                      if (res.status === 200) {
                        return res.json()
                      } else {
                        throw new Error(res)
                      }
                    }).then((data:any) => {
                      console.log(data);
                      window.location.href = `/post/${data._id}`
                    })
                    .catch((err:any) => {
                      console.log(err);
                    });
                  }}
                >
                  {" "}
                  WAKANDA Forever!{" "}
                </button>
              </div>
            </div>
            <div className="step_block">
              Step 1: Daily bug pops up <br></br>
              Describe how much despair you are in. <br></br>
              <br></br>
              Step 2: Restart your computer<br></br>
              Show how hard you tried to solve it.<br></br>
              <br></br>
              Step 3: Take a picture <br></br>
              Say Cheese!
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
