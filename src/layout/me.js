import React, { Component } from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import mePic from '../resources/me_desc.jpg';

class Me extends Component {
	render(){
=======

class Me extends Component {
	render(){
		const { pic, content } = this.props;
>>>>>>> be76a1ff3e7f75def722bd8aa0457aafcc92ec7d
		return (<div>
				<h2 className='text-right'> קצת על עצמי... </h2>
			<article className='well me-article container-fluid'>
				<div className='row'>
					<div className=''>
<<<<<<< HEAD
						<img className='me-pic' alt='אני' width='40%' src={mePic} />
		            	<p className='text-right me-text'>
			               	                לום חברים, הפעם החלטתי לדבר איתכם על מוצר שנקרא פוליסת חיסכון. בקצרה פוליסת חיסכון או בשמה הנוסף "פוליסה פיננסית" זהו מוצר שנועד לחיסכון. אל פוליסת חיסכון ניתן להפקיד כסף באופן שוטף או הפקדה של סכום חד פעמי כאשר הכסף מושקע בשוק ההון ובמוצרים אלטרנטיביים אחרים ואמור לייצר לנו החוסכים תשואה. באופן זה ניתן להגן ע
			                לום חברים, הפעם החלטתי לדבר איתכם על מוצר שנקרא פוליסת חיסכון. בקצרה פוליסת חיסכון או בשמה הנוסף "פוליסה פיננסית" זהו מוצר שנועד לחיסכון. אל פוליסת חיסכון ניתן להפקיד כסף באופן שוטף או הפקדה של סכום חד פעמי כאשר הכסף מושקע בשוק ההון ובמוצרים אלטרנטיביים אחרים ואמור לייצר לנו החוסכים תשואה. באופן זה ניתן להגן ע
			                	                לום חברים, הפעם החלטתי לדבר איתכם על מוצר שנקרא פוליסת חיסכון. בקצרה פוליסת חיסכון או בשמה הנוסף "פוליסה פיננסית" זהו מוצר שנועד לחיסכון. אל פוליסת חיסכון ניתן להפקיד כסף באופן שוטף או הפקדה של סכום חד פעמי כאשר הכסף מושקע בשוק ההון ובמוצרים אלטרנטיביים אחרים ואמור לייצר לנו החוסכים תשואה. באופן זה ניתן להגן ע

			                לום חברים, הפעם החלטתי לדבר איתכם על מוצר שנקרא פוליסת חיסכון. בקצרה פוליסת חיסכון או בשמה הנוסף "פוליסה פיננסית" זהו מוצר שנועד לחיסכון. אל פוליסת חיסכון ניתן להפקיד כסף באופן שוטף או הפקדה של סכום חד פעמי כאשר הכסף מושקע בשוק ההון ובמוצרים אלטרנטיביים אחרים ואמור לייצר לנו החוסכים תשואה. באופן זה ניתן להגן ע

			                לום חברים, הפעם החלטתי לדבר איתכם על מוצר שנקרא פוליסת חיסכון. בקצרה פוליסת חיסכון או בשמה הנוסף "פוליסה פיננסית" זהו מוצר שנועד לחיסכון. אל פוליסת חיסכון ניתן להפקיד כסף באופן שוטף או הפקדה של סכום חד פעמי כאשר הכסף מושקע בשוק ההון ובמוצרים אלטרנטיביים אחרים ואמור לייצר לנו החוסכים תשואה. באופן זה ניתן להגן ע

=======
						<img className='me-pic' alt='אני' width='40%' src={pic} />
		            	<p className='text-right me-text'>
			            	{content}
>>>>>>> be76a1ff3e7f75def722bd8aa0457aafcc92ec7d
		            	</p>
					</div>
	            </div>
            </article>
		</div>)
	}

}

<<<<<<< HEAD
export default connect()(Me);
=======
const mapStateToProps = state =>({
		content:state.me.res.content,
		pic:state.me.res.pic
	});

export default connect(mapStateToProps)(Me);
>>>>>>> be76a1ff3e7f75def722bd8aa0457aafcc92ec7d
