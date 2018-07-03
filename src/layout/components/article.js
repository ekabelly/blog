import React, { Component } from 'react';
import { connect } from 'react-redux';

class Article extends Component {
	render(){
		return (<article className='article col-md-4'>
				<h4 className='text-center'> {this.props.title} </h4>
				<img alt='pic' width='100%' src={this.props.pic} />
				<div className=''>test</div>
			</article>);
	}
}

export default connect()(Article);