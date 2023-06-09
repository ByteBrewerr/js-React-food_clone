import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './Redux/store'
import { Provider } from 'react-redux'
import './firebase'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <div className='App text-white m-auto'>
            <App/>
        </div>
    </Provider>,
);


