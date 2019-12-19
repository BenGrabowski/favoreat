import React, { Component } from 'react'
import './MenuItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MenuItem extends Component {
    render() {
        return (
            <div className="item">
                {this.props.itemName}
                <button 
                    onClick={event => this.props.removeItem(event, this.props.index)}
                    className="remove-item"
                >
                    {/* Remove */}
                    <FontAwesomeIcon icon="times-circle" className="remove-item-icon" />
                </button>
            </div>
        )
    }
}

export default MenuItem