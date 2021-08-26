// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// APP import
import App from './App';

// Styles import
import "./styles/global.css";

// Renderer
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);