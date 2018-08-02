import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/login.actions';

class AdminLogin extends Component {
	login(){
		this.props.login(document.getElementById('email').value, document.getElementById('pass').value)
	}
	render(){
		return (<div>
			<div className='container-fluid'>
				<div className='center-block login-container well'>
					<h4>התחברות: </h4>
					<br/>
					<div className='form-group'>
						<label htmlFor='email'> אימייל:</label>
					</div>
					<div className='form-group'>
							<input id='email' type='text' className='login-input' />
					</div>
					<div className='form-group'>
						<label htmlFor='pass'> סיסמה:</label>
					</div>
					<div className='form-group'>
						<input id='pass' type='password' className='login-input' />
					</div>
					<button className="btn btn-default" onClick={()=>this.login()} > התחבר/י </button>
				</div>
			</div>
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