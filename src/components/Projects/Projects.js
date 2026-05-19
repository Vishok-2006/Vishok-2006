import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import agrow from "../../Assets/Projects/agrowai.png";
import rag from "../../Assets/Projects/vector.png";
import blockchain from "../../Assets/Projects/chaindrive.png";
import InsureAi from "../../Assets/Projects/insureai.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some of the projects I’ve worked on in AI, Cybersecurity,
          Blockchain, and Full Stack Development.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* AGROW AI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agrow}
              isBlog={false}
              title="AGROW AI"
              description="An AI-powered smart agriculture platform that provides weather-based farming insights and crop recommendations. Built using React, Supabase, and Weather API to support sustainable and data-driven farming decisions."
              ghLink="https://github.com/Vishok-2006/AgrowAI"
            />
          </Col>
        {/* InsureAI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={InsureAi}
              isBlog={false}
              title="InsureAI"
              description="An AI-powered insurance assistance platform designed to simplify policy understanding, automate claim-related workflows, and provide intelligent recommendations using modern full stack technologies and AI integration."
              ghLink="https://github.com/Vishok-2006/InsureAI"
            />
          </Col>
          {/* Multi PDF Research Assistant */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rag}
              isBlog={false}
              title="Multi-PDF Research Assistant"
              description="An Agentic RAG-based research assistant that allows users to upload and interact with multiple PDF documents using AI-powered semantic search and contextual question answering with vector embeddings."
              ghLink="https://github.com/Vishok-2006/Vector-Project"
            />
          </Col>

         

          {/* ChainDrive */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blockchain}
              isBlog={false}
              title="Chaindrive"
              description="A custom blockchain built by modifying Bitcoin Core. Features include custom consensus parameters, 3.2-minute block interval, DVL cryptocurrency ticker, and a total supply of 1 billion coins."
              ghLink="https://github.com/Vishok-2006/ChainDrive"
            />
          </Col>

        
      


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;