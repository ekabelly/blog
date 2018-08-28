import React, { Component } from 'react';
import { connect } from 'react-redux';

class UploadFile extends Component {
	previewHandler(input){
		if (input.files && input.files[0]) {
		    var reader = new FileReader();
		    reader.onload = e => {
		    	document.getElementById('uploadFile'+this.props.index).src = e.target.result;
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
				<input onChange={e=>this.previewHandler(e.target)} type='file' className='form-control' id={'pic'+this.props.index} />
				<img src={this.props.pic} id={'uploadFile'+this.props.index} alt='' className='max-w-100' />
			</div>
			<div className='form-label-right form-group container-fluid'>
				<div className='row'>
					<div className='col-md-12'>
						{this.renderProgressBar()}
					</div>
				</div>
			</div>
		</div>)
	}
}

const mapStateToProps = state =>({
    progress:Math.floor(state.file.res)
  });

export default connect(mapStateToProps)(UploadFile);