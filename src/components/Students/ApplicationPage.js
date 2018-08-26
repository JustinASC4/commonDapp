import React, { Component } from 'react';
import Application from './Application';
import Universities from './Universities';

class ApplicationPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return(
        <div>Page
          <Application />
          <Universities />
        </div>
      );
    }
}

export default ApplicationPage;