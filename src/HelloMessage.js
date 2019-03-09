import React, { Component } from 'react';
import { connect } from 'react-redux'
class HelloMessage extends Component {
    render() {
        return (<div>
            Hello 12{this.props.name}
        </div>);
    }
}
export { HelloMessage }