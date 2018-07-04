import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from './components/article';
<<<<<<< HEAD
// eslint-disable-next-line
const articles = [
			'https://www.incimages.com/uploaded_files/image/970x450/getty_855098134_353411.jpg', 
			'https://www.verdict.co.uk/wp-content/uploads/2017/08/shutterstock_413417941-1440x956.jpg', 
			'https://minimalistbaker.com/wp-content/uploads/2017/05/Quick-Easy-VEGAN-Crudite-5-minute-Macadamia-Nut-Herb-Cheese-Veggies-vegan-glutenfree-crudite-recipe-minimalistbaker-8.jpg', 
			'https://www.riseofthevegan.com/img/og-image.jpg'
		];

class ArticlesLayout extends Component {
	renderArticles(){
		return this.props.articles.map((article, i)=><Article key={i} pic={article.pic} title={article.title} />);
=======

class ArticlesLayout extends Component {
	renderArticles(){
		return this.props.articles.map((article, i)=><Article key={i} article={article} />);
>>>>>>> be76a1ff3e7f75def722bd8aa0457aafcc92ec7d
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