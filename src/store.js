import { createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import err from './middlewares/err';

import reducers from './reducers/reducers';

import { fetchArticles } from './actions/articles.actions';

const store = createStore(reducers, applyMiddleware(promise(), thunk, createLogger(), err));

store.dispatch(fetchArticles());

export default store;