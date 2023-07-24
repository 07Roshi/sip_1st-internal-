import React from 'react';
import Navbar from '../Navbar/navbar';
import { Card } from 'react-bootstrap';
import Dish1 from '../Images/dishthali1.jpg';
import Dish2 from '../Images/dishpiza2.png';
import Dish3 from '../Images/dishsizzler3.png';
import Dish4 from '../Images/dishnood4.jpg';
import Dish5 from '../Images/dishburger5.png';
import Dish6 from '../Images/dishbiryani6.png';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Course = () => {
  return (
    <div>
      <header>
        <Navbar />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item " aria-current="page">
                  <Link to="/" className="text-dark text-primary custom-link text-decoration-none">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">
                  <Link
                    to="/Course"
                    className="custom-link text-primary fw-bold text-decoration-none">
                    Course
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </nav>
      </header>
      <div className="row justify-content-center">
        <div className="col-md-3 mb-3" style={{marginLeft:'2rem'}}>
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={Dish1}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>Classic Indian Thali</Card.Title>
              <Card.Text>₹110</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-3">
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={Dish2}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>Cheese Pizza</Card.Title>
              <Card.Text>₹275</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-3">
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={Dish3}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>Scizzlers</Card.Title>
              <Card.Text>₹339</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-3"  style={{marginLeft:'2rem'}}>
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={Dish4}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>Hakka Noodles</Card.Title>
              <Card.Text>₹220</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-3">
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={Dish5}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>Burger</Card.Title>
              <Card.Text>₹399</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-3">
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={Dish6}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>Biryani</Card.Title>
              <Card.Text>₹275</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Course;