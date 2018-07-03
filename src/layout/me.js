import React, { Component } from 'react';
import { connect } from 'react-redux';

class Me extends Component {
	render(){
		const { pic, content } = this.props;
		return (<div>
				<h2 className='text-right'> קצת על עצמי... </h2>
			<article className='well me-article container-fluid'>
				<div className='row'>
					<div className=''>
						<img className='me-pic' alt='אני' width='40%' src={pic} />
		            	<p className='text-right me-text'>
			            	{content}
		            	</p>
					</div>
	            </div>
            </article>
		</div>)
	}

}

const mapStateToProps = state =>({
		content:state.me.res.content,
		pic:state.me.res.pic
	});

export default connect(mapStateToProps)(Me);