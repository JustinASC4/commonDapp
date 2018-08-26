import Student from '../components/Students/ApplicationPage';
import { sendAppData } from '../actions/StudentActions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { application } = state.application;

  return {
    application,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendAppData: (data) => {
      dispatch(sendAppData(data));
    },
  };
};

const StudentContainer = connect(null, mapDispatchToProps)(Student);

export default StudentContainer;