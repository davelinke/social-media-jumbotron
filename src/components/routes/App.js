import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as lang from '../../static/languages';
import * as api from '../api/interface';
import Post from '../posts/Post';

import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        api.getData();
    }
    renderPosts(posts){
        console.log(posts);
        return posts.map((post,i)=>{
            return (<Post key={i} post={post} />);
        });
    }
    render() {
        return (
            <div>
                <h1>{lang.write('main_title')}</h1>
                <div>{this.renderPosts(this.props.socialData.posts)}</div>
            </div>
        );
    }
};

const mapStateToProps = function(store) {
    return {
        socialData:store.socialData
    };
};
const SmartApp = connect(mapStateToProps)(App);

export default SmartApp;
