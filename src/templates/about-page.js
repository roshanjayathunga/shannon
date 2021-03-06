import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

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
      <div className="about-wrap">
        <h3 className="has-text-weight-semibold is-size-2 is-size-4-mobile is-size-2-tablet is-size-2-widescreen">
          About Sesquipedalian
        </h3>
        <p>
          The learners of today, step out into a highly competitive and complex world
          tomorrow.  In order to survive and thrive in a demanding environment, it is
          vital your child  demonstrates skills of elevated excellence.
        </p> <br />
        <p>
          Individuals  who illustrate the effective skills of purposeful
          communication, creative and critical thinking, emotional
          intelligence and complex problem-solving capabilities are empowered to face the future with proficiency and confidence.
        </p><br />

        <p>
          Acquiring these skills will enable those who possess it to excel
          academically, in business, in artistic and intellectual pursuits
          and in managing  relationships within the society.
        </p><br />

        <p>
          At STL our aim is to look beyond test scores to the knowledge, skills,
          work habits, and character traits students need to succeed in adult life.
        </p><br />

        <p>
          We have developed a distinct programme that enables young people to find their
          voice, generate self belief and express themselves creatively while experiencing
          much fun and fulfilment along the way!
        </p><br />
      </div>

      <div>
        <div className="about-mission">
          <h3 className="has-text-weight-semibold is-size-3 is-size-5-mobile is-size-3-tablet is-size-3-widescreen">
            Mission
          </h3>
          <p >“Our mission is to guide young learners to become cognizant and creative
          scholars poised to be the leaders of their chosen fields, tomorrow”</p>
          <br /> <br />
          <h3 className="has-text-weight-semibold is-size-3 is-size-5-mobile is-size-3-tablet is-size-3-widescreen">
            Values
          </h3>
          <p >“Our theatre led teaching strategies are aimed to promote emotional intelligence, respect, collaboration,
            self-awareness and empathy among students, inspiring them to be significant”</p>
        </div>
      </div>

      <div className="content-area">
        <h3 className="has-text-weight-semibold is-size-3 is-size-5-mobile is-size-3-tablet is-size-3-widescreen">
          Why Choose STL
        </h3>
        <div className="why-choose-list">
          <ul>
            <li>
              <i class="fas fa-dot-circle list-item-icon"></i>
              <span>
                Focus on personalisation ensures each student is
                given the opportunity to maximize their potential.
              </span>
            </li>
            <li>
              <i class="fas fa-dot-circle list-item-icon"></i>
              <span>
                The curriculum demands active participation and provides enriching opportunities to;
              </span>
              <ul>
                <li>
                  <i class="far fa-dot-circle list-item-icon"></i>
                  <span>Encourage exploration</span>
                </li>
                <li>
                  <i class="far fa-dot-circle list-item-icon"></i>
                  <span>Inspire leadership</span>
                </li>
                <li>
                  <i class="far fa-dot-circle list-item-icon"></i>
                  <span>Instill confidence and esteem</span>
                </li>
                <li>
                  <i class="far fa-dot-circle list-item-icon"></i>
                  <span>Build Eloquence  </span>
                </li>
              </ul>
            </li>
            <li>
              <i class="fas fa-dot-circle list-item-icon"></i>
              <span>
              The teaching resources make learning fun, exciting and thought-provoking.
              </span>
            </li>
            <li>
              <i class="fas fa-dot-circle list-item-icon"></i>
              <span>
                The emphasis on vocabulary development throughout the course improves all areas of communication- listening, speaking, reading and writing
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="about-methodology">
          <h3 className="has-text-weight-semibold is-size-3 is-size-5-mobile is-size-3-tablet is-size-3-widescreen">
            Sesquipedalian Methodology
          </h3>
          <p >The sesquipedalian methodology is based on the Theatre led learning strategy, which is a highly effective way to simultaneously activate thinking, feeling and doing. It builds ‘muscle memory’ fast, and is more fun and interactive than many other approaches to learning.</p>
          <br />
          <p >This nontraditional holistic approach to learning is armed with a  gamut of drama tools including improvisation, theatre, mime, puppetry, role play, real play, storytelling and dramatic poetry  along with carefully chosen thematic content presented in the most innovative and  interactive learning environment. The goal of each lesson is to ensure students become 
            ‘college and career ready’ while bringing the word “fun” back into learning.</p>
          <br />
      </div>

      <div className="content-area">
          <h3 className="has-text-weight-semibold is-size-3 is-size-5-mobile is-size-3-tablet is-size-3-widescreen">
            The Team
          </h3>
          <p>Amanda Paiva began her involvement in theatre and dramatic art at the age of six.  She was mentored by some of the most esteemed and well known practitioners in the field and achieved her Associate Teachers Certification from Trinity College London. She further expanded her knowledge in teaching with a certificate in education and ESL teaching</p>
          <br />
          <p>She started her teaching career at Colombo International School in 2009 and since then has emphasized the use of drama as a cross curricular resource as well as a tool to bring out essential leadership skills in young learners. She has directed numerous high quality large scale musical productions for leading schools and has worked with the pioneers in the industry. </p>
          <br />
          <p>Having embarked on a corporate career path, she soon discovered the huge need which existed among individuals to express themselves and communicate effectively. Her love and passion for the cause led her to dedicate her work towards teaching young children theatre, language and performance skills.</p>
          <br />
          <p>She founded Spotlight young Actors’ studio in 2012 offering a comprehensive drama and self-development program. The success of this project further inspired her to found ‘Sesquipedalian’ an innovative and exclusive program to employ her experience in the industry utilizing theatre led learning to inspire, nurture, challenge, educate and empower youngsters to create a significant impact in the community.</p>
          <br />
      </div>

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
