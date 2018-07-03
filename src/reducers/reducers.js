import { combineReducers } from 'redux';
import ArticlesReducer from './articles.reducer';
import MeReducer from './me.reducer';

export default combineReducers({
	articles:ArticlesReducer,
	me:MeReducer
});
