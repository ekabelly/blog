import React, { Component } from 'react';
import './paragraph.css';
import { replaceUrl } from '../../services';
import Modal from './modal';

class Paragraph extends Component {
	handleImgClass(){
		if (this.props.index % 2 !== 0) {
			return 'pull-right';
		}
		return '';
	}

	handlePic(pic, index){
		if (pic) {
			return <img  data-toggle="modal" data-target={"#picModal"+index} className={'me-pic '+this.handleImgClass()} alt='תמונה' src={pic} />;
		}
		return null;
	}

	render(){
		const {p, pic, index} = this.props;
		return (<div className=''>
					<div className=''>
						{this.handlePic(pic, index)}
					</div>
					<Modal pic={pic} index={index} />
	            	<p className='text-right me-text'>
		            	{replaceUrl(p)}
	            	</p>
				</div>)
	}
}

export default Paragraph;
