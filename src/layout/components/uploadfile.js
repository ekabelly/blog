import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uploadFile } from '../../actions/index.actions';

class UploadFile extends Component {
	picHandler(input){
		if (input.files && input.files[0]) {
		    var reader = new FileReader();

		    reader.onload = e => {
		    	document.getElementById('uploadFile').src = e.target.result;
		    }
		    this.props.uploadFile(input.files[0]);
		    console.log(reader.readAsDataURL(input.files[0]));
		  }
		
	}

	render(){
		return (<div>
			<div className='form-label-right'>
				<label htmlFor='event_pic'>העלאת תמונה</label>
				<input type='file' onChange={e=>this.picHandler(e.target)} className='form-control' id='event_pic' />
				{this.props.progress ? <p> התקדמות: { this.props.progress + '%' } </p> : null}
				<img src={this.props.pic} id='uploadFile' alt='' />
			</div>
		</div>)
	}
}

const mapStateToProps = state =>({
    progress:Math.floor(state.file.res),
    pic:"  "
  });

const mapDispatchToProps = dispatch =>({
        uploadFile: file => dispatch(uploadFile(file))
    });

export default connect(mapStateToProps, mapDispatchToProps)(UploadFile);