import { combineReducers } from 'redux';
import ArticlesReducer from './articles.reducer';

export default combineReducers({
	articles:ArticlesReducer
});
