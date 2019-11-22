import React, { Component } from 'react'

class AddItem extends Component {
    render() {
        return (
            <>
                <label htmlFor="item_name">Item: </label>
                <input type="text" />
            </>
        )
    }
}

export default AddItem