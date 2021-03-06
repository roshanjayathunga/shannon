import React from 'react'
import Layout from '../../components/Layout'

import Divider from '@material-ui/core/Divider';

export default class FAQPage extends React.Component {

  state = {
    checked: false
  }

  handleChange = () => {
    this.setState(  prevState => ({
      checked: !prevState.checked
    }))
  };

  render() {
    return (
      <Layout>
        <section className="section-faq">
          <div className="faq-wrap">
            <h3 className="has-text-weight-semibold is-size-2 is-size-4-mobile is-size-2-tablet is-size-2-widescreen">
            Frequently Asked Questions
            </h3>

            <div className="faq-item">
             <h4 className="has-text-weight-semibold is-size-2 is-size-4-mobile is-size-4-tablet is-size-4-widescreen">How often are the classes?</h4>
             <p>Lessons are held once a week, each academic year consists of three terms, 
              coinciding with local school term dates.</p>
            </div>
            <Divider light />

            <div className="faq-item">
             <h4 className="has-text-weight-semibold is-size-2 is-size-4-mobile is-size-4-tablet is-size-4-widescreen">Can we enrol during an existing term?</h4>
             <p>Yes! You can enrol any time during the term. We schedule additional sessions 
               and provide resources to keep students on track. </p>
            </div>
            <Divider light />

            <div className="faq-item">
             <h4 className="has-text-weight-semibold is-size-2 is-size-4-mobile is-size-4-tablet is-size-4-widescreen">What does my child need to bring along for the lesson ?</h4>
             <p>Nothing! There’s no need for books, paper, props or other materials. 
               We provide everything they need.  </p>
            </div>
            <Divider light />

            <div className="faq-item">
             <h4 className="has-text-weight-semibold is-size-2 is-size-4-mobile is-size-4-tablet is-size-4-widescreen">Do you offer a trial lesson before I enroll? </h4>
             <p>Yes, we offer free trial sessions at the beginning of each term. 
               These sessions are free of charge and there is no obligation to sign up.
                You can contact us to book your trial lesson by filling out a form <a href="/about">(Click here) </a> or by calling our hotline. 
              </p>
            </div>
            <Divider light />

            <div className="faq-item">
             <h4 className="has-text-weight-semibold is-size-2 is-size-4-mobile is-size-4-tablet is-size-4-widescreen">What programmes do you offer during school vacations?</h4>
             <p>
             Students have the option of  enrolling for an 
             enrichment workshop which will be carried out during the vacation.
              </p>
            </div>
            <Divider light />

            <div className="faq-item">
             <h4 className="has-text-weight-semibold is-size-2 is-size-4-mobile is-size-4-tablet is-size-4-widescreen">What if my chid does not enjoy theatre, can they still join?</h4>
             <p>
             Yes!! Focus on personalized attention allows the facilitator to identify the learning style of each student and customize lessons 
             to help all students learn and enjoy their experience at STL 
              </p>
            </div>
            <Divider light />

          </div>
        </section>
      </Layout>
    )
  }
}
