import React, { Component } from 'react';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      financialStatus: 'none',
      gpa: '',
    };

    this.updateGPA = this.updateGPA.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  updateGPA(e) {
    this.setState({ 'gpa': e.currentTarget.value  });
  }

  render() {
    return(
      <div id='user-info'>
        <h2>Your Information</h2>
        <form action='applicant-info'>
          <label className='name-label'>
            <input className='name-input' 
              placeholder='Name' 
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
    );
  }
}

export default Application;