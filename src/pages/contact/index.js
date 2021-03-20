import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import { Button, Grid, TextField } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem';
import contact from '../../img/contact.jpg'
import location from '../../img/map.png'

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
      currency: '',
      slectedTime: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleDateChange = (date) => {
    this.setState({ slectedTime: date })
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
             <Grid item xs={0} sm={0} md={12} >
              <img src={contact} className="contact-cover-img" />
             </Grid>
          </Grid>

          <Grid container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={0} sm={0} md={5} >
            </Grid>
            <Grid item xs={12} sm={12} md={7} >
              <div className="contact-wrap">

                <h3 className="has-text-weight-semibold is-size-2 is-size-3-mobile is-size-2-tablet is-size-2-widescreen">
                  Contact Us
                </h3>

                <form>

                  <Grid container
                    spacing={3}
                  >
                    <Grid item xs={12} sm={12} md={12} >
                      <TextField
                        id="standard-select-currency"
                        select
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
                    </Grid>

                    <Grid item xs={12} sm={12} md={3} >
                      <TextField
                        id="standard-select-currency"
                        select
                        margin="normal"
                        fullWidth
                        required
                        value={this.state.currency}
                        onChange={this.handleChange}
                        label="Title"
                        className="mt--1"
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} >

                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        className="mt--1"
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} >
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Mobile No"
                        name="mobile"
                        className="mt--1"
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} >
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        type="time"
                        id="name"
                        label="Prefered Time"
                        name="time"
                        defaultValue="09:30"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                        className="mt--1"
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={9} >
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="studentName"
                        label="Name of Child"
                        name="studentName"
                        autoComplete="email"
                        className="mt--1"
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={3} >
                      <TextField
                        id="standard-select-currency"
                        select
                        margin="normal"
                        fullWidth
                        required
                        value={this.state.currency}
                        onChange={this.handleChange}
                        label="Age Group"
                        className="mt--1"
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>

                  </Grid>

                  <Grid item xs={12} sm={12} md={12} >
                    <br />
                    <button variant="contained" color="primary" className="btn btn-accent btn-fullwidth">
                      Submit
                  </button>
                  </Grid>


                </form>
              </div>
            </Grid>

          </Grid>
        </section>
      </Layout>
    )
  }
}
