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
          <h3 className="has-text-weight-semibold is-size-2 is-size-4-mobile is-size-2-tablet is-size-1-widescreen">
            Our Programmes
          </h3>

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
                    backgroundImage: `url('https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')`,
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
