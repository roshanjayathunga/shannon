import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import { Button, Grid, TextField } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}


export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      isValidated: false,
      currency: ''
    }
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

  handleChange = (event) => {
    this.setState({
      currency: event.target.value
    })
  };

  render() {
    const currencies = [
      {
        value: 'Enrol',
        label: 'Enrol',
      },
      {
        value: 'Book a trial lesson',
        label: 'Book a trial lesson',
      }
    ];
    
    return (
      <Layout>
        <section className="section-contact">
          <Grid container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={0} sm={0} md={5} >
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
            <Grid item xs={12} sm={12} md={7} >
              <div className="contact-wrap">
                <h3 className="has-text-weight-semibold is-size-2 is-size-3-mobile is-size-2-tablet is-size-2-widescreen">
                  Contact Us
                </h3>

                <form>

                  <TextField
                    id="standard-select-currency"
                    select
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    value={this.state.currency}
                    onChange={this.handleChange}
                    label="Please select option"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

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

                  <button variant="contained" color="primary" className="btn btn-primary btm-sm-full-width">
                    Submit
                  </button>
                </form>
              </div>
            </Grid>
          </Grid>
        </section>
      </Layout>
    )
  }
}
