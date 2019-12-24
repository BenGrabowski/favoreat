import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App/App';
import EditPlace from '../components/EditPlace/EditPlace';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <App>
                <EditPlace />
            </App>
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})