import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paragraph from './paragraph';
const spinner = null;

class Article extends Component {
	handleArticle(){
		if (this.props.article) {
			const { content, title } = this.props.article;
			return (
				<div>
					<h2 className='text-right'> {title} </h2>
					{content.paragraph.map((p, i)=>{
						let pic = content.pics ? content.pics[i] : null;
						return <Paragraph key={i} p={p} index={i} pic={pic} />
					})}
				</div>);
		}
		return spinner;
	}

	render(){
		return (<article className='well me-article container-fluid desc-text'>
					<div className='row'> {this.handleArticle()}
					</div>
	            </article>);

	}
}

const mapStateToProps = state =>({
		article:state.articles.res[state.article.id]
	});

export default connect(mapStateToProps)(Article);