import { combineReducers } from 'redux';
import ArticlesReducer from './articles.reducer';
import ArticleReducer from './article.reducer';
import FileReducer from './file.reducer';
import ContactReducer from './contact.reducer';
import themePicReducer from './themepic.reducer';

export default combineReducers({
	articles:ArticlesReducer,
	article:ArticleReducer,
	file:FileReducer,
	contact:ContactReducer,
	themePic:themePicReducer
});
