import React, { Component } from 'react';

var universities = [
  'Harvard University',
  'Brown University',
  'Queens College',
  'Yale University', 
  'Columbia University',
];

class Universities extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { updateUniversities } = this.props;
    return(
      <div id='applied-institutions'>
        <h2>Universities</h2>
        <div className='university-list'>
          {universities.map((university, idx) => {
            return(
              <div className='uni-divs'>
                <span>{university}</span>
                <button value={university} onClick={updateUniversities}>Add School</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}



export default Universities;