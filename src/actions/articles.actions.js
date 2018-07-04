import  { articlesRef } from '../config/firebase';

export const addArticle = newArticle => async dispatch => {
  articlesRef.push().set({title:newArticle.title, pic:newArticle.pic});
};

export const fetchArticles = () => async dispatch => {
	articlesRef.on('value', snapshot=>{
		dispatch({
			type:'FETCH_ARTICLES',
			payload:snapshot.val()
		});
	});
}

export const showArticle = id =>({
	type:'SHOW_ARTICLE',
	payload:id
});