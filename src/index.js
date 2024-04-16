import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './components/App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
    <BrowserRouter basename="/Movie-test">
        <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

