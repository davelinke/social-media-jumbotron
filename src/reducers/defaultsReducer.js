// create the default state of the store
const defaultState = {
  lang:'en-us'
};

// create the reducers that will control the store
const defaultsReducer = (state = defaultState, action) => {
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
