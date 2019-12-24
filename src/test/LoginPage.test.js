import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '../components/App/App'
import LoginPage from '../routes/LoginPage';
import LoginForm from '../components/LoginForm/LoginForm';

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <App>
                <LoginPage>
                    <LoginForm />
                </LoginPage>
            </App>
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})