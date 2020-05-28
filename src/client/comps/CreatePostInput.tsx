import React from 'react'

interface CreatePostInputProps {
    len: number
    id: string
    title: string
    text: string
    place_holder: string
}

export const CreatePostInput: React.FC<CreatePostInputProps> = ({len, id, title, text, place_holder}) => {
        return ( <div>
            <strong> {title} </strong>
            <p> {text} </p>
            {id.includes("body") ? <textarea id={id} placeholder={place_holder}/> : <input type="text" id={id} placeholder={place_holder} />}
            <br></br><br></br>
        </div>);
}