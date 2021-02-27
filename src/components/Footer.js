import React from 'react'
import { Link } from 'gatsby'

import Grid from '@material-ui/core/Grid';
import location from '../img/location.png'

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
          <Grid item xs={12} md={3} >
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
              <h4>We currently conduct our classes at</h4>
              <div>
                <div class="footer-address">
                  <span className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen">The Sooriya Village,</span> <br/>
                  <span className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen">49 Skelton Rd,  </span> <br/>
                  <span className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen">Colombo 5.</span>
                </div>
              </div>

              <br/>

              <h4>Contact Us On</h4>
              <div>
                <span className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen">0777 768 769</span>
              </div>
          </Grid>

          <Grid item xs={12} md={5} >
            <div className="footer-map">
              <a href="https://g.page/sooriyavillage?share" target="_blank">
                <img src={location} />
              </a>

            </div>
          </Grid>

        </Grid>
      </footer>
    )
  }
}

export default Footer
