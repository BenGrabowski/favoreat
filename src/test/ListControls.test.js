import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '../components/App/App'
import ListControls from '../components/ListControls/ListControls'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <App>
                <ListControls />
            </App>
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})