import { createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import err from './middlewares/err';

import reducers from './reducers/reducers';

import { fetchArticles } from './actions/articles.actions';
<<<<<<< HEAD
=======
import { fetchMe } from './actions/index.actions';
>>>>>>> be76a1ff3e7f75def722bd8aa0457aafcc92ec7d

const store = createStore(reducers, applyMiddleware(promise(), thunk, createLogger(), err));

store.dispatch(fetchArticles());
<<<<<<< HEAD
=======
store.dispatch(fetchMe());
>>>>>>> be76a1ff3e7f75def722bd8aa0457aafcc92ec7d

export default store;