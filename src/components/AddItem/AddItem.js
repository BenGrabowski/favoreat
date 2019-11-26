import React, { Component } from 'react'

class AddItem extends Component {
    render() {    
        return (
            <form onSubmit={event => this.props.handleAddItem(event)}>
                <label htmlFor="item_name">Item: </label>
                <input type="text" name="item_name" />
                <button 
                    type="submit"
                >
                    Save
                </button>
            </form>
        )
    }
}

export default AddItem