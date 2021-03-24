import React from 'react'

import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Layout from '../../components/Layout'

import cover from '../../img/curriculum/cover.jpg'
import launch from '../../img/curriculum/launch.jpg'
import ignite from '../../img/curriculum/ignite.jpg'
import propel from '../../img/curriculum/propel.jpg'
import ascend from '../../img/curriculum/ascend.jpg'

export default class ProgramIndexPage extends React.Component {
  state = {
    showSchedule: false
  }

  handleClickOpen = () => {
    this.setState({
      showSchedule: true
    })
  };

  handleClose = () => {
    this.setState({
      showSchedule: false
    })
  };
  render() {
    return (
      <Layout>

        <section className="section-program">
          {/* <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={12} sm={12} md={9}
            >
              <h3 className="has-text-weight-semibold is-size-2 is-size-4-mobile is-size-2-tablet is-size-2-widescreen">
                Curriculum
            </h3>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <button variant="contained" color="primary" className="btn btn-primary float-right btm-sm-full-width"
                onClick={this.handleClickOpen}
              >
                Check Weekly Shedule
            </button>
            </Grid>
          </Grid> */}

          {/* Section 1 */}
          <Grid container
            direction="row"
            justify="center"

          >
            <Grid item xs={12} sm={12} md={6} >
              <h1 className="main-title mt-4 mr-2 text-right">Learning takes</h1>
            </Grid>
            <Grid item xs={12} sm={12} md={6} >
              <h1 className="main-title">centre stage.</h1>
              <h2 className="main-sub-title">Launch to Ascend curriculum</h2>
            </Grid>
          </Grid>

          <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}

          >
            <Grid item xs={12} sm={12} md={12} >
              <img src={cover} className="about-img-main" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} >
              <p className="page-description">The Sesquipedalian language arts and
              personality development curriculum is
              a first of its kind based on a combination
              of techniques outlined in the EL Education
              Framework and Character First Education
              Leadership Programme.
              At Sesquipedalian, we guide our students to
              achieve three theatre-led pillars of high
              performance
                </p>
            </Grid>
          </Grid>

          {/* Section 2 */}
          <Grid container
            direction="row"
            className="mt-3"
          >
            <Grid item xs={12} sm={12} md={4} >
              <h1 className="section-title">Interpretation</h1>
            </Grid>
            <Grid item xs={12} sm={12} md={8} >
              <p className="page-description">To develop an analytical mind, advancing from comprehension of
              concepts to complex reasoning. To communicate clearly and eloquently,
              with a proficiency in language that enriches every aspect of their
                </p>
            </Grid>
          </Grid>

          <Grid container
            direction="row"
            className="mt-2"
          >
            <Grid item xs={12} sm={12} md={4} >
              <h1 className="section-title">Improvisation</h1>
            </Grid>
            <Grid item xs={12} sm={12} md={8} >
              <p className="page-description">To be agile and creative, learning to reinvent themselves to work under
              pressure, try new ideas, learn independently and adapt to constantly
              changing situations.
              </p>
            </Grid>
          </Grid>

          <Grid container
            direction="row"
            className="mt-2"
          >
            <Grid item xs={12} sm={12} md={4} >
              <h1 className="section-title">Character</h1>
            </Grid>
            <Grid item xs={12} sm={12} md={8} >
              <p className="page-description">
                To develop self-image, self-discipline and self-confidence, taking part in
                collaborative efforts with empathy, integrity and compassion.
              </p>
            </Grid>
          </Grid>

          {/* Section 3 */}
          <Grid container
            direction="row"
            justify="center"
            className="mt-3"

          >
            <Grid item xs={12} sm={12} md={4} >
              <h1 className="main-title mt-4 mr-2 text-right">Play by</h1>
            </Grid>
            <Grid item xs={12} sm={12} md={8} >
              <h1 className="main-title">Play</h1>
              <button variant="contained" color="primary" className="btn btn-primary float-right btm-sm-full-width"
                onClick={this.handleClickOpen}
              >
                Check Weekly Shedule
              </button>
              <h2 className="main-sub-title">Progressive development</h2>
            </Grid>
          </Grid>

          <Grid container
            direction="row"
            spacing={3}
          >
            <Grid item xs={12} sm={12} md={4} >
            </Grid>
            <Grid item xs={12} sm={12} md={8} >
              <p className="page-description">
                From the age of 5 and above, students can progress through the program
                at their own pace, with interactive lessons, engaging academic content
                and live performances at every stage.

                </p>
            </Grid>
          </Grid>

          <Grid container
            direction="row"
            spacing={3}
          >
            <Grid item xs={12} sm={12} md={9} >
            </Grid>
            <Grid item xs={12} sm={12} md={3} >
              <div className="program-tile bg-secondary">
                <h1>Ascend</h1>
                <p>For ages 14 and above</p>
              </div>
            </Grid>
          </Grid>

          <Grid container
            direction="row"
            spacing={3}
          >
            <Grid item xs={12} sm={12} md={6} >
            </Grid>
            <Grid item xs={12} sm={12} md={3} >
              <div className="program-tile bg-primary">
                <h1>Propel</h1>
                <p>For ages 11-13</p>
              </div>
            </Grid>
          </Grid>

          <Grid container
            direction="row"
            spacing={3}
          >
            <Grid item xs={12} sm={12} md={3} >
            </Grid>
            <Grid item xs={12} sm={12} md={3} >
              <div className="program-tile bg-accent">
                <h1>Ignite</h1>
                <p>For ages 8-10</p>
              </div>
            </Grid>
          </Grid>

          <Grid container
            direction="row"
            spacing={3}
          >
            <Grid item xs={12} sm={12} md={3} >
              <div className="program-tile bg-accent-light">
                <h1>Launch</h1>
                <p>For ages 5-7</p>
              </div>
            </Grid>
          </Grid>


          {/* Section 4 */}
          <Grid container
            direction="row"
            spacing={3}
            className="mt-3 p-2 bg-accent-light"
          >
            <Grid item xs={12} sm={12} md={3} >
              <h1 className="section-title">Launch</h1>
              <h2 className="section-sub-title">For ages 5-7</h2>
            </Grid>
            <Grid item xs={12} sm={12} md={9} >
              <p className="page-description-lg">
                An exploration-based approach to learning to get started with theatre-led learning, guided by trained facilitators and timeless drama techniques.
                </p>
            </Grid>
            <Grid item xs={12} sm={12} md={12} >
              <img src={launch} className="program-tile-img" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} className="flex flex-column justify-around" >
              <p className="page-description">
                - Thematic content, stories and literary texts to stimulate creative thinking and character development.
                </p>
              <p className="page-description">
                - Modelling language skills in an immersive environment through drama play
                </p>
              <p className="page-description">
                - Group activities and projects to encourage self-expression
                </p>
              <p className="page-description">
                - Simulated drama situation to articulate emotions and respond empathetically
                </p>
            </Grid>
          </Grid>

          <Grid container
            direction="row"
            spacing={3}
            className="mt-3 p-2 bg-accent text-white"
          >
            <Grid item xs={12} sm={12} md={3} >
              <h1 className="section-title text-white">Ignite</h1>
              <h2 className="section-sub-title">For ages 8-10</h2>
            </Grid>
            <Grid item xs={12} sm={12} md={9} >
              <p className="page-description-lg">
                An expansion of literary and speech proficiency with real-world applications of theatre techniques such as vocalization and visual communication.
                </p>
            </Grid>
            <Grid item xs={12} sm={12} md={12} >
              <img src={ignite} className="program-tile-img" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} className="flex flex-column justify-around" >
              <p className="page-description-sm">
                - Literature from different genres to stimulate vocabulary development, comprehension skills and critical thinking.
                </p>
              <p className="page-description">
                - Foundation speech communication skills such as public speaking practice
                </p>
              <p className="page-description">
                - Research skills and visual aid development for presentations
                </p>
              <p className="page-description">
                - Reading practices to engage with voice, speech and eye contact
                </p>
              <p className="page-description">
                - Theatre-led activities such as ensemble building games and script work
                </p>
              <p className="page-description">
                - Improvisation aimed at building collaboration, creativity and problem-solving strategies
                </p>
            </Grid>
          </Grid>

          <Grid container
            direction="row"
            spacing={3}
            className="mt-3 p-2 bg-primary text-white"
          >
            <Grid item xs={12} sm={12} md={3} >
              <h1 className="section-title text-white">Propel</h1>
              <h2 className="section-sub-title">For ages 11-13</h2>
            </Grid>
            <Grid item xs={12} sm={12} md={9} >
              <p className="page-description-lg">
                An exploration-based approach to learning to get started with theatre-led learning, guided by trained facilitators and timeless drama techniques.
                </p>
            </Grid>
            <Grid item xs={12} sm={12} md={12} >
              <img src={propel} className="program-tile-img" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} className="flex flex-column justify-around" >
              <p className="page-description">
                - Thematic content, stories and literary texts to stimulate creative thinking and character development.
                </p>
              <p className="page-description">
                - Modelling language skills in an immersive environment through drama play
                </p>
              <p className="page-description">
                - Group activities and projects to encourage self-expression
                </p>
              <p className="page-description">
                - Simulated drama situation to articulate emotions and respond empathetically
                </p>
            </Grid>
          </Grid>

          <Grid container
            direction="row"
            spacing={3}
            className="mt-3 p-2 bg-secondary text-white"
          >
            <Grid item xs={12} sm={12} md={3} >
              <h1 className="section-title text-white">Ascend</h1>
              <h2 className="section-sub-title">For ages 14 and above</h2>
            </Grid>
            <Grid item xs={12} sm={12} md={9} >
              <p className="page-description-lg">
                An advanced understanding of communication, interpersonal skills, logical reasoning and creative problem-solving.
                </p>
            </Grid>
            <Grid item xs={12} sm={12} md={12} >
              <img src={ascend} className="program-tile-img" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} className="flex flex-column justify-around" >
              <p className="page-description">
                - Use of multisyllabic words and phrase choices based on a highly developed vocabulary.
                </p>
              <p className="page-description">
                - Understanding of challenging contexts
                </p>
              <p className="page-description">
                - Performance-led activities to communicate texts with vocal and physical techniques to keep audiences engaged
                </p>
              <p className="page-description">
                - Demonstrate the ability to engage and take responsibility for discussions
                </p>
                <p className="page-description">
                - Develop perceptiveness, active listening skills and justification of opinions through debate, role-play and real-play
                </p>
                <p className="page-description">
                - Develop emotional intelligence through the exploration of skits, improvisation and relevant theatre techniques
                </p>
            </Grid>
          </Grid>

        </section>

        <Dialog
          open={this.state.showSchedule}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle className="bg-accent text-white" id="alert-dialog-title" onClose={this.state.handleClose}>{"Weekly Schedule"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <TableContainer >
                <Table c aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell >Sunday</TableCell>
                      <TableCell >Tuesday</TableCell>
                      <TableCell >Wednesday</TableCell>
                      <TableCell >Thursday</TableCell>
                      <TableCell >Friday</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="bg-accent-light">
                    <TableRow>
                      <TableCell >9.00-10.00 am</TableCell>
                      <TableCell >Ignite</TableCell>
                      <TableCell >-</TableCell>
                      <TableCell >-</TableCell>
                      <TableCell >-</TableCell>
                      <TableCell >-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell >3.00-4.00 pm</TableCell>
                      <TableCell >-</TableCell>
                      <TableCell >Launch</TableCell>
                      <TableCell >Launch</TableCell>
                      <TableCell >Launch</TableCell>
                      <TableCell >Ignite </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell >4.00-5.00 pm</TableCell>
                      <TableCell >Propel</TableCell>
                      <TableCell >Ignite</TableCell>
                      <TableCell >Ascend</TableCell>
                      <TableCell >Propel</TableCell>
                      <TableCell >Propel</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell >5.00-6.00 pm</TableCell>
                      <TableCell >Ascend</TableCell>
                      <TableCell >-</TableCell>
                      <TableCell >-</TableCell>
                      <TableCell >-</TableCell>
                      <TableCell >-</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button className="btn"
              onClick={this.handleClose}
            >
              Ok
            </button>
          </DialogActions>
        </Dialog>
      </Layout>
    )
  }
}
