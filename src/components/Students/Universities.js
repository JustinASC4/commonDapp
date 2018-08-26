import React, { Component } from 'react';

class Universities extends Component {
  constructor(props) {
    super(props);
  }  

  render() {
    return(
      <div id='applied-institutions'>
        <h2>Universities</h2>
        <div className='university-list'>
          <div className='uni-divs' id='harvard'>
            <span>Harvard University</span>
            <button>Apply</button>
          </div>
          <div className='uni-divs' id='yale'>
            <span>Yale University</span>
            <button>Apply</button>
          </div>
          <div className='uni-divs' id='columbia'>
            <span>Columbia University</span>
            <button>Apply</button>
          </div>
          <div className='uni-divs' id='brown-uni'>
            <span>Brown University</span>
            <button>Apply</button>
          </div>
          <div className='uni-divs' id='queens-college'>
            <span>Queens College</span>
            <button>Apply</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Universities;

<div id="applied-institutions">
            <h2>Current Applications</h2>
            
        </div>