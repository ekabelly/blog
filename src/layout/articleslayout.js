import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from './components/article';

class ArticlesLayout extends Component {
	renderArticles(){
		return this.props.articles.map((article, i)=><Article key={i} article={article} />);
	}

	render(){
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
		articles:Object.values(state.articles.res)
	});

export default connect(mapStateToProps)(ArticlesLayout);