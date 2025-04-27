import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCard";
import Particle from "../Particle";

// Import your certificate images here
import nptelCloud from "../../Assets/Certificates/NptelCloud.png";
import gfg from "../../Assets/Certificates/GFG.png";
import Cloud from "../../Assets/Certificates/CloudComputing.png";
import frontend from "../../Assets/Certificates/FrontEnd.png";
import FullStack from "../../Assets/Certificates/Full-StackWeb.png";
import cpp from "../../Assets/Certificates/c++Moocs.png";
import node from "../../Assets/Certificates/ServerSideJavaScript.png";
import php from "../../Assets/Certificates/PHP Linkedin.png";
import Udemy from "../../Assets/Certificates/udemy.png";


function CertificateData() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>
          A few certifications I've earned along my journey.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <CertificateCard
              imgPath={nptelCloud}
              title="Cloud Computing"
              issuer="NPTEL"
              description="Completed an 12-week certification course on Cloud Computing conducted by NPTEL, covering AWS, IaaS, PaaS, SaaS, virtualization, and cloud security concepts. It enhanced my understanding of cloud technologies and their applications."
              certLink="https://www.linkedin.com/in/roushan-cse/details/certifications/1737143532699/single-media-viewer/?profileId=ACoAAD5nyisBsMOHyUpLZDCF7x3IcQ9BbNbtnbU"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={gfg}
              title="Completion of Interview Preparation"
              issuer="GeeksForGeeks"
              description="The Interview Completion Preparation on GeeksforGeeks is a comprehensive and structured approach to help candidates prepare for technical interviews. The outcome of the preparation includes a strong foundation in core concepts such as Data Structures, Algorithms, and Problem Solving."
              certLink="https://media.geeksforgeeks.org/courses/certificates/dfe9d2eaae616d7fb68b93210e894eb6.pdf"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Udemy}
              title="Data Structures and Algorithms"
              issuer="Udemy"
              description="This certificate validates my successful completion of the Data Structures and Algorithms course on Udemy. It enhanced my understanding of fundamental data structures, algorithms, and problem-solving techniques in computer science."
              certLink="https://www.udemy.com/certificate/UC-f165d871-792f-4abb-a75e-4f562e5a1c4c/"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={FullStack}
              title="Full Stack Web Developement"
              issuer="Linkedin"
              description="Completed Full Stack Web Development training, gaining expertise in both front-end and back-end technologies. Proficient in HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB. "
              certLink="https://www.linkedin.com/in/roushan-cse/details/certifications/1737145041918/single-media-viewer/?profileId=ACoAAD5nyisBsMOHyUpLZDCF7x3IcQ9BbNbtnbU"
            />
          </Col>


          

          

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Cloud}
              title="Cloud computing"
              issuer="Linkedin"
              description="Completed the certification course on Cloud Computing, covering AWS, IaaS, PaaS, SaaS, virtualization, and cloud security concepts. It enhanced my understanding of cloud technologies and their applications."
              certLink="https://www.linkedin.com/in/roushan-cse/details/certifications/1737146175396/single-media-viewer/?profileId=ACoAAD5nyisBsMOHyUpLZDCF7x3IcQ9BbNbtnbU"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={node}
              title="Server Side with Node.js"
              issuer="Coursera"
              description="This certificate validates my successful completion of the Node.js course offered by Coursera. It enhanced my understanding of Node.js fundamentals, asynchronous programming, and building scalable applications using JavaScript on the server side."
              certLink="https://www.coursera.org/account/accomplishments/verify/YJFQP7UE94VF"
            />
          </Col>

         

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={frontend}
              title="Frontend Development"
              issuer="Coursera"
              description="This certificate validates my successful completion of the Frontend Development course offered by Coursera. It enhanced my skills in HTML, CSS, JavaScript, and responsive web design, enabling me to create engaging user interfaces."
              certLink="https://www.linkedin.com/in/roushan-cse/details/certifications/1737145264009/single-media-viewer/?profileId=ACoAAD5nyisBsMOHyUpLZDCF7x3IcQ9BbNbtnbU"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={php}
              title="Building web using PHP"
              issuer="Coursera"
              description="This certificate validates my successful completion of the Building Web Applications in PHP course offered by the University of Michigan through Coursera. It enhanced my understanding of PHP fundamentals, web development concepts, and server-side programming techniques."
              certLink="https://www.coursera.org/account/accomplishments/verify/MJOKAWJFOBLM"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cpp}
              title="Programming with c++"
              issuer="Coursera"
              description="Successfully completed programming with C++, gaining proficiency in core concepts such as object-oriented programming (OOP), data structures, algorithms, and memory management. Developed strong problem-solving skills through hands-on projects and coding challenges"
              certLink="https://www.coursera.org/account/accomplishments/specialization/BB2QQNCZWD3L"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default CertificateData;