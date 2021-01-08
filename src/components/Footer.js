import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

import './Footer.css'

function Footer() {
    return (
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Join me on my adventure!
          </p>
          <p className="footer-subscription-text">
            You can unsubscribe at any time
          </p>
          <div className="input-areas">
            <form>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="footer-input"
              />
              <Button buttonStyle="btn--outline">Subscribe</Button>
            </form>
          </div>
        </section>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div class="footer-link-items">
              <h2>About Me</h2>
              <Link to="/sign-up">About Me</Link>
              <Link to="/">Resume</Link>
              <Link to="/">Terms of Service</Link>
            </div>
            <div class="footer-link-items">
              <h2>Contact Me</h2>
              <Link to="/">Email Me</Link>
              <Link to="/">Feedback</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div class="footer-link-items">
              <h2>Organizations</h2>
              <Link to="/">ACM</Link>
              <Link to="/">Pi Lambda Phi</Link>
            </div>
            <div class="footer-link-items">
              <h2>Social Media</h2>
              <a target="_blank" href="https://www.linkedin.com/in/jairo-carreon/" rel="noreferrer">LinkedIn</a>
              <a target="_blank" href="https://www.kaggle.com/jairocarreon" rel="noreferrer">Kaggle</a>
              <a target="_blank" href="https://github.com/jcarreon5" rel="noreferrer">Github</a>
              <a target="_blank" href="https://www.instagram.com/hey.jairo/" rel="noreferrer">Instagram</a>
            </div>
          </div>
        </div>
        <section className = 'social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        Jairo <i className='fab fa-typo3'/>
                    </Link>
                </div>
                <small className='website-rights'>Jairo @2020</small>
                <div className='social-icons'>
                  
                  <a className='social-icon-link linkedin' target="_blank" href="https://www.linkedin.com/in/jairo-carreon/" rel="noreferrer">
                    <i className='fab fa-linkedin'></i>
                  </a>

                  <a className='social-icon-link kaggle' target="_blank" href="https://www.kaggle.com/jairocarreon" rel="noreferrer">
                    <i className='fab fa-kaggle'></i>
                  </a>
                    
                  <a className='social-icon-link github' target="_blank" href="https://github.com/jcarreon5" rel="noreferrer">
                    <i className='fab fa-github'></i>
                  </a>
                    

                  <a className='social-icon-link instagram' target="_blank" href="https://www.instagram.com/hey.jairo/" rel="noreferrer">
                    <i className='fab fa-instagram'></i>
                  </a>

                </div>
            </div>
        </section>
      </div>
    );
}

export default Footer
