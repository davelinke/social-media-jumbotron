import {socialDataDefaults} from '../static/constants';

// the reducers for social data
const socialDataReducer = (state = socialDataDefaults, action) => {
    switch (action.type) {
        case 'SOCIAL_DATA_SET':
            return Object.assign({}, state, {posts:action.value});
        case 'SOCIAL_NEXT_POST':
            // get  and set active post in a duplicated state object not to mutate the state
            let nuState = Object.assign({},state);
            let changeState = function(current,nexx,nextInLine){
                for (let i=0;i<nuState.posts.length;i++){
                    if(nuState.posts[i].state===current) {
                        // set current to new state
                        nuState.posts[i].state = nexx;
                        if (typeof(nextInLine)!=='undefined'){
                            // index of the next post (if we are at the last one the next index is 0)
                            let nextPost = (((i+1)===nuState.posts.length)?0:i+1);
                            nuState.posts[nextPost].state = nextInLine;
                        }
                        //exit loop
                        break;
                    }
                }
            };
            changeState('out','');
            changeState('active','out','active');
            return nuState;
        default:
            return state;
    }
};

export default socialDataReducer;
