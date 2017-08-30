import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import * as lang from '../../static/languages';
import * as api from '../api/interface';
import Post from '../posts/Post';

import './AppIntro.css';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        // get the data from the API
        api.getData();
    }
    componentDidMount(){
        // let's rotate them posts
        let intervalId = setInterval(this.timer, this.props.ui.intervalLength);
        // despite the use of redux to control state, this is an instance where the calue won't be used anywhere else,
        // so we use component state
        this.setState({intervalId: intervalId});
    }
    componentWillUnmount() {
       // clean the mess
       clearInterval(this.state.intervalId);
    }
    timer(){
        //dispatch the active element
        store.dispatch({
            type:'SOCIAL_NEXT_POST'
        })
    }
    renderPosts(posts){
        return posts.map((post,i)=>{
            return (<Post key={i} post={post} messageLength={this.props.ui.maxMessageLength} />);
        });
    }
    render() {
        return (
            <div className={'full-screen '+this.props.ui.appClassName}>
                <h1 className="intro full-screen"><span className={this.props.ui.showHeadingText?'':'sr-only'}>{lang.write('main_title')}</span></h1>
                <div className="posts full-screen">{this.renderPosts(this.props.socialData.posts)}</div>
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
