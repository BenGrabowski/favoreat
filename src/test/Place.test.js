import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App/App';
import Place from '../components/Place/Place';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <App>
                <Place />
            </App>
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})