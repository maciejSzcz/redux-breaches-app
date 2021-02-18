import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware } from 'redux-api-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Route, BrowserRouter  as Router, Switch} from 'react-router-dom';
import Breaches from './containers/Breaches';
import BreachDetails from './containers/BreachDetails';
import rootReducer from './reducers/index';
import { NotFound } from './components/404'

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(apiMiddleware)))

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

render(
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Breaches} />
        <Route exact path="/:id" component={BreachDetails} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
