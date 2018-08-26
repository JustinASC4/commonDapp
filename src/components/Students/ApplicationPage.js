import React, { Component } from 'react';
import Application from './Application';

class ApplicationPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section id='container'>Page
        <Application />
      </section>
    );
  }
}

export default ApplicationPage;



