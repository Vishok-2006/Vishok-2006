import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Vishok P</span>{" "}
            from <span className="purple">Tamilnadu, India</span>.
            <br />
            I’m currently pursuing{" "}
            <span className="purple">B.E Computer Science and Engineering</span> at{" "}
            <span className="purple">VSB Engineering College, Karur</span>.
            <br />I'm passionate about {" "}
            <span className="purple">Full-Stack Development.</span> 
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building AI Based Projects.
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Linux.
            </li>
            
             
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code, Create, Innovate"{" "}
          </p>
          <footer className="blockquote-footer">Vishok</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
