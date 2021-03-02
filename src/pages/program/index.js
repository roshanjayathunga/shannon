import React from 'react'

import Grid from '@material-ui/core/Grid';

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class ProgramIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        {/* <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section> */}

        <section className="section-program">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={12} sm={12} md={9}
            >
              <h3 className="has-text-weight-semibold is-size-2 is-size-4-mobile is-size-2-tablet is-size-1-widescreen">
                Our Programmes
            </h3>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <button variant="contained" color="primary" className="btn btn-primary float-right btm-sm-full-width">
                Check Weekly Shedule
            </button>
            </Grid>
          </Grid>
          <div id="launch" className="program-wrap mt-2">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={4}
            >
              <Grid item xs={12} sm={12} md={3}>
                <div
                  style={{
                    backgroundImage: `url('https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')`,
                    width: '100%',
                    height: '80vh',
                    backgroundSize: 'cover',
                    backgroundPositionX: 'center'
                  }}
                >
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={9}>
                <div className="program-info">
                  <h3 className="has-text-weight-semibold is-size-3 is-size-5-mobile is-size-3-tablet is-size-3-widescreen">
                    Launch to Ascend
                  </h3>
                  <p>
                    The ‘Launch to Ascend’ language and personality enrichment programme provides learners with high-interest academic content
                    presented through theatre led activities and resources that ensure students move progressively towards mastery in three key areas.
                  </p>
                  <br />
                  <ul>
                    <li>
                      <i class="far fa-dot-circle list-item-icon"></i>
                      <span> Language proficiency</span>
                      <span className="block ml-2 mt-1 text-small"> To certify achievement in many aspects of your child’s education, work and in their personal life</span>
                    </li>
                    <li>
                      <i class="far fa-dot-circle list-item-icon"></i>
                      <span> Articulate and expressive communication</span>
                      <span className="block ml-2 mt-1 text-small"> To enhance your child’s capacity to negotiate and express views</span>
                    </li>
                    <li>
                      <i class="far fa-dot-circle list-item-icon"></i>
                      <span> Higher order thinking skills</span>
                      <span className="block ml-2 mt-1 text-small"> To expand your child’s ability to evaluate, analyze and think creatively.</span>
                    </li>
                  </ul>

                  <br />
                  <p>
                    The curriculum ensures seamless progressive development across the breadth of the program,
                    thus enabling students to pick up key skills complementary to their profiles at a comfortable pace, in a continuously supervised environment. At each level the content varies in scope and complexity ensuring continuous development.
                  </p>

                  <br />
                  <p>
                    At the end of each academic year students will perform in a public theatrical performance or
                    community service project to demonstrate skills acquired and enhance talents.
                  </p>
                </div>

              </Grid>
            </Grid>
          </div>

          <div id="launch" className="program-wrap mt-2">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={4}
            >
              <Grid item xs={12} sm={12} md={9}>
                <div className="program-info">
                  <h3 className="has-text-weight-semibold is-size-3 is-size-5-mobile is-size-3-tablet is-size-3-widescreen">
                    Launch (For ages 5-7)
                  </h3>
                  <p>
                    Our exploration based approach to learning ensures an exceptional start for your child. Students are introduced to thematic content,
                    Stories and literary texts to stimulate creative thinking, interest and enthusiasm
                  </p>
                  <br />
                  <p>
                    Our trained facilitators will model language skills and behavior to encourage children
                    to be immersed in a language rich environment while they play and learn.
                  </p>
                  <br />
                  <p>
                    Learners participate in group activities and projects that allow them to effectively express themselves, articulate emotions
                    and respond empathetically in conditions created through Drama play
                  </p>
                </div>
              </Grid>

              <Grid item xs={12} sm={12} md={3}>
                <div
                  style={{
                    backgroundImage: `url('https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')`,
                    width: '100%',
                    height: '80vh',
                    backgroundSize: 'cover',
                    backgroundPositionX: 'center'
                  }}
                >
                </div>
              </Grid>
            </Grid>
          </div>

          <div className="program-wrap mt-2">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={4}
            >
              <Grid item xs={12} sm={12} md={3}>
                <div
                  style={{
                    backgroundImage: `url('https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')`,
                    width: '100%',
                    height: '80vh',
                    backgroundSize: 'cover',
                    backgroundPositionX: 'center'
                  }}
                >
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={9}>
                <div className="program-info">
                  <h3 className="has-text-weight-semibold is-size-3 is-size-5-mobile is-size-3-tablet is-size-3-widescreen">
                    Propel (For ages 11-13)
                  </h3>
                  <p>
                    At this stage, Students will develop word awareness, learn morphological
                    elements that are most frequent and Independent word learning strategies
                    through a wide genre of age appropriate literary content. Additionally
                    students will develop the ability to use context to determine meanings of
                    unknown words  through carefully structured assignments and Collaborated
                    Learning activities
                  </p>
                  <br />

                  <p>
                    Lessons will consist of performance-led activities drawing awareness
                    to emotion, mood and the ability to  communicate this understanding
                    through the use of vocal techniques including  breath control,
                    pause, emphasis, changes of tone, pace, pitch and volume.
                  </p>

                  <br />
                  <p>
                    Students will be guided to develop communication skills through
                    the delivery of effective presentations on social, cultural or environmental
                    issues that demonstrate background research, analysis and debate while integrating
                    presentation skills with clear, relevant visual aids.
                  </p>
                  <br />

                  <p>
                    Drama led activities including hot seating, devised drama, role play
                    improvisation and SEL strategies (social and emotional learning) will
                    present learners with nine essential leadership skills to build
                    character and competence needed for success.
                  </p>
                </div>

              </Grid>
            </Grid>
          </div>

          <div className="program-wrap mt-2">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={4}
            >
              <Grid item xs={12} sm={12} md={9}>
                <div className="program-info">
                  <h3 className="has-text-weight-semibold is-size-3 is-size-5-mobile is-size-3-tablet is-size-3-widescreen">
                    Ascend (For ages 14 and above)
                  </h3>
                  <p>
                    At the end of this course students will use multisyllabic words or
                    phrase choices based on a highly developed vocabulary and a thorough
                    understanding of challenging contexts. Performance led activities will
                    enable students to acquire the skill to communicate the meaning of a
                    given text with relevant and appropriate use of vocal and physical
                    techniques to engage an audience fully.
                  </p>
                  <br />

                  <p>
                    Students who progress to the ‘Ascend’ stage  will demonstrate the
                    ability to engage spontaneously and take some responsibility for
                    discussion, including appropriate justification of opinions and
                    showing some perceptiveness and active listening skills through
                    debate, role play and real-play.
                  </p>
                  <br />

                  <p>
                    Learners will develop the ability to deliver a talk on an unseen
                    topic while demonstrating knowledge of the subject matter and
                    engaging interactively with the audience through verbal and
                    non-verbal communication.
                  </p>
                  <br />

                  <p>
                    The program directs students to develop a creative response to
                    challenges in authentic situations, identify individual personality
                    traits and develop emotional intelligence through the exploration of skits,
                    improvisation and relevant theatre techniques.
                  </p>


                </div>
              </Grid>

              <Grid item xs={12} sm={12} md={3}>
                <div
                  style={{
                    backgroundImage: `url('https://images.pexels.com/photos/4834822/pexels-photo-4834822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
                    width: '100%',
                    height: '80vh',
                    backgroundSize: 'cover',
                    backgroundPositionX: 'center'
                  }}
                >
                </div>
              </Grid>
            </Grid>
          </div>

        </section>
      </Layout>
    )
  }
}
