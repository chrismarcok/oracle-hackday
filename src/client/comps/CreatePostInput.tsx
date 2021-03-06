import React from "react";

interface CreatePostInputProps {
  len: number;
  id: string;
  title: string;
  text: string;
  place_holder: string;
  value: string;
  setValue: Function;
}

export const CreatePostInput: React.FC<CreatePostInputProps> = ({
  len,
  id,
  title,
  text,
  place_holder,
  value,
  setValue,
}) => {
  return (
    <div>
      <strong> {title} </strong>
      <p> {text} </p>
      {id.includes("body") ? (
        <textarea
          id={id}
          placeholder={place_holder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <input
          type="text"
          id={id}
          placeholder={place_holder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
      <br></br>
      <br></br>
    </div>
  );
};
