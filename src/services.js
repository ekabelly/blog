import store from './store';
import { err } from './actions/index.actions';

export const changeY = top =>window.scrollTo({
      top:top,
      left:0,
      behavior:'smooth'
    });

export const validateInputs = content =>{
	var bool = true;
	const arrContent = Object.keys(content);
	for (let i = 0 ; i < arrContent.length; i++) {
		const validate = content[arrContent[i]];
		if (validate.trim() === '' || validate === null || validate === undefined) {
			store.dispatch(err(arrContent[i]));
			bool = false;
		}
		if (arrContent[i] === 'email' && !handleEmailVlidation(validate)) {
			store.dispatch(err(arrContent[i]));
			bool = false;
		}
	}
	return bool;
}

const handleEmailVlidation = email =>email.indexOf('@') !== -1;