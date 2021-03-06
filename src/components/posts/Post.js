import React, { Component } from 'react';

import './Post.css';

class Post extends Component {
    /// avoid super long messages
    cropMessage(text){
        let textArray = text.split(' ');
        if (textArray.length>this.props.messageLength){
            textArray.splice(this.props.messageLength,textArray.length-this.props.messageLength);
            return textArray.join(' ')+'...';
        }
        return text;
    }
    render() {
        // here we set the background image of the div dynamically
        // we could use an image with object-fit CSS property, but of course IE or Edge do not support it yet
        let imageStyle = {
            backgroundImage:'url('+this.props.post.image+')'
        };
        return (
            <div className={"post full-screen "+this.props.post.state}>
                <div className="image" style={imageStyle}></div>
                <div className="message">
                    <div className="author">
                        <div className={'icon '+this.props.post.service} title={this.props.post.service}></div>
                        <div className="author-name">{this.props.post.author}</div>
                    </div>
                    <div className="text">{this.cropMessage(this.props.post.title)}</div>
                </div>
            </div>
        );
    }
}

export default Post;
