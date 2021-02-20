import React from 'react'
import { Link } from 'gatsby'

import Grid from '@material-ui/core/Grid';
import logo from '../img/logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer-section">
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
            <a title="facebook" href="https://facebook.com" className="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a title="facebook" href="https://facebook.com" className="social-icon">
              <i class="fab fa-instagram"></i>
            </a>
            <a title="facebook" href="https://facebook.com" className="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
          </Grid>
        </Grid>

        <div className="content has-text-centered  has-text-white-ter">
          <div className="container has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    {/* <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li> */}
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    {/* <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li> */}
                  </ul>
                </section>
              </div>
              {/* <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
