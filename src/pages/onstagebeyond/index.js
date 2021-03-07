import React from 'react'
import Grid from '@material-ui/core/Grid';
import Layout from '../../components/Layout'

export default class ProgramIndexPage extends React.Component {

  render() {
    return (
      <Layout>
        <section className="section-about">
          <div className="about-wrap">
            <h3 className="has-text-weight-semibold is-size-2 is-size-4-mobile is-size-2-tablet is-size-2-widescreen">
              On Stage and Beyond
            </h3>

            <h3 className="has-text-weight-semibold is-size-3 is-size-5-mobile is-size-3-tablet is-size-3-widescreen">
              Performances
          </h3>

            <p>
              Training for performance is an important element included in the enrichment program,
              students are trained each year to present a large scale theatrical
              performance staged in a professional theatre to a paying  audience,
              the play is rehearsed over the term and performed as a year end event.
          </p>
            <br />
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={4}
            >
              <Grid item xs={12} sm={12} md={6}
              >
                <div
                  style={{
                    backgroundImage: `url('https://images.pexels.com/photos/5149654/pexels-photo-5149654.jpeg?cs=srgb&dl=pexels-budgeron-bach-5149654.jpg&fm=jpg')`,
                    width: '100%',
                    height: '80vh',
                    backgroundSize: 'cover',
                    backgroundPositionX: 'center'
                  }}
                >
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <div
                  style={{
                    backgroundImage: `url('https://images.pexels.com/photos/6936086/pexels-photo-6936086.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')`,
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


          <div>
            <div className="about-mission">
              <h3 className="has-text-weight-semibold is-size-3 is-size-5-mobile is-size-3-tablet is-size-3-widescreen">
                Enrichment workshops
          </h3>
              <p >Enrichment workshops coincide with termly holidays and are designed to
              provide children with an opportunity to collaborate in open-ended
              challenges enabling students to learn and experience the creative
              process while fostering their imagination and curiosity.  Each season,
              we offer new and engaging ‘Team Challenges’ that will encourage your
              child to explore their passions, discover their unique talents and
              learn new skills. Teams also participate in Instant Challenges—quick
                  creative and critical thinking exercises that build teamwork and problem solving abilities.</p>
              <br />

              <h4 className="has-text-weight-semibold is-size-4 is-size-4-mobile is-size-4-tablet is-size-4-widescreen">
                Young Explorers challenge
            </h4>
              <p>Young explorers challenges are customized for early learners to  explore
              their creativity and skills through dramatic adventures. Students find a
                safe place to work together and make friends. </p>
              <br />

              <h4 className="has-text-weight-semibold is-size-4 is-size-4-mobile is-size-4-tablet is-size-4-widescreen">
                Fine Arts Challenge
            </h4>
              <p>Fine Arts Challenges allow students to explore social issues while experimenting
              with aspects of visual arts
                including script writing, stage design, props costume and artistic media. </p>
              <br />

              <h4 className="has-text-weight-semibold is-size-4 is-size-4-mobile is-size-4-tablet is-size-4-widescreen">
                Improvisational challenge
            </h4>
              <p>Improvisational Challenges are focused on spontaneity and storytelling.
                Teams receive topics and props to create on the spot.</p>
              <br />

              <h4 className="has-text-weight-semibold is-size-4 is-size-4-mobile is-size-4-tablet is-size-4-widescreen">
                Community service challenge
            </h4>
              <p>Community service challenges allow students to identify, design, plan, and carry out a
                project that addresses an existing community need</p>
              <br />

              <h4 className="has-text-weight-semibold is-size-4 is-size-4-mobile is-size-4-tablet is-size-4-widescreen">
                Scientific Challenge
            </h4>
              <p>Scientific Challenges are a blend of research and curiosity of
                science with the thrill and creativity of the theater arts.</p>
              <br />

            </div>
          </div>

          <br /><br /><br /><br />


          <div>
            <div className="about-mission">
              <h3 className="has-text-weight-semibold is-size-3 is-size-5-mobile is-size-3-tablet is-size-3-widescreen">
                Enrichment workshops
          </h3>
              <p style={{ fontSize: '16px' }} >Enrichment workshops coincide with termly holidays and are designed to
              provide children with an opportunity to collaborate in open-ended
              challenges enabling students to learn and experience the creative
              process while fostering their imagination and curiosity.  Each season,
              we offer new and engaging ‘Team Challenges’ that will encourage your
              child to explore their passions, discover their unique talents and
              learn new skills. Teams also participate in Instant Challenges—quick
                  creative and critical thinking exercises that build teamwork and problem solving abilities.</p>
              <br />

              <h4 className="has-text-weight-semibold is-size-4 is-size-4-mobile is-size-4-tablet is-size-4-widescreen">
                Young Explorers challenge
            </h4>
              <p style={{ fontSize: '16px', textAlign:'justify' }} >Young explorers challenges are customized for early learners to  explore
              their creativity and skills through dramatic adventures. Students find a
                safe place to work together and make friends. </p>
              <br />

              <h4 className="has-text-weight-semibold is-size-4 is-size-4-mobile is-size-4-tablet is-size-4-widescreen">
                Fine Arts Challenge
            </h4>
              <p style={{ fontSize: '16px', textAlign:'justify' }}>Fine Arts Challenges allow students to explore social issues while experimenting
              with aspects of visual arts
                including script writing, stage design, props costume and artistic media. </p>
              <br />

              <h4 className="has-text-weight-semibold is-size-4 is-size-4-mobile is-size-4-tablet is-size-4-widescreen">
                Improvisational challenge
            </h4>
              <p style={{ fontSize: '16px', textAlign:'justify' }}>Improvisational Challenges are focused on spontaneity and storytelling.
                Teams receive topics and props to create on the spot.</p>
              <br />

              <h4 className="has-text-weight-semibold is-size-4 is-size-4-mobile is-size-4-tablet is-size-4-widescreen">
                Community service challenge
            </h4>

              <p style={{ fontSize: '16px', textAlign:'justify' }}>Community service challenges allow students to identify, design, plan, and carry out a
                project that addresses an existing community need</p>
              <br />

              <h4 className="has-text-weight-semibold is-size-4 is-size-4-mobile is-size-4-tablet is-size-4-widescreen">
                Scientific Challenge
            </h4>
              <p style={{ fontSize: '16px', textAlign:'justify' }}>Scientific Challenges are a blend of research and curiosity of
                science with the thrill and creativity of the theater arts.</p>
              <br />
            </div>
          </div>



          <br /><br /><br /><br />


          <div>
            <div className="about-mission">
              <h3 className="has-text-weight-semibold is-size-3 is-size-5-mobile is-size-3-tablet is-size-3-widescreen">
                Enrichment workshops
</h3>
              <p style={{ fontSize: '21px',lineHeight:'32px' }} >Enrichment workshops coincide with termly holidays and are designed to
              provide children with an opportunity to collaborate in open-ended
              challenges enabling students to learn and experience the creative
              process while fostering their imagination and curiosity.  Each season,
              we offer new and engaging ‘Team Challenges’ that will encourage your
              child to explore their passions, discover their unique talents and
              learn new skills. Teams also participate in Instant Challenges—quick
        creative and critical thinking exercises that build teamwork and problem solving abilities.</p>
              <br />

              <h4 className="has-text-weight-semibold is-size-4 is-size-4-mobile is-size-4-tablet is-size-4-widescreen">
                Young Explorers challenge
  </h4>
              <p style={{ fontSize: '21px',lineHeight:'32px' }} >Young explorers challenges are customized for early learners to  explore
              their creativity and skills through dramatic adventures. Students find a
      safe place to work together and make friends. </p>
              <br />

              <h4 className="has-text-weight-semibold is-size-4 is-size-4-mobile is-size-4-tablet is-size-4-widescreen">
                Fine Arts Challenge
  </h4>
              <p style={{ fontSize: '21px',lineHeight:'32px' }}>Fine Arts Challenges allow students to explore social issues while experimenting
              with aspects of visual arts
      including script writing, stage design, props costume and artistic media. </p>
              <br />

              <h4 className="has-text-weight-semibold is-size-4 is-size-4-mobile is-size-4-tablet is-size-4-widescreen">
                Improvisational challenge
  </h4>
              <p style={{ fontSize: '21px',lineHeight:'32px' }}>Improvisational Challenges are focused on spontaneity and storytelling.
      Teams receive topics and props to create on the spot.</p>
              <br />

              <h4 className="has-text-weight-semibold is-size-4 is-size-4-mobile is-size-4-tablet is-size-4-widescreen">
                Community service challenge
  </h4>

              <p style={{ fontSize: '21px',lineHeight:'32px' }}>Community service challenges allow students to identify, design, plan, and carry out a
      project that addresses an existing community need</p>
              <br />

              <h4 className="has-text-weight-semibold is-size-4 is-size-4-mobile is-size-4-tablet is-size-4-widescreen">
                Scientific Challenge
  </h4>
              <p style={{ fontSize: '21px',lineHeight:'32px' }}>Scientific Challenges are a blend of research and curiosity of
      science with the thrill and creativity of the theater arts.</p>
              <br />
            </div>
          </div>



        </section>
      </Layout>
    )
  }
}
