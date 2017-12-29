import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from './Search';
// import Login from './Login';
import registerServiceWorker from './registerServiceWorker';
// import {Router, Route} from 'react-router';

ReactDOM.render( <Search/>, document.getElementById('root'));
registerServiceWorker();
