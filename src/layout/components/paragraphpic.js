import React, { Component } from 'react';
import { connect } from 'react-redux';					
import UploadFile from './uploadfile';

class ParagraphPic extends Component {
	render(){
		const { i, index } = this.props;
		return (<div key={i} className='form-group col-md-12 space'>
			<label htmlFor={'pic'+i}>   תמונה מס/ {i+1}     </label>
			<select className='form-control force-input-inline pull-left'>
				<option>        צד ימין    </option>
				<option>        צד שמאל   </option>
				<option>       נפרד מהטקסט   </option>
			</select>
			<div className='space'>
				<UploadFile path={'articles/article name/contentparagraph/'+index+'/pics/'+i+'/src'} pic={""} />
			</div>
		</div>);
	}
}

export default connect()(ParagraphPic);