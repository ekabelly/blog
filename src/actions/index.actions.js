import  { MeRef } from '../config/firebase';

export const fetchMe = () => async dispatch => {
	MeRef.on('value', snapshot=>{
		dispatch({
			type:'FETCH_ME',
			payload:snapshot.val()
		});
	});
}