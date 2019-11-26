import React, { Component } from 'react'

class AddItem extends Component {
    state = {
        item: undefined
    }

    updateItem = event => {
        this.setState({
            item: event.target.value
        })
    }
    
    render() {    
        return (
            <div>
                <label htmlFor="item_name">Item: </label>
                <input 
                    type="text" 
                    name="item_name" 
                    onChange={event => this.updateItem(event)}
                />
                <button 
                    onClick={this.props.handleAddItem(this.state.item)}
                >
                    Save
                </button>
            </div>
        )
    }
}

export default AddItem