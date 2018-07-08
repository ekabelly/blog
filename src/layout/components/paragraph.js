import React, { Component } from 'react';
import { replaceUrl } from '../../services';

class Paragraph extends Component {
	handleImgClass(){
		if (this.props.index % 2 !== 0) {
			return 'pull-right';
		}
		return '';
	}

	handlePic(pic){
		if (pic) {
			return <img className={'me-pic '+this.handleImgClass()} alt='אני' src={pic} />;
		}
		return null;
	}

	render(){
		const {p, pic} = this.props;
		return (<div className=''>
					<div className=''>
						{this.handlePic(pic)}
					</div>
	            	<p className='text-right me-text'>
		            	{replaceUrl(p)}
	            	</p>
				</div>)
	}
}

export default Paragraph;
