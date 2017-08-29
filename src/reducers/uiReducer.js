import {uiDefaults} from '../static/constants';

// the reducers for social data
const uiReducer = (state = uiDefaults, action) => {
    switch (action.type) {
        case 'UI_SET':
            let newUiProperty = Object.assign({},action.value);
            return Object.assign({}, state, newUiProperty);
        default:
            return state;
    }
};

export default uiReducer;
