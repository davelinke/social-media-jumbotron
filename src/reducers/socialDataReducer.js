import {socialDataDefaults} from '../static/constants';

// the reducers for social data
const socialDataReducer = (state = socialDataDefaults, action) => {
    switch (action.type) {
        case 'SOCIAL_DATA_SET':
            return Object.assign({}, state, {posts:action.value});
        default:
            return state;
    }
};

export default socialDataReducer;
