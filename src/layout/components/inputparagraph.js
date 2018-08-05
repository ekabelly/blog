import React, { Component } from 'react';
import { connect } from 'react-redux';
import ParagraphPic from './paragraphpic'

class InputParagraph extends Component {
	state = {
		pics:[{}]
	}

	newPic(){
		this.setState({pics:[...this.state.pics, {}]});
	}

	render(){
		const { index } = this.props
		return (<div className='space container-fluid well'>
			<button className="btn btn-default" type="button" data-toggle="collapse" data-target={"#pcontainer"+index} aria-expanded="false" aria-controls={"pcontainer"+index}>
				{'פסקה '+(index+1)+' '}<span className="caret"></span>
			</button>
			<div className='col-md-12 container-fluid collapse space' id={'pcontainer'+index}>
				<div className='row'>
					<div className='col-md-6'>
						<button onClick={()=>this.newPic()} className="btn btn-default" type="button">
							הוספת  תמונה
						</button>
							{this.state.pics.map((pic, i)=><ParagraphPic pindex={index} key={i} i={i} />)}
					</div>
					<div className='col-md-6 container-fluid'>
						<div className='row'>
							<div className='form-group col-md-3'>
								<label htmlFor={'ptype'+index}>   סוג פסקה:     </label>
								<select className='form-control' id={'ptype'+index}>
									<option>     רגיל     </option>
									<option>       כותרת     </option>
								</select>
							</div>
							<div className='form-group col-md-9'>
								<label htmlFor={'p'+index}>   טקסט:     </label>
								<textarea id={'p'+index} rows="2" className='form-control' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>);
	}	
}

export default connect()(InputParagraph);