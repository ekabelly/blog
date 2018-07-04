import { combineReducers } from 'redux';
import ArticlesReducer from './articles.reducer';
import ArticleReducer from './article.reducer';
import FileReducer from './file.reducer';
import ContactReducer from './contact.reducer';
import ThemePicReducer from './themepic.reducer';
import ErrReducer from './err.reducer';

export default combineReducers({
	articles:ArticlesReducer,
	article:ArticleReducer,
	file:FileReducer,
	contact:ContactReducer,
	themePic:ThemePicReducer,
	err:ErrReducer
});
