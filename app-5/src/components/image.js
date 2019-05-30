import React, { Component } from 'react';


class Image extends Component {
    render() {
        return (
            <div>
                <img src={this.props.myImageProp} alt="broke" />
                <caption>Error 599</caption>
            </div>
        );
    }
}

export default Image;