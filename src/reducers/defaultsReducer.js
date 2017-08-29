import {appDefaults} from '../static/constants';

// create the reducers that will control the store
const defaultsReducer = (state = appDefaults, action) => {
  switch (action.type) {
    // remember not to mutate the state
    case 'DEFAULTS_CHANGE_LANGUAGE':
        return Object.assign({}, state, {
            lang:action.lang
        });
    default:
        return state;
  }
};

export default defaultsReducer;
