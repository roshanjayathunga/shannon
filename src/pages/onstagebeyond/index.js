import React from 'react'
import Grid from '@material-ui/core/Grid';
import Layout from '../../components/Layout';
import { Link } from 'gatsby'

export default class ProgramIndexPage extends React.Component {

  render() {
    return (
      <Layout>
        <section className="section-onstage">

          {/* Section 1 */}
          <Grid container
            direction="row"
            justify="center"

          >
            <Grid item xs={12} sm={12} md={6} >
              <h1 className="main-title mt-4 mr-2 text-right">Classmates to</h1>
            </Grid>
            <Grid item xs={12} sm={12} md={6} >
              <h1 className="main-title">castmates.</h1>
              <h2 className="main-sub-title">Join the theatre company</h2>
            </Grid>
          </Grid>

          <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}

          >
            <Grid item xs={12} sm={12} md={3} >
              <Link to="/gallery">
                <button variant="contained" color="primary" className="btn btn-primary float-right btm-sm-full-width">
                  View Gallery
            </button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={12} md={9} >
              <p className="page-description">The skillset of a performer translates to any profession. Whether it’s improvisation, collaboration or communication, students employ a diverse range of stage techniques in their everyday experiences. </p>
              <p className="page-description mt-1">In a changing world, students at Sesquipedalian will be better equipped to communicate purposefully, think creatively and critically, build emotional intelligence and manage interpersonal relationships with proficiency and care.</p>
            </Grid>
          </Grid>

          {/* Section 2 */}
          <Grid container
            direction="row"
            justify="center"
            className="mt-3"

          >
            <Grid item xs={12} sm={12} md={6} >
              <h1 className="main-title mt-4 mr-2 text-right">Take an act</h1>
            </Grid>
            <Grid item xs={12} sm={12} md={6} >
              <h1 className="main-title">break.</h1>
              <h2 className="main-sub-title">Enrichment workshops</h2>
            </Grid>
          </Grid>

          <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}

          >
            <Grid item xs={12} sm={12} md={3} >
            </Grid>
            <Grid item xs={12} sm={12} md={9} >
              <p className="page-description">The skillset of a performer translates to any profession. Whether it’s improvisation, collaboration or communication, students employ a diverse range of stage techniques in their everyday experiences. </p>
              <p className="page-description mt-1">In a changing world, students at Sesquipedalian will be better equipped to communicate purposefully, think creatively and critically, build emotional intelligence and manage interpersonal relationships with proficiency and care.</p>
            </Grid>
          </Grid>

          {/* Section 3 */}
          <Grid container
            direction="row"
            justify="center"
            spacing={3}
            className="mt-3 bg-secondary onstage-card"
          >
            <Grid item xs={12} sm={12} md={12} >
              <h1>Young Explorers Challenge</h1>
              <p>A project that brings younger students together to test their creativity through Team Challenges.</p>
            </Grid>
          </Grid>

          <Grid container
            direction="row"
            justify="center"
            spacing={3}
            className="mt-3 bg-primary onstage-card"
          >
            <Grid item xs={12} sm={12} md={12} >
              <h1>Fine Arts Challenge</h1>
              <p>Students explore social issues while experimenting with
              aspects of visual arts including script writing, stage design,
              Props costume and artistic media.
              </p>
            </Grid>
          </Grid>

          <Grid container
            direction="row"
            justify="center"
            spacing={3}
            className="mt-3 bg-accent onstage-card"
          >
            <Grid item xs={12} sm={12} md={12} >
              <h1>Improvisational Challenge</h1>
              <p>This Team Challenge focuses on spontaneity and storytelling,with teams receiving props and topics on the spot.
              </p>
            </Grid>
          </Grid>

          <Grid container
            direction="row"
            justify="center"
            spacing={3}
            className="mt-3 bg-secondary onstage-card"
          >
            <Grid item xs={12} sm={12} md={12} >
              <h1>Community Service Challenge</h1>
              <p>Scientific Challenges combine research and curiosity of 
					science with the creativity of theater arts.</p>
            </Grid>
          </Grid>

          <Grid container
            direction="row"
            justify="center"
            spacing={3}
            className="mt-3 bg-primary onstage-card"
          >
            <Grid item xs={12} sm={12} md={12} >
              <h1>Scientific Challenge</h1>
              <p>Students explore social issues while experimenting with
              aspects of visual arts including script writing, stage design,
              Props costume and artistic media.
              </p>
            </Grid>
          </Grid>

        </section>
      </Layout>
    )
  }
}
