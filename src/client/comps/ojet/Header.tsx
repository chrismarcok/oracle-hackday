import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useHistory} from "react-router"

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {

    const history = useHistory();
  return (
    <>
      <header className="hdr-cntr">
        <div className="top-bar">
          <div className="orcl-logo"/><span style={{
              fontSize: "2rem",
              color: "#666"
          }}>Oracle Stack Overflow</span>

          <span className="hdr-email" style={{
              fontWeight: "bold",
              float: "right"
          }}>john.hancock@oracle.com</span>
        </div>
        <div className="bottom-bar">
          <ul>
            <a href="/"><li>Dashboard</li></a>
            <a href="/createpost"><li>Create Post</li></a>

          </ul>
        </div>
      </header>
    </>
  );
};
