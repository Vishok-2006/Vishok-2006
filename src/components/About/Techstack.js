
import { Col, Row } from "react-bootstrap";



import Javascript from "../../Assets/TechIcons/Javascript.svg";


import Java from "../../Assets/TechIcons/Java.svg";


import Git from "../../Assets/TechIcons/Git.svg";

import Docker from "../../Assets/TechIcons/Docker.svg";

import SQL from "../../Assets/TechIcons/SQL.svg";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
     
    
     


   
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
         <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>
      
  
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>
  

    

     
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="haskell" />
        <div className="tech-icons-text">Java</div>
      </Col>

    </Row>
  );
}

export default Techstack;
