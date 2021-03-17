import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Grid from '@material-ui/core/Grid';

import methodology from '../img/about/methodology.jpg'
import social from '../img/about/social.jpg'
import team1 from '../img/about/team1.jpg'
import team2 from '../img/about/team2.jpg'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    // <section className="section section--gradient">
    //   <div className="container">
    //     <div className="columns">
    //       <div className="column is-10 is-offset-1">
    //         <div className="section">
    //           <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
    //             {title}
    //           </h2>
    //           <PageContent className="content" content={content} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="section-about">

      {/* Section 1 */}
      <Grid container
        direction="row"
        justify="center"
  
      >
        <Grid item xs={12} sm={12} md={6} >
            <h1 className="main-title mt-4 mr-2 text-right">All the world’s</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={6} >
          <h1 className="main-title">a stage.</h1>
          <h2 className="main-sub-title">Theatre-led methodology</h2>
        </Grid>
      </Grid>

      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
  
      >
        <Grid item xs={12} sm={12} md={6} >
            <img src={methodology} className="about-img"/>
        </Grid>
        <Grid item xs={12} sm={12} md={6} >
          <p className="page-description mt-2">The skillset of a performer translates to any profession. Whether it’s improvisation, collaboration or communication, students employ a diverse range of stage techniques in their everyday experiences. </p>
          <p className="page-description mt-2">In a changing world, students at Sesquipedalian will be better equipped to communicate purposefully, think creatively and critically, build emotional intelligence and manage interpersonal relationships with proficiency and care.</p>
        </Grid>
      </Grid>

      {/* Section 2 */}
      <Grid container
        direction="row"
        justify="center"
        className="mt-3"
      >

        <Grid item xs={12} sm={12} md={6} >
          <h1 className="main-title mt-4 mr-2 text-right">Getting into</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={6} >
            <h1 className="main-title">character.</h1>
            <h2 className="main-sub-title">Social and Emotional Learning (SEL)</h2>
        </Grid>
      </Grid>

      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} sm={12} md={6} >
          <p className="page-description mt-2 text-right">We believe great performance comes from authenticity. At Sesquipedalian, we design Social and Emotional Learning (SEL) environments to give your child a sense of empathy, social awareness and interpersonal acuity by simultaneously stimulating thinking, feeling and doing.</p>
        </Grid>

        <Grid item xs={12} sm={12} md={6} >
          <img src={social} className="about-img"/>
        </Grid>
      </Grid>

      {/* Section 3 */}
      <Grid container
        direction="row"
        justify="center"
        className="mt-3"
      >
        <Grid item xs={12} sm={12} md={4} >
            <h1 className="main-title mt-4 mr-2 text-right">Setting</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={8} >
          <h1 className="main-title">the stage.</h1>
          <h2 className="main-sub-title">The team behind Sesquipedalian</h2>
        </Grid>
      </Grid>

      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
  
      >
      <Grid item xs={12} sm={12} md={4} >
            <img src={team1} className="about-img about-img-portrait"/>
        </Grid>
        <Grid item xs={12} sm={12} md={8} >
          <p className="page-description mt-2"><b><i>Amanda Paiva</i></b> has always been passionate about      
				theatre as a tool to enable young learners to express 
				themselves creatively and effectively.
				Over the course of her prolific career, she’s earned
				qualifications such as the Associate Teachers
 				Certification from Trinity College London, a diploma
          in  Education and Certification in ESL training.
 						She has taught at Colombo International School since 
 					2009 and founded the Spotlight Young Actors Studio
   					in 2012.</p>
          <p className="page-description mt-2">Following this success, Amanda launched 
					           Sesquipedalian, a holistic, theatre-led academic 
                    curriculum to bring performing arts from the stage to the 
		         				classroom.</p>
        </Grid>
      </Grid>

      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >

        <Grid item xs={12} sm={12} md={8} >
          <p className="page-description mt-2 text-right"><b><i>Wendy Devaraj</i></b>is an educator and artist whose work focuses on instructing young learners during early childhood. She holds a professional diploma in advanced teaching and the Cambridge TKT certification. With teaching experience of over 5 years, Wendy believes in providing holistic learning experiences that tap 
          into students’ passion so they can form deeper connections with the curriculum. </p>
        </Grid>
        <Grid item xs={12} sm={12} md={4} >
            <img src={team2} className="about-img about-img-portrait"/>
        </Grid>
      </Grid>

      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >

        <Grid item xs={12} sm={12} md={8} >
          <p className="page-description mt-2 "><b><i>Hillarine Fernando</i></b>holds a Licentiate Diploma in Speech and Drama (LTCL Teaching) She is a member and an examiner for examinations conducted in 
          Colombo for STSD (The Society of Teachers of Speech and Drama UK). In addition to her extensive theatre teaching experience she currently lectures for Early Childhood Education studies.
        </p>
        </Grid>
        <Grid item xs={12} sm={12} md={4} >
            
        </Grid>
      </Grid>

    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
