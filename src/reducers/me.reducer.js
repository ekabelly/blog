export default (state={fetched:false, res:[], error:null}, action) =>{
	const cases = {
		FETCH_ME:{...state, fetched:true, res:action.payload}
	}
	return cases[action.type] ? cases[action.type] : state;
}