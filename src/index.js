import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './features/store';
import Wrapper from './features/theme/Wrapper';
import { fetchCountries } from './features/country/countrySlice';

store.dispatch(fetchCountries());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
       <Wrapper>
          <App />
       </Wrapper>
    </Provider>
  </React.StrictMode>
);
