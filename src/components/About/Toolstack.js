import React from "react";
import { Col, Row } from "react-bootstrap";

import linux from "../../Assets/TechIcons/linux.svg";


import vscode from "../../Assets/TechIcons/vscode.svg";
import github from "../../Assets/TechIcons/github.svg";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={linux} alt="linux" className="tech-icon-images" />
        <div className="tech-icons-text">Linux</div>
      </Col>

     

      <Col xs={4} md={2} className="tech-icons">
        <img src={vscode} alt="vscode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <img src={github} alt="github" className="tech-icon-images" />
        <div className="tech-icons-text">GitHub</div>
      </Col>


     


    </Row>
  );
}

export default Toolstack;