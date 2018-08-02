import React, { Component } from 'react';
import './paragraph.css';
import { replaceUrl } from '../../services';
import Modal from './modal';

class Paragraph extends Component {
	handleImgClass(){
		const { index } = this.props;
		if (index == 0) {
			return 'cancel-float';
		}
		if (index % 2 !== 0) {
			return 'pull-right';
		}
		return '';
	}

	handlePics(){
		const { pics } = this.props;
		if (pics) {
			return pics.map((pic, i) => (<div key={'pic'+i}>
				<div>
					<img  data-toggle="modal" data-target={"#picModal"+i} className={'me-pic pointer '+this.handleImgClass()} alt='תמונה' src={pic} />
				</div>
				<Modal pic={pic} index={i} />
			</div>));
		}
		return null;
	}

	render(){
		const {p, pics, index} = this.props;
		return (<div className=''>
					{this.handlePics()}
	            	<p className='text-right me-text'>
		            	{replaceUrl(p)}
	            	</p>
				</div>);
	}
}

export default Paragraph;
