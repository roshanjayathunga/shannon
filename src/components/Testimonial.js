import React from 'react'
import Slider from "react-slick";

import Grid from '@material-ui/core/Grid';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Testimonial extends React.Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      fade: true,
    };
    return (
      <div className="testimonial-wrap">
        <h3 className="has-text-weight-semibold is-size-2 is-size-4-mobile is-size-2-tablet is-size-2-widescreen">
          The Community
            </h3>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item xs={12} sm={12} md={3}>
            <div className="testnomial-title">
              <h3 className="has-text-weight-semibold is-size-3 is-size-5-mobile is-size-3-tablet is-size-3-widescreen">
                What Parents say
                  </h3>
            </div>

          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <div>
              <Slider {...settings}>
                <div className="testimonials-item">
                  <p className="description">" Students gain confidence and build their personality in a fun environment.
                  They learn teamwork and respect for each other. Personal attention given by
                  the teacher has helped many kids overcome shyness and stage fright."
                    </p>
                  <p className="author-name">Dulani Jayaratne</p>
                  <p className="author-info">Senior Vice President, at Citi bank NA, Srilanka</p>
                </div>

                <div className="testimonials-item">
                  <p className="description">" Miss Amanda Paiva is organized, driven and capable. She is energetic and has an excellent
                  rapport with her students. Her productions are truly outstanding. "
                    </p>
                  <p className="author-name">Parveen Mubarak</p>
                  <p className="author-info"></p>
                </div>

                <div className="testimonials-item">
                  <p className="description">" My son’s ability to work with others has been immensely enhanced and
                  his progress in public performance has developed tremendously,
                  he has learned to love theatre and music "
                    </p>
                  <p className="author-name">Sugath and Roshini Caldera</p>
                  <p className="author-info">Attorneys –at –Law</p>
                </div>
              </Slider>
            </div>
          </Grid>
        </Grid>

        <br /><br />


        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item xs={12} sm={12} md={9}>
            <div>
              <Slider {...settings}>
                <div className="testimonials-item">
                  <p className="description">" I learn that teamwork is important, I have fun and I am now a performer! "
                    </p>
                  <p className="author-name"> Amirah shakir</p>
                  <p className="author-info">7 yeasr old</p>
                </div>

                <div className="testimonials-item">
                  <p className="description">" I feel confident to participate in discussions and events! "
                    </p>
                  <p className="author-name">Aron Rammogan</p>
                  <p className="author-info">11 years old</p>
                </div>

                <div className="testimonials-item">
                  <p className="description">" I’ve developed my interpersonal skills- Kavindrra Samarasekera "
                    </p>
                  <p className="author-name">Kavindrra Samarasekera</p>
                  <p className="author-info">12 years old</p>
                </div>

                <div className="testimonials-item">
                  <p className="description">" When I was younger the thought of performing in front of hundreds of people 
                  with bright lights flashing at me absolutely terrified me. This 
                  programme helped me vanquish my fears and boost my very low self-esteem 
                  and made me a confident, stronger individual, a better person overall "
                    </p>
                  <p className="author-name">Dilenya Ellawala</p>
                  <p className="author-info">past student</p>
                </div>
              </Slider>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={3}>
            <div className="testnomial-title bg-accent text-white">
              <h3 className="has-text-weight-semibold is-size-3 is-size-5-mobile is-size-3-tablet is-size-3-widescreen">
                What Students Say
              </h3>
            </div>
          </Grid>
        </Grid>
        <br/><br/><br/>
      </div>
    )
  }
}
