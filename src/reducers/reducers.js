import { combineReducers } from 'redux';
import ArticlesReducer from './articles.reducer';
<<<<<<< HEAD

export default combineReducers({
	articles:ArticlesReducer
=======
import MeReducer from './me.reducer';

export default combineReducers({
	articles:ArticlesReducer,
	me:MeReducer
>>>>>>> be76a1ff3e7f75def722bd8aa0457aafcc92ec7d
});
