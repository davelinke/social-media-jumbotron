import React, { Component } from 'react';

import './Post.css';

class Post extends Component {
    constructor(props){
        super(props);
    }
    render() {
        // here we set the background image of the div dynamically
        // we could use an image with object-fit CSS property, but of course IE or Edge do not support it yet
        let imageStyle = {
            backgroundImage:'url('+this.props.post.image+')'
        };
        return (
            <div>
                <div className="image" style={imageStyle}></div>
                <div className={'message '+this.props.post.service}>
                    <div className="text">{this.props.post.title}</div>
                    <div className="author">{this.props.post.author}</div>
                </div>

            </div>
        );
    }
}

export default Post;
