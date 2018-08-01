import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/login.actions';

class AdminLogin extends Component {
	login(){
		this.props.login(document.getElementById('email').value, document.getElementById('pass').value)
	}
	render(){
		return (<div>
			login
			<input type="text" id="email" />
			<input type="password" id="pass" />
			<button className="btn btn-default" onClick={()=>this.login()} > login </button>
		</div>)
	}
}

const mapStateToProps = state =>({
    user:state.user
  });

const mapDispatchToProps = dispatch =>({
		login:(email, password) => dispatch(login(email, password))
    });

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);