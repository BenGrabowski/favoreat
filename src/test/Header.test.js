import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '../components/App/App'
import Header from '../components/Header/Header'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <App>
                <Header />
            </App>
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})