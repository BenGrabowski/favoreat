import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App/App';
import AddPlace from '../components/AddPlace/AddPlace';
import MenuItem from '../components/MenuItem/MenuItem';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <App>
                <AddPlace>
                    <MenuItem />
                </AddPlace>
            </App>
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})