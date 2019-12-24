import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '../components/App/App'
import RegistrationPage from '../routes/RegistrationPage';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <App>
                <RegistrationPage>
                    <RegistrationForm />
                </RegistrationPage>
            </App>
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})