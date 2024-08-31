import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Custom styles

function Footers() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row text-md-left">
          {/* Company Logo and About */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Mercedes-Benz</h5>
            <p>
              A brief description of r company. Offering services or products that enhance the life of our customers, we strive for excellence and customer satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Quick Links</h5>
            <p>
              <a href="#" className="text-light">Home</a>
            </p>
            <p>
              <a href="#" className="text-light">About</a>
            </p>
            <p>
              <a href="#" className="text-light">Services</a>
            </p>
            <p>
              <a href="#" className="text-light">Contact</a>
            </p>
          </div>

          {/* Contact Information */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
            <p>
              <i className="fas fa-home mr-3"></i> 123, Main Street, City, Country
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> info@Mercedes-Benz.com
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print mr-3"></i> + 01 234 567 89
            </p>
          </div>

          {/* Social Media Links */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Follow Us</h5>
            <a href="#" className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998' }}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee' }}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#dd4b39' }}>
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac' }}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca' }}>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <hr className="mb-4" />

        {/* Copyright */}
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="text-center text-md-left">
              © 2024 Copyright:
              <a href="#" className="text-light">
                <strong> Mercedes-Benz.com</strong>
              </a>
            </p>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-light" style={{ fontSize: '23px' }}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-light" style={{ fontSize: '23px' }}>
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-light" style={{ fontSize: '23px' }}>
                    <i className="fab fa-google"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-light" style={{ fontSize: '23px' }}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footers;
