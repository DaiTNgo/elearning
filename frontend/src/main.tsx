import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux';
import GlobalStyles from './components/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  //   <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </BrowserRouter>
  </Provider>
  //   </React.StrictMode>
);
