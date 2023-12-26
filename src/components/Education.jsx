import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Vidya from "../assets/img/vidya.png"

const Education = () => {
  return (
    <section className="education" id="education">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="skill-bx wow zoomIn">
                    <h2>Education</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
        
    <Container className='education-container'>
      <Row>
        {/* Left side (Image) */}
        <Col xs={12} md={6}>
          <Image className='education-img' src={Vidya} alt="Left Side Image" fluid />
        </Col>
        {/* Right side (Content) */}
        <Col xs={12} md={6}>
          <div>
            <h2 className='edu-heading'>Vidya Bharti Mahavidyalaya Amravati</h2>
            <p>
                Master's of Computer Application
            </p>
          </div>
        </Col>
       
        <Col xs={12} md={6}>
          <Image className='education-img' src={Vidya} alt="Left Side Image" fluid />
        </Col>
        {/* Right side (Content) */}
        <Col xs={12} md={6}>
            <h2 className='edu-heading'>Vidya Bharti Mahavidyalaya Amravati</h2>
            <p>
               Bachelor's of Computer Science
            </p>
        </Col>
      </Row>
    </Container>
    </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default Education;
