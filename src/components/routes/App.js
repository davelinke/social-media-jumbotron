import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as lang from '../../static/languages';
import * as api from '../api/interface';
import Post from '../posts/Post';

import './AppIntro.css';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        api.getData();
    }
    renderPosts(posts){
        return posts.map((post,i)=>{
            return (<Post key={i} post={post} />);
        });
    }
    render() {
        return (
            <div className={this.props.ui.appClassName}>
                <h1 className="intro"><span className={this.props.ui.showHeadingText?'':'sr-only'}>{lang.write('main_title')}</span></h1>
                <div>{this.renderPosts(this.props.socialData.posts)}</div>
            </div>
        );
    }
};

const mapStateToProps = function(store) {
    return {
        ui:store.ui,
        socialData:store.socialData
    };
};
const SmartApp = connect(mapStateToProps)(App);

export default SmartApp;
