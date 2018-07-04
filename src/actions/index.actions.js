import  { storage, contactRef, themePicRef } from '../config/firebase';

export const uploadFile = file => async dispatch =>{
	const storageRef = storage.ref('/pics/'+file.name);
	let task = storageRef.put(file);
	task.on('state_changed',
		function progress(snapshot){
			let precentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			dispatch({type:'UPLOADING_FILE', payload:precentage});
		},
		function error(err){
			dispatch({type:'UPLOAD_FAILED', payload:err});
		},
		function complete(){
			dispatch({type:'UPLOADED_FILE', payload:100});
		})
}

export const contact = contact => async dispatch => {
  contactRef.push().set({title:contact.title, email:contact.email, content:contact.content, name:contact.name});
  dispatch({type:'CONTACT'});
};

export const fetchThemePic = () => async dispatch => {
	themePicRef.on('value', snapshot=>{
		dispatch({
			type:'FETCH_THEME_PIC',
			payload:snapshot.val()
		});
	});
}