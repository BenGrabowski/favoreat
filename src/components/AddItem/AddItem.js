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

    handleAddItem = event => {
        event.preventDefault()
        this.props.handleAddItem(this.state.item)
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
                    onClick={this.handleAddItem}
                >
                    Save
                </button>
            </div>
        )
    }
}

export default AddItem