import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute } from 'react-router'

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
registerServiceWorker();
