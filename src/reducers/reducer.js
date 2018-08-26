import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer';
import recordReducer from './recordReducer';
import searchReducer from './searchReducer';
import permissionsReducer from './permissionsReducer';
import studentsReducer from './studentsReducer';

const reducer = combineReducers({
  routing: routerReducer,
  auth: authReducer,
  record: recordReducer,
  permissions: permissionsReducer,
  search: searchReducer,
  application: studentsReducer,
});

export default reducer;
