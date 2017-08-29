import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as lang from '../../static/languages';

import './App.css';

class App extends Component {
    // constructor(props){
    //     super(props);
    // }
    componentWillUpdate(nextProps,nextState){
    }
    render() {
        return (
            <div>
                <h1>{lang.write('main_title')}</h1>
            </div>
        );
    }
};

const mapStateToProps = function(store) {
    return {
        defaults:store.defaults
    };
};
const SmartApp = connect(mapStateToProps)(App);

export default SmartApp;
