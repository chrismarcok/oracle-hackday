import React, { useEffect, useState } from "react";
import axios from "axios";
interface TopHelpersProps {}

export const TopHelpers: React.FC<TopHelpersProps> = ({}) => {
  const [fetched, setFetched] = useState(null);
  const [searchQuery, setsearchQuery] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://orahub.oci.oraclecorp.com/api/v4/users?username=adam_zartin"
      )
      .then((res) => {
        if (res.status === 200) {
          setFetched(res.data[0]);
        } else {
          throw new Error("error");
        }
      });
  }, []);

  return (
    <>
      {fetched !== null && (
        <div
          style={{
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <img
            src={`${fetched.avatar_url}`}
            alt="Avatar"
            style={{ height: "75px", width: "75px", marginRight: "10px" }}
          />
          Top Helper of The Day:{" "}
          <a href={fetched.web_url} target="_blank">{fetched.username}</a>
        </div>
      )}
    </>
  );
};
