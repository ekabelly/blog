import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uploadFile } from '../../actions/index.actions';

class UploadFile extends Component {
	picHandler(input){
		if (input.files && input.files[0]) {
		    var reader = new FileReader();

		    //reader.onload = e => {}
		    this.props.uploadFile(input.files[0]);
		    reader.readAsDataURL(input.files[0]);
		  }
		
	}

	render(){
		return (<div>
			<div className='form-label-right'>
				<label htmlFor='event_pic'>upload</label>
				<input type='file' onChange={e=>this.picHandler(e.target)} className='form-control' id='event_pic' />
				<p>{this.props.progeres ? this.props.progeres + '%' : null}</p>
				<img src={this.props.pic} alt='' />
			</div>
		</div>)
	}
}

const mapStateToProps = state =>({
    progeres:Math.floor(state.file.res),
    pic:'1234'
  });

const mapDispatchToProps = dispatch =>({
        uploadFile: file => dispatch(uploadFile(file))
    });

export default connect(mapStateToProps, mapDispatchToProps)(UploadFile);