import React, { Component } from 'react';
import { connect } from 'react-redux';
import UploadFile from './uploadfile';

class EditBlog extends Component {
	render(){
		return (<div className='container-fluid'>
			<div className='row'>
				<div className='form-group col-md-8 col-md-offset-2'>
					<p className='h2'>       שינוי תמונת נושא       </p>
					<UploadFile path='themePic' pic={""} />
				</div>
			</div>
		</div>);
	}		
}

export default connect()(EditBlog);