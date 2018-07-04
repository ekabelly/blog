import React, { Component } from 'react';
import { connect } from 'react-redux';

class Article extends Component {
	render(){
<<<<<<< HEAD
		return (<article className='article col-md-4'>
				<h4 className='text-center'> {this.props.title} </h4>
				<img alt='pic' width='100%' src={this.props.pic} />
				<div className=''>test</div>
=======
		const { pic, content, title} = this.props.article;
		return (<article className='article col-md-4'>
				<img alt='pic' width='100%' src={pic} />
				<h4 className='text-center'> {title} </h4>
				<span className='desc-text'>{content.slice(0,50)+'...'}</span>
				<a> המשך לקרוא </a>
>>>>>>> be76a1ff3e7f75def722bd8aa0457aafcc92ec7d
			</article>);
	}
}

export default connect()(Article);