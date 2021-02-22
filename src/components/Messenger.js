import React from "react";

class Messenger extends React.Component {
  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.init({ //eslint-disable-line
        appId: 240407464397716,
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.3'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  render() {
    return (
      <>
        <div id="fb-root" />
        <div
          className="fb-customerchat"
          attribution="setup_tool"
          page_id="1708301385918286"
          theme_color="#2f8dff"
          logged_in_greeting="Hi there! Have any questions?"
          logged_out_greeting="Hi there! Have any questions?" />
      </>
    );
  }
} 

export default Messenger;