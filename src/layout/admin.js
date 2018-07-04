import React, { Component } from 'react';
import { connect } from 'react-redux';
import UploadFile from './components/uploadfile';

class Admin extends Component {
	render(){
		return (<div>
			admin
			<UploadFile />
		</div>)
	}
}

export default connect()(Admin);