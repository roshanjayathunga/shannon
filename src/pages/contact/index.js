import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import { Button, Grid, TextField } from '@material-ui/core'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section-contact">
          <Grid container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={0} sm={0} md={7} >
              {/* <img src="https://images.pexels.com/photos/5063095/pexels-photo-5063095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
              <div
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/5063095/pexels-photo-5063095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  height: '100vh'
                }}
              ></div>

            </Grid>
            <Grid item xs={12} sm={12} md={5} >
              <div className="contact-wrap">
                <h3 className="has-text-weight-semibold is-size-2 is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
                  Contact Us
                </h3>

                <form>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                  <TextField
                    id="message"
                    label="message"
                    margin="normal"
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="btn-primary"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </Grid>
          </Grid>
        </section>
      </Layout>
    )
  }
}
