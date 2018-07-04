import React, { Component } from 'react';
import { connect } from 'react-redux';
import { validateInputs } from '../services';
import { contact, clearErr } from '../actions/index.actions';

class Contact extends Component {
	handleForm(){
		this.props.clearErr();
		const contactData = {
			email:document.getElementById('email').value,
			name:document.getElementById('name').value,
			title:document.getElementById('title').value,
			content:document.getElementById('content').value
		}
		if(validateInputs(contactData)){
			this.props.contact(contactData);
		}
	}

	handlerErr(field){
		if (this.props.err[field]) {
			return {borderColor:'red'};
		}
		return {};
	}

	renderContact(){
		if (this.props.contactState) {
			return <strong> תודה רבה! </strong>
		}
		return (<div className='row'>
	            	<div>
	            		<div className='form-group col-md-offset-6 col-md-5'>
							<label htmlFor='name' className=''> שם:</label>
							<input id='name' type='text' className='form-control' style={this.handlerErr('name')} />
						</div>
						<div className='form-group col-md-offset-6 col-md-5'>
							<label htmlFor='email' className=''>אימייל</label>
							<input id='email' type='email' className='form-control' style={this.handlerErr('email')} />
						</div>
						<div className='form-group col-md-offset-6 col-md-5'>
							<label htmlFor='title' className=''>כותרת</label>
							<input id='title' type='text' className='form-control' style={this.handlerErr('title')} />
						</div>
						<div className='form-group col-md-offset-1 col-md-10'>
							<label htmlFor='content' className=''>כותרת</label>
							<textarea id='content' type='text' rows='4' className='form-control' style={this.handlerErr('content')} />
						</div>
						<div className='form-group col-md-12'>
							<button onClick={()=>this.handleForm()} className='btn btn-lg btn-default center-block'>שלח</button>
						</div>
	            	</div>
	            </div>);
	}

	render(){
		return (<div className='text-right'>
				<h2>צור קשר </h2>
			<section className='well container-fluid'>
				{this.renderContact()}
            </section>
		</div>);
	}

}

const mapStateToProps = state =>({
    contactState:state.contact.done,
    err:state.err.err
  });

const mapDispatchToProps = dispatch =>({
        contact: contactData => dispatch(contact(contactData)),
        clearErr: () => dispatch(clearErr())
    });

export default connect(mapStateToProps, mapDispatchToProps)(Contact);