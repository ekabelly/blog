import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditBlog from './components/editblog';
import EditArticlesWrapper from './components/editarticleswrapper';
import EditArticle from './components/editarticle';

class Admin extends Component {
	state = {
		location:"EDIT_BLOG"
	}

	handleTabClass(tab){
		if (tab === this.state.location) {
			return 'active';
		}
	}

	changeLocation(location){
		this.setState({location})
	}

	handleLocation(){
		this.props.resetProgress();
		const { location } = this.state;
		if (location === 'EDIT_ARTICLES') {
			return <EditArticlesWrapper />;
		}
		if (location === 'NEW_ARTICLE') {
			return <EditArticle />;
		}
		return <EditBlog />;
	}

	render(){
		return (<div>
			<p className='h1'> עמוד עריכה  </p>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-m-12'>
						<ul className="nav nav-tabs nav-justified cancel-padding">
							<li onClick={()=>this.changeLocation("EDIT_BLOG")} role="presentation" className={' pointer h3 '+this.handleTabClass("EDIT_BLOG")}><a className='black-text '>עריכת הבלוג </a></li>
			  				<li onClick={()=>this.changeLocation("EDIT_ARTICLES")} role="presentation" className={'pointer h3 '+this.handleTabClass("EDIT_ARTICLES")}><a className='black-text '>   עריכת מאמרים קיימים    </a></li>
			  				<li onClick={()=>this.changeLocation("NEW_ARTICLE")} role="presentation" className={'pointer h3 '+this.handleTabClass("NEW_ARTICLE")}><a className='black-text '>       הוספת מאמר חדש     </a></li>
						</ul>
					</div>
					<div className='col-m-12 tab-border'>
						<div className=''>
							{this.handleLocation()}
						</div>
					</div>
				</div>
			</div>
		</div>);
	}
}

const mapDispatchToProps = dispatch =>({
    resetProgress: ()=>dispatch({type:'RESET_PROGRESS'})
});

const mapStateToProps = state =>({
  });

export default connect(mapStateToProps, mapDispatchToProps)(Admin);