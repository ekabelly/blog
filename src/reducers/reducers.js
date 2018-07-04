import { combineReducers } from 'redux';
import ArticlesReducer from './articles.reducer';
import ArticleReducer from './article.reducer';
import FileReducer from './file.reducer';

export default combineReducers({
	articles:ArticlesReducer,
	article:ArticleReducer,
	file:FileReducer
});
