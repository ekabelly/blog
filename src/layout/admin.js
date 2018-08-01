import React, { Component } from 'react';
import { connect } from 'react-redux';
import UploadFile from './components/uploadfile';
import AdminLogin from './components/adminlogin';

class Admin extends Component {
	handleAuth(){
		if (this.props.user.isAuth) {
			return <UploadFile />
		}
		return <AdminLogin />
	}

	render(){
		return (<div>
			admin
			{this.handleAuth()}
		</div>)
	}
}

const mapStateToProps = state =>({
    user:state.user
  });

const mapDispatchToProps = dispatch =>({

    });

export default connect(mapStateToProps)(Admin);