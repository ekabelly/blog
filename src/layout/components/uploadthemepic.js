import React, { Component } from 'react';
import { connect } from 'react-redux';
import UploadFile from './uploadfile';
import { uploadFile } from '../../actions/index.actions';


class UploadThemePic extends Component {
	picHandler(input){
		if (input.files && input.files[0]) {
		    var reader = new FileReader();
		    this.props.uploadFile(input.files[0], this.props.path);
		    reader.readAsDataURL(input.files[0]);
		}
	}


	render(){
		return (<div className=''>
			<UploadFile index='_theme' />
			<button onClick={()=>this.picHandler(document.getElementById('pic_theme'))} className='btn btn-default'>    שמירה      </button>
		</div>);
	}
}				

const mapDispatchToProps = dispatch =>({
    uploadFile: (file, path) => dispatch(uploadFile(file, path))
});

const mapStateToProps = state =>({
    index:1
  });

export default connect(mapStateToProps, mapDispatchToProps)(UploadThemePic);