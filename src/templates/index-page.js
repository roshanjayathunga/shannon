import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { gsap, TweenMax, TimelineLite, Power3, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Program from '../components/Program'
import InstaFeed from '../components/InstaFeed'
import Messenger from '../components/Messenger'
import Testimonial from '../components/Testimonial'

import BackgroundSlider from 'react-background-slider'

import image1 from '../img/hero/heroslider1.jpg'
import image2 from '../img/hero/heroslider2.jpg'
import image3 from '../img/hero/heroslider3.jpg'
import image4 from '../img/hero/heroslider4.jpg'

import launch from '../img/program/launch1.jpg'
import ignite from '../img/program/ignite2.jpg'
import propel from '../img/program/propel3.jpg'
import ascend from '../img/program/ascend4.jpg'


gsap.registerPlugin(ScrollTrigger);


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  introImage,
  intro,
  totalCount,

}) => (
  <div>
    
    <div className="overlay">
      <h1 className="loading-title">Sesquipedalian</h1>
      <span className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen">Theatre led learning</span>
    </div>

    <div className="hero-background">
    <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1 className="hero-title" >
          {title}
        </h1>
        <h3
          className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen hero-subtitle" >
          {subheading}
        </h3>

        <Link to="/contact">
          <button variant="contained" color="primary" className="btn btn-primary btm-sm-full-width">
            Join Now
          </button>
        </Link>
      </div>
      <BackgroundSlider
      images={[image1, image2, image3, image4]}
      duration={4} transition={2} />
    </div>
    
    <section className="section-intro">
      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} >
          {/* <h3 className="has-text-weight-semibold is-size-2 is-size-4-mobile is-size-2-tablet is-size-1-widescreen intro-heading">
            {heading}
          </h3> */}
          <h1 className="main-title">Learning builds character.</h1>
          <h1 className="main-title ml-3 mt--1">Theatre builds performers.</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={4} >
        </Grid>
        <Grid item xs={12} sm={12} md={8} >
          <p className="page-description">Sesquipedalian Theatre-led Learning is a contemporary academic curriculum that brings the principles of the performing arts to a comprehensive language and personality development programme for children between the ages of 5 and 16.</p>
          <p className="page-description">With tools and techniques from the stage to enhance the experience, students can develop their academic, leadership, cognitive and social skills and reach their potential as high performers.</p>
          
          <div className="flex justify-center">
          <Link to="/program">
            <button variant="contained" color="primary" className="btn btn-link">
              Learn More
            </button>
          </Link>

          </div>
        </Grid>
      </Grid>
    </section>

    <section className="section-program-home">
      <Grid container 
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}

      >
        <Grid item xs={12} sm={12} md={9}>
          <h3 className="has-text-weight-semibold is-size-2 is-size-4-mobile is-size-2-tablet is-size-2-widescreen">
            Curriculum
            </h3>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Link to="/contact">
            <button variant="contained" color="primary" className="btn btn-primary float-right btm-sm-full-width">
              Join Demo
            </button>
          </Link>
        </Grid>

        <Grid item xs={12} sm={12} md={3}>
          <Program imgSrc={launch}
            title={"Launch"}
            subtitle={"Ages 5-7"}
            info={""}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Program imgSrc={ignite}
            title={"Ignite"}
            subtitle={"Ages 8-10"}
            info={""}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Program imgSrc={propel}
            title={"Propel"}
            subtitle={"Ages 11-13"}
            info={""}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Program imgSrc={ascend}
            title={"Ascend"}
            subtitle={"Ages 14 and above"}
            info={""}
          />
        </Grid>


      </Grid>
    </section>
      
    {/* <section className="section-insta">
      <InstaFeed />
    </section> */}
    <Testimonial />

    <Messenger />
    
    {/* <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
   
  </div>
)


IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  introImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  let app = useRef(null);
  let tl = new TimelineLite()

  useEffect(() => {
    const heroImage = app.querySelector('.full-width-image');

    TweenMax.to(app, 0, { css: { visibility: 'visible' } });

    TweenMax.to(".overlay h1", 3, {
      opacity: 0,
      y: -60,
      ease: Expo.easeInOut
    })

    TweenMax.to(".overlay span", 2, {
      delay: .6,
      opacity: 0,
      y: -60,
      ease: Expo.easeInOut
    })

    TweenMax.to(".overlay", 3, {
      delay: 1,
      top: "-120%",
      ease: Expo.easeInOut
    })

    // tl.from(heroImage, 5, { y: -1200, ease: Power3.easeOut }, 'Start')
    //   .from(heroImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, .5);

  });


  return (
    <Layout>
      <div className="index-page" ref={el => app = el}>
        <IndexPageTemplate
          image={frontmatter.image}
          title={frontmatter.title}
          heading={frontmatter.heading}
          subheading={frontmatter.subheading}
          mainpitch={frontmatter.mainpitch}
          description={frontmatter.description}
          introImage={frontmatter.introImage}
          intro={frontmatter.intro}
        />
      </div>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        introImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`