import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//import Card from './Card';
import 'tachyons';
//import {robots} from './robots';
// import CardList from './CardList';
import App from './container/App';
//redux: neveshtan connect tasiri nadarad
import {Provider} from 'react-redux';
//baraye provider k store misazas (reducers):
import {createStore,applyMiddleware,combineReducers} from 'redux';

import {searchRobots, requestRobots} from './reducers';
//redux-logger: baraye didan log dar console
import {createLogger} from 'redux-logger';
//redux-thunk: baraye Asynch bodan fetch
import thunkMiddleware from 'redux-thunk';

//redux-logger:
const logger = createLogger(); 

const rootReducers = combineReducers({searchRobots, requestRobots})
//redux store & redux-logger & redux-thunk:
//Nokte: logger hamishe bayad akhar bashad:
//const store = createStore(searchRobots,applyMiddleware(thunkMiddleware,logger));
const store = createStore(rootReducers,applyMiddleware(thunkMiddleware,logger));
//combineReducers:


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
 	<App/>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
