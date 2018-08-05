import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputParagraph from './inputparagraph';

class EditArticle extends Component {
	state ={
		p:[{}]
	}

	newP(){
		this.setState({p:[...this.state.p, {}]});
	}

	render(){
		return (<div>
			<div>
				<div className='form-group'>
					<label htmlFor='title'>  כותרת המאמר:      </label>
					<input type='text' className='form-control space-right force-input-inline' id='title' />
				</div>
				<button onClick={()=>this.newP()} className="btn btn-default" type="button">
					הוספת פסקה
				</button>
			</div>
			<div className='space'>
				{this.state.p.map((p, i)=><InputParagraph key={i} index={i} />)}
			</div>
		</div>);
	}	
}

export default connect()(EditArticle);