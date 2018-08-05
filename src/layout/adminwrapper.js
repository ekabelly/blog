import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminLogin from './components/adminlogin';
import Admin from './admin';

class AdminWrapper extends Component {
	handleAuth(){
		if (this.props.user.isAuth) {
			return <Admin />
		}
		return <AdminLogin />
	}

	render(){
		return (<div>
			{this.handleAuth()}
		</div>)
	}
}

const mapStateToProps = state =>({
    user:state.user
  });

export default connect(mapStateToProps)(AdminWrapper);