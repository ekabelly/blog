import React, { Component } from 'react';
import './paragraph.css';
import { replaceUrl } from '../../services';
import Modal from './modal';

class Paragraph extends Component {
	handlePClass(){
		if (this.props.ptype === 'title') {
			return 'h3';
		}
		return '';
	}

	handlePics(){
		const { pics } = this.props;
		if (pics && pics[0]) {
			return pics.map((pic, i) => (<div key={'pic'+i}>
				<div>
					<img  data-toggle="modal" data-target={"#picModal"+i} className={'me-pic pointer '+pic.class} alt='תמונה' src={pic.src} />
				</div>
				<Modal pic={pic.src} index={i} />
			</div>));
		}
		return null;
	}

	render(){
		const {p} = this.props;
		return (<div className=''>
	            	<p className={'text-right me-text '+this.handlePClass()}>
		            	{replaceUrl(p)}
	            	</p>
	            	{this.handlePics()}
				</div>);
	}
}

export default Paragraph;
