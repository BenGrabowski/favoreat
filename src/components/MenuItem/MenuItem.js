import React, { Component } from 'react'
import './MenuItem.css'

class MenuItem extends Component {
    render() {
        return (
            <div className="item">
                {this.props.itemName}
                <button 
                    onClick={event => this.props.removeItem(event, this.props.index)}
                    className="remove-item"
                >
                    Remove
                </button>
            </div>
        )
    }
}

export default MenuItem