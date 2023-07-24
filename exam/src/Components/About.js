import React from 'react';
import { Accordion, Col } from 'react-bootstrap';
import Footer from './Footer';
import Navbar from '../Navbar/navbar';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
      <Navbar />
      <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
               <li className="breadcrumb-item" aria-current="page">
                <Link to="/" className='text-dark text-primary custom-link text-decoration-none'>Home</Link>
              </li>
              <li className="breadcrumb-item active">
                <Link to="/about" className='custom-link text-primary fw-bold text-decoration-none'>About</Link>
              </li> 
            </ol>
          </nav>
      <br /><br /><br />
      <h2 className='text-center text-info'>Contact and About Us</h2>
      <br />
      <div className='d-flex justify-content-center'>
        <Col xs={14} md={8} lg={12}>
          <Accordion defaultActiveKey="0" flush className='acc'>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h2 className='acchead text-danger'>Organisation Name</h2>
              </Accordion.Header>
              <Accordion.Body className='text-center accon'>
                <strong>RS_Lunch_Home</strong>
                <p>Order from RS Lunch Home - get cashback worth ₹500 on order above ₹2499</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h2 className='acchead text-danger'>Location & Address</h2>
              </Accordion.Header>
              <Accordion.Body className='text-center accon'>
                <p>
                  RS Lunch Home, Opposite Adyar Garden, Banglore Highway, Manglore, Karnataka - 575007  
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h2 className='acchead text-danger'>Contact</h2>
              </Accordion.Header>
              <Accordion.Body className='text-center accon'>
                +91-7019262795
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h2 className='acchead text-danger'>Email Address</h2>
              </Accordion.Header>
              <Accordion.Body className='text-center accon'>
                rslunchhome@gmail.com
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </div>
      <Footer/>
    </div>
  );
};

export default About;