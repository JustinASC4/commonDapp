import { LOAD_APP } from '../actions/StudentActions';

const studentsReducer = (state = {}, action) => {
    if (action.type === LOAD_APP) {
        return Object.assign({}, state, {
            data: action.payload,
        });
    }
    return state;
};

export default studentsReducer;