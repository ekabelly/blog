import React, { Component } from 'react';
import { connect } from 'react-redux';
import mePic from '../resources/me_desc.jpg';

class Me extends Component {
	render(){
		return (<div>
				<h2 className='text-right'> קצת על עצמי... </h2>
			<article className='well me-article container-fluid'>
				<div className='row'>
					<div className=''>
						<img className='me-pic' alt='אני' width='40%' src={mePic} />
		            	<p className='text-right me-text'>
			               	                לום חברים, הפעם החלטתי לדבר איתכם על מוצר שנקרא פוליסת חיסכון. בקצרה פוליסת חיסכון או בשמה הנוסף "פוליסה פיננסית" זהו מוצר שנועד לחיסכון. אל פוליסת חיסכון ניתן להפקיד כסף באופן שוטף או הפקדה של סכום חד פעמי כאשר הכסף מושקע בשוק ההון ובמוצרים אלטרנטיביים אחרים ואמור לייצר לנו החוסכים תשואה. באופן זה ניתן להגן ע
			                לום חברים, הפעם החלטתי לדבר איתכם על מוצר שנקרא פוליסת חיסכון. בקצרה פוליסת חיסכון או בשמה הנוסף "פוליסה פיננסית" זהו מוצר שנועד לחיסכון. אל פוליסת חיסכון ניתן להפקיד כסף באופן שוטף או הפקדה של סכום חד פעמי כאשר הכסף מושקע בשוק ההון ובמוצרים אלטרנטיביים אחרים ואמור לייצר לנו החוסכים תשואה. באופן זה ניתן להגן ע
			                	                לום חברים, הפעם החלטתי לדבר איתכם על מוצר שנקרא פוליסת חיסכון. בקצרה פוליסת חיסכון או בשמה הנוסף "פוליסה פיננסית" זהו מוצר שנועד לחיסכון. אל פוליסת חיסכון ניתן להפקיד כסף באופן שוטף או הפקדה של סכום חד פעמי כאשר הכסף מושקע בשוק ההון ובמוצרים אלטרנטיביים אחרים ואמור לייצר לנו החוסכים תשואה. באופן זה ניתן להגן ע

			                לום חברים, הפעם החלטתי לדבר איתכם על מוצר שנקרא פוליסת חיסכון. בקצרה פוליסת חיסכון או בשמה הנוסף "פוליסה פיננסית" זהו מוצר שנועד לחיסכון. אל פוליסת חיסכון ניתן להפקיד כסף באופן שוטף או הפקדה של סכום חד פעמי כאשר הכסף מושקע בשוק ההון ובמוצרים אלטרנטיביים אחרים ואמור לייצר לנו החוסכים תשואה. באופן זה ניתן להגן ע

			                לום חברים, הפעם החלטתי לדבר איתכם על מוצר שנקרא פוליסת חיסכון. בקצרה פוליסת חיסכון או בשמה הנוסף "פוליסה פיננסית" זהו מוצר שנועד לחיסכון. אל פוליסת חיסכון ניתן להפקיד כסף באופן שוטף או הפקדה של סכום חד פעמי כאשר הכסף מושקע בשוק ההון ובמוצרים אלטרנטיביים אחרים ואמור לייצר לנו החוסכים תשואה. באופן זה ניתן להגן ע

		            	</p>
					</div>
	            </div>
            </article>
		</div>)
	}

}

export default connect()(Me);