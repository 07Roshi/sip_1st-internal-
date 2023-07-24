import React from 'react';
import Navbar from '../Navbar/navbar';
import food from '../Images/food.jpg';
import food2 from '../Images/food2.jpg';
import food3 from '../Images/food3.jpg'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item" aria-current="page">
                  <Link
                    to="/"
                    className="custom-link text-dark fw-bold text-decoration-none">
                    Home
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </nav>
      </header>
      <main>
        <div className="container">
          <h1 className="text-center text-primary mt-5">Welcome to RS Lunch Home!</h1>
          <Carousel className="mt-5" style={{ maxWidth: '700px', margin: '0 auto', maxHeight: '900px' }}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={food}
                alt="First slide"
                style={{ maxHeight: '300px', objectFit: 'cover' }}/>
              <Carousel.Caption>
                <h3 className="text-white">Carousel 1</h3>
                <p className="fw-white">Explore new dishes</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={food2}
                alt="Second slide"
                style={{ maxHeight: '300px', objectFit: 'cover' }}/>
              <Carousel.Caption>
                <h3 className="text-white">Carousel 2</h3>
                <p className="fw-white">Taste International Cuisine</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={food3}
                alt="Second slide"
                style={{ maxHeight: '300px', objectFit: 'cover' }}/>
              <Carousel.Caption>
                <h3 className="text-white">Carousel 3</h3>
                <p className="fw-white">Our Specials</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;