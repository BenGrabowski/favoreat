import React, { Component } from 'react'

class MenuItem extends Component {
    render() {
        return (
            <div className="item">
                {this.props.itemName}
                <button onClick={event => this.props.removeItem(event, this.props.index)}>Remove</button>
            </div>
        )
    }
}

export default MenuItem