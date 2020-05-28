import React from 'react'

interface TagsProps {
    tag:String
}

export const Tags: React.FC<TagsProps> = ({tag}) => {
        return (
            <div  className="tag">
            {tag}
        </div>);
}