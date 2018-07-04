import React, { Component } from 'react';
import { connect } from 'react-redux';
const spinner = null;

class Article extends Component {
	handleArticle(){
		if (this.props.article) {
			const { pic, content, title } = this.props.article;
			return (<div>
					<h2 className='text-right'> {title} </h2>
				<article className='well me-article container-fluid desc-text'>
					<div className='row'>
						<div className=''>
							{this.handlePic(pic)}
			            	<p className='text-right me-text'>
				            	{content}
			            	</p>
						</div>
		            </div>
	            </article>
			</div>)
		}
		return spinner;
	}

	handlePic(pic){
		if (pic) {
			return <img className='me-pic' alt='אני' width='40%' src={pic} />;
		}
		return null;
	}

	render(){
		return this.handleArticle();
	}
}

const mapStateToProps = state =>({
		article:state.articles.res[state.article.id]
	});

export default connect(mapStateToProps)(Article);