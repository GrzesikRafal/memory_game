import ThemeProvider from './components/ThemeProvider/ThemeProvider'
import App from './App';
import CssReset from './CssReset/CssReset'
import { store } from './Redux/Redux'
import { BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <CssReset />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
