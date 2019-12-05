import React, { Component } from 'react'

class MenuItem extends Component {
    render() {
        console.log('MenuItem rendered')
        return (
            <div className="item">
                <p>{this.props.itemName}</p>
                <button>Remove</button>
            </div>
        )
    }
}

export default MenuItem