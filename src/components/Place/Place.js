import React, { Component } from 'react'

class Place extends Component {
    render() {
        const happyHour = this.props.hh
            ? <span>Yes</span>
            : <span>No</span>

        const items = this.props.items.map(item => {
            return <li>item</li>
        })
        
        return (
            <section>
                <h2>{this.props.name}</h2>
                
                <h3 class="place-type">{this.props.type}</h3>
                
                <p>{happyHour}</p>
                
                <p><span>Notes:</span>
                <br />
                    {this.props.notes}
                </p>

                <div id="items-ordered">
                    <p id="items-title"><span>Items Ordered</span></p>
                    <ul id="items-list">
                        {items}
                    </ul>
                </div>
                <button>Edit</button>
                <button>Delete</button>
            </section>
        );
    }
}

export default Place;