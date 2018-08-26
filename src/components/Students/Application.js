import React, { Component, Fragment } from 'react';
import Universities from './Universities';
import encryptUploadData from '../../actions/StudentActions';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      financialStatus: 'none',
      gpa: '',
      universities: {},
    };

    this.updateGPA = this.updateGPA.bind(this);
    this.addUniversity = this.addUniversity.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  updateGPA(e) {
    this.setState({ 'gpa': e.currentTarget.value  });
  }

  addUniversity(e) {
    // this.setState({ universities[e.currentTarget.value] = True });
  }

  removeUniversity(e) {
    this.setState({});
  }

  render() {
    return(
      <Fragment>
        <div id='user-info'>
          <h2>Your Information</h2>
          <form action='applicant-info'>
            <label className='name-label'>
              <input className='name-input' 
                placeholder='Name'
                value={this.state.name}
                onChange={this.update('name')}
                type='text' />
            </label>
            <label className='GPA-label'>
              <input className='name-input'
                value={this.state.gpa}
                onChange={this.updateGPA}
                placeholder='Enter your GPA'
                type='number'
                min='0'
                max='4'
                step='0.1' />
            </label>
            <select name='Financial-Status' 
              id='fin-status'
              onChange={this.update('financialStatus')}
              value={this.state.financialStatus}>
              <option value='none' disabled>Financial Status</option>
              <option value='< 30,000'>&lt; 30,000</option>
              <option value='30,000 - 45,000'>30,000 - 45,000</option>
              <option value='45,000 - 80,000'>45,000 - 80,000</option>
              <option value='80,000 - 100,000'>80,000 - 100,000</option>
              <option value='> 100,000'>&gt; 100,000</option>
            </select>
          </form>
        </div>
        <h2>Document Upload</h2>
        <div id='document-upload'>
          <figure>
            <figcaption>Fafsa</figcaption>
            <img src='https://image.flaticon.com/icons/svg/179/179483.svg' alt='' className='pdf' />
          </figure>
          <figure>
            <figcaption>Transcript</figcaption>
            <img src='https://image.flaticon.com/icons/svg/179/179483.svg' alt='' className='pdf' />
          </figure>
        </div>
        <Universities addUniversity={this.addUniversity} universities={this.state.universities} />
        <button onClick={encryptUploadData(`{"name": "Joseph", "none": ''}`,
  "0xf4e1f2a315b6e0de0f7a75d101827649d02fae8afd14643d3db23bf7a030fe2a44c9fc07ee39df8ef037144954bcb69e6b26f99d86c92d3dc699a0dd8525f79e",
  "jkm_dummy_5")}>Submit</button>
      </Fragment>
    );
  }
}

export default Application;