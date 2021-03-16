import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Grid from '@material-ui/core/Grid';

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
          <p className="page-description mt-2">The skillset of a performer translates to any profession. Whether it’s improvisation, collaboration or communication, students employ a diverse range of stage techniques in their everyday experiences. </p>
          <p className="page-description mt-2">In a changing world, students at Sesquipedalian will be better equipped to communicate purposefully, think creatively and critically, build emotional intelligence and manage interpersonal relationships with proficiency and care.</p>
          
        </Grid>
      </Grid>

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
          <p className="page-description mt-2">We believe great performance comes from authenticity. At Sesquipedalian, we design Social and Emotional Learning (SEL) environments to give your child a sense of empathy, social awareness and interpersonal acuity by simultaneously stimulating thinking, feeling and doing.</p>
        </Grid>
      </Grid>

      <Grid container
        direction="row"
        justify="center"
        className="mt-3"
      >
        <Grid item xs={12} sm={12} md={6} >
            <h1 className="main-title mt-4 mr-2 text-right">Setting the</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={6} >
            <h1 className="main-title">stage.</h1>
          <h2 className="main-sub-title">The team behind Sesquipedalian</h2>
          <p className="page-description mt-2">Amanda Paiva has always been passionate about theatre as a tool to enable young learners to express themselves creatively, articulately and effectively.</p>
          <p className="page-description mt-2">Over the course of her prolific career, she’s earned qualifications such as the Associate Teachers Certification from Trinity College London, a diploma in  Education and Certification in ESL training.  She has taught at Colombo International School since 2009 and founded the Spotlight Young Actors Studio in 2012.</p>
          <p className="page-description mt-2">Following this success, Amanda launched Sesquipedalian, a holistic, theatre-led academic curriculum to bring performing arts from the stage to the classroom.</p>
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
