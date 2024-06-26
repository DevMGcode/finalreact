import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import banner1 from '../src/assets/img/banner1.png';
import banner2 from '../src/assets/img/banner2.png';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* Slider (Carousel) */}
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Bienvenido a nuestro sitio</h3>
          <p>Descubre nuestras ofertas exclusivas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Explora nuestra gama de productos</h3>
          <p>Encuentra lo que necesitas al mejor precio</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </React.StrictMode>
);
