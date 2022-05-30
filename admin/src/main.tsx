import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './material';
import './main.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
	// <React.StrictMode>
	<Provider store={store}>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</Provider>
	// </React.StrictMode>
);
