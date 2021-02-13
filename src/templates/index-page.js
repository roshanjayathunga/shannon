import React, {useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import Grid from '@material-ui/core/Grid';

import { gsap,TweenMax,TimelineLite, Power3, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
}) => (
  <div>
    <div className="overlay">
      <h1 className="loading-title">Sesquipedalian</h1>
      <span className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen">Theatre led learning</span>
  </div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
        boxShadow: 'inset 0 0 0 2000px #199d9552'
      }}
    >
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
        <h1
          className="hero-title"
        >
          {title}
        </h1>
        <h3
          className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen hero-subtitle"
           
        >
          {subheading}
        </h3>
      </div>
    </div>
    
    <section className="section section--gradient section-intro">
      <Grid   container
              direction="row"
              justify="center"
              alignItems="center"
            >
         <Grid item  xs={12} sm={2}>
              {/* <div className="intro-img-wrap">
                <img src={
                      !!introImage.childImageSharp ? introImage.childImageSharp.fluid.src : introImage
                    } />
              </div> */}                
        </Grid>
        <Grid item xs={12} sm={8} >
          <div className="intro-wrap">
              <h3 className="has-text-weight-semibold is-size-2 is-size-5-mobile is-size-2-tablet is-size-1-widescreen intro-heading">
                  {heading}
              </h3>
              <p className="intro-description">{description}</p>
          </div>
        </Grid>
       
      </Grid>
    </section>
    
    <section className="section section--gradient">
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
    </section>
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

    TweenMax.to(app, 0 ,{css: {visibility:'visible'}});

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

    tl.from(heroImage, 5, {y: -1200, ease: Power3.easeOut},'Start')
      .from(heroImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .5);
    
    gsap.from('.intro-wrap',{
        duration: 2,
        y: 0,
        opacity: '0',
        ease: 'ease-in',
        scrollTrigger: {
          trigger: '.intro-heading',
          start: 'top 80%',
          end:'bottom 60%',
          toggleActions: 'restart complete reverse reset'
        }
    })

  });

  return (
    <Layout>
      <div className="index-page"  ref={el => app = el}>
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
