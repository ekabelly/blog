import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleCard from './components/articlecard';
import Article from './components/article';

class ArticlesLayout extends Component {
	renderArticles(){
		const ids = Object.keys(this.props.articles);
		const articles = Object.values(this.props.articles);

		return articles.map((article, i)=>ids[i] !== 'me' ? <ArticleCard key={ids[i]} id={ids[i]} article={article} /> : null);
	}

	render(){
		if (this.props.article.show) {
			return <Article />
		}
		return (<div className='text-right'>
				<h2>מאמרים </h2>
			<div className='container-fluid'>
				<div className='row'>
					{this.renderArticles()}
				</div>
			</div>
		</div>)
	}

}

const mapStateToProps = state =>({
		articles:state.articles.res,
		article:state.article
	});

export default connect(mapStateToProps)(ArticlesLayout);