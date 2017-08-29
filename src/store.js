import { combineReducers, createStore } from 'redux';
import defaultsReducer from  './reducers/defaultsReducer';
import socialDataReducer from  './reducers/socialDataReducer';

// combine reducers - Although we have one only,
// it is good to separate reducers through logical groups and then combine them.
const appReducer = combineReducers({
    defaults:defaultsReducer,
    socialData:socialDataReducer
});

const combinedReducers = (state,action) => {
    return appReducer(state,action);
};

// create the holy grail of truth... The Store
const store = createStore(combinedReducers);

export default store;
