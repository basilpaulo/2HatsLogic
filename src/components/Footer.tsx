import React, { useState } from 'react';
import './Footer.css';
import logoWhiteImg from '../assets/LogoWhite.png';
import facebookImg from '../assets/Facebook.png';
import instagramImg from '../assets/Instagram.png';
import twitterImg from '../assets/Twitter.png';
import arrowDown from '../assets/ArrowDown.png';

const Dropdown: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="footer-dropdown">
      <button
        className="footer-dropdown-toggle"
        onClick={() => setOpen(!open)}
      >
        {title}
        <img
          src={arrowDown}
          alt="expand"
          className={`footer-arrow ${open ? 'open' : ''}`}
        />
      </button>
      {open && <div className="footer-dropdown-content">{children}</div>}
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="ecom-footer mt-0">
      {/* Desktop layout */}
      <div className="container-fluid d-none d-md-block">
        <div className="row ecom-footer-columns text-center text-md-start">
          <div className="col-12 col-md-3 mb-4 mb-md-0 ecom-footer-col">
            <div className="ecom-footer-title">
              <img src={logoWhiteImg} alt="2Hats" style={{ height: '48px' }} />
            </div>
            <div className="ecom-footer-socials d-flex justify-content-center justify-content-md-start gap-2 mt-2">
              <a href="#" aria-label="Facebook">
                <img src={facebookImg} alt="Facebook" style={{ height: '16px', width: '16px' }} />
              </a>
              <a href="#" aria-label="Twitter">
                <img src={twitterImg} alt="Twitter" style={{ height: '16px', width: '16px' }} />
              </a>
              <a href="#" aria-label="Instagram">
                <img src={instagramImg} alt="Instagram" style={{ height: '16px', width: '16px' }} />
              </a>
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4 mb-md-0 ecom-footer-col">
            <div className="ecom-footer-heading">Products</div>
            <div className="ecom-footer-list">
              <div>Sand Stone</div>
              <div>Stone</div>
              <div>Cement</div>
              <div>Soft Stone</div>
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4 mb-md-0 ecom-footer-col">
            <div className="ecom-footer-heading">Services</div>
            <div className="ecom-footer-list">
              <div>Measurement Service</div>
              <div>Product Advice</div>
              <div>Interior Design</div>
            </div>
          </div>

          <div className="col-12 col-md-3 ecom-footer-col">
            <div className="ecom-footer-heading">Contact information</div>
            <div>
              3181 Al Imam Saud Ibn Abdul Aziz Branch Rd,
              An Nuzhah, Riyadh 12474,
              Saudi Arabia
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="footer-mobile d-md-none text-center">
        <div className="footer-mobile-logo">
          <img src={logoWhiteImg} alt="2Hats" style={{ height: '48px' }} />
        </div>

        <div className="footer-mobile-sections">
          <Dropdown title="Products">
            <div className="footer-dropdown-item">Sand Stone</div>
            <div className="footer-dropdown-item">Stone</div>
            <div className="footer-dropdown-item">Cement</div>
            <div className="footer-dropdown-item">Soft Stone</div>
          </Dropdown>

          <Dropdown title="Services">
            <div className="footer-dropdown-item">Measurement Service</div>
            <div className="footer-dropdown-item">Product Advice</div>
            <div className="footer-dropdown-item">Interior Design</div>
          </Dropdown>

          <Dropdown title="Contact Information">
            <div className="footer-dropdown-item">
              3181 Al Imam Saud Ibn Abdul Aziz Branch Rd,
              An Nuzhah, Riyadh 12474,
              Saudi Arabia
            </div>
          </Dropdown>
        </div>

        {/* horizontal line only above icons */}
        <hr className="footer-divider" />

        <div className="footer-mobile-socials">
          <a href="#" aria-label="Facebook">
            <img src={facebookImg} alt="Facebook" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src={twitterImg} alt="Twitter" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src={instagramImg} alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
