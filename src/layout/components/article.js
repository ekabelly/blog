import React, { Component } from 'react';
import { connect } from 'react-redux';

class Article extends Component {
	render(){
		const { pic, content, title} = this.props.article;
		return (<article className='article col-md-4'>
				<img alt='pic' width='100%' src={pic} />
				<h4 className='text-center'> {title} </h4>
				<span className='desc-text'>{content.slice(0,50)+'...'}</span>
				<a> המשך לקרוא </a>
			</article>);
	}
}

export default connect()(Article);