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
          }}>Ask</span>

          <span className="hdr-email" style={{
              fontWeight: "bold",
              float: "right"
          }}>me@oracle.com</span>
        </div>
        <div className="bottom-bar">
          <ul>
            <a href="/"><li><FontAwesomeIcon icon="coffee" style={{marginRight: "5px"}}/>Dashboard</li></a>
            <a href="/createpost"><li><FontAwesomeIcon icon="question-circle" style={{marginRight: "5px"}}/>Ask a Question</li></a>

          </ul>
        </div>
      </header>
    </>
  );
};
