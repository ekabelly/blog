export default (state={fetched:false, res:0, error:null}, action) =>{
	const cases = {
		UPLOADED_FILE:{...state, fetched:true, res:action.payload},
		UPLOADING_FILE:{...state, fetched:false, res:action.payload},
		UPLOAD_FAILED:{...state, fetched:false, error:action.payload}
	}
	return cases[action.type] ? cases[action.type] : state;
}