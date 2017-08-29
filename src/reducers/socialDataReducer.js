import {socialDataDefaults} from '../static/constants';

// the reducers for social data
const socialDataReducer = (state = socialDataDefaults, action) => {
    switch (action.type) {
        case 'SOCIAL_DATA_SET':
            return Object.assign({}, state, {posts:action.value});
        case 'SOCIAL_NEXT_POST':
            // get  and set active post in a duplicated state object not to mutate the state
            let nuState = Object.assign({},state);
            for (let i=0;i<nuState.posts.length;i++){
                if(nuState.posts[i].active) {
                    // set active to false
                    nuState.posts[i].active = false;
                    // index of the next post (if we are at the last one the next index is 0)
                    let nextPost = (((i+1)==nuState.posts.length)?0:i+1)
                    nuState.posts[nextPost].active = true;
                    //exit loop
                    break;
                }
            }
            return nuState;
        default:
            return state;
    }
};

export default socialDataReducer;
