import React from 'react'
import { Link } from 'gatsby'

import Grid from '@material-ui/core/Grid';
import location from '../img/map.png'

import logo from '../img/logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="section-footer">
        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={12} >
            <h3 className="has-text-weight-semibold is-size-2 is-size-4-mobile is-size-2-tablet is-size-1-widescreen intro-heading">
              <span className="footer-title">Sesquipedalian</span>
            </h3>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} md={4} >
            <ul className="menu-list">
              <li>
                <Link to="/" className="navbar-item">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="navbar-item">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="navbar-item">
                  On Stage and Beyond
                </Link>
              </li>
              <li>
                <Link to="/" className="navbar-item">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/" className="navbar-item">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/" className="navbar-item">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Grid>
    
          <Grid item xs={12} md={4} >
          <div className="footer-social">
              <a title="facebook" href="https://facebook.com" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a title="facebook" href="https://instagram.com" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a title="facebook" href="https://twitter.com" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </Grid>

          <Grid item xs={12} md={4} >
          
              <div>
                <div class="footer-address">
                <p>We currently conduct our classes at</p>
                  <b><span>The Sooriya Village,</span></b> <br/>
                  <b><span>49 Skelton Rd,  </span></b> <br/>
                  <b><span>Colombo 5.</span></b> 
                </div>
              </div>

              <br/>

              <div class="footer-address">
                <p>Contact Us On</p>
                <b><span>0777 768 769</span></b>
              </div>
          </Grid>

        </Grid>
      </footer>
    )
  }
}

export default Footer
