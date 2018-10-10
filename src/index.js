import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router} from 'react-router-dom';

const app = document.getElementById('app');

ReactDOM.render(
	<Router> 
		<App />
	</Router>, 
app);
registerServiceWorker();
