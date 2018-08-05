import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uploadFile } from '../../actions/index.actions';

class UploadFile extends Component {
	picHandler(input){
		if (input.files && input.files[0]) {
		    var reader = new FileReader();
		    this.props.uploadFile(input.files[0], this.props.path);
		    reader.readAsDataURL(input.files[0]);
		  }
		
	}

	previewHandler(input){
		if (input.files && input.files[0]) {
		    var reader = new FileReader();
		    reader.onload = e => {
		    	document.getElementById('uploadFile').src = e.target.result;
			}
			reader.readAsDataURL(input.files[0]);
		}
	}

	renderProgressBar(){
		if (this.props.progress) {
			return (<div className="progress">
				<div className="progress-bar" role="progressbar" aria-valuenow={this.props.progress} aria-valuemin="0" aria-valuemax="100" style={{width:this.props.progress + '%', minWidth:'2em'}}>
				    { this.props.progress + '%' }
				</div>
			</div>);
		}
		return null;
	}

	render(){
		return (<div>
			<div className='form-label-right form-group'>
				<input onChange={e=>this.previewHandler(e.target)} type='file' className='form-control' id='event_pic' />
				<img src={this.props.pic} id='uploadFile' alt='' className='max-w-100' />
			</div>
			<div className='form-label-right form-group container-fluid'>
				<div className='row'>
					<div className='col-md-10'>
						{this.renderProgressBar()}
					</div>
					<div className='col-md-1 col-md-offset-1'>
						<button onClick={()=>this.picHandler(document.getElementById('event_pic'))} className='btn btn-default'>    שמירה      </button>
					</div>
				</div>
			</div>
		</div>)
	}
}

const mapStateToProps = state =>({
    progress:Math.floor(state.file.res)
  });

const mapDispatchToProps = dispatch =>({
        uploadFile: (file, path) => dispatch(uploadFile(file, path))
    });

export default connect(mapStateToProps, mapDispatchToProps)(UploadFile);