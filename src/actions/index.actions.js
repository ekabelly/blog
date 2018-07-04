import  { storage } from '../config/firebase';

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