import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function PageLayout({ children, navLinks }) {
  return (
    <div className="Page-Layout">
      <header>
        <img
          src="https://cdn.pixabay.com/photo/2016/07/08/09/18/bobtail-1503869_960_720.png"
          alt="company logo"
          className="Logo"
        />
        <nav>
          {navLinks.map((link, i) => (
            <span key={i} className="Nav-Link">
              {link}
            </span>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer>© Copyright 2019</footer>
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  navLinks: PropTypes.arrayOf(PropTypes.node),
};

PageLayout.defaultProps = {
  navLinks: [],
};

export default PageLayout;
