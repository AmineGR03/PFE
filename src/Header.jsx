import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart,FaIdCard } from 'react-icons/fa';


const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">Chicken Forever</Link>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('dishes')}>Dishes</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('menu')}>Menu</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('reviews')}>Reviews</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <FaShoppingCart icon="fas fa-shopping-cart" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              <FaIdCard icon="far fa-id-card" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
