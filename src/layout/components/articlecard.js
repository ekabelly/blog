import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeY } from '../../services';
import { showArticle } from '../../actions/articles.actions';

class ArticleCard extends Component {
	render(){
		const { pic, content, title} = this.props.article;
		const { id } = this.props;
		return (<article className='article col-md-4'>
				<img alt='pic' width='100%' src={pic} />
				<h4 className='text-center'> {title} </h4>
				<span className='desc-text'>{content.slice(0,50)+'...'}</span>
				<a className='pointer' onClick={()=>this.props.showArticle(id)}> המשך לקרוא </a>
			</article>);
	}
}

const mapDispatchToProps = dispatch =>({
        showArticle: id =>{
        	changeY(740);
        	return dispatch(showArticle(id));
        } 
    });

const mapStateToProps = state =>({});


export default connect(mapStateToProps, mapDispatchToProps)(ArticleCard);