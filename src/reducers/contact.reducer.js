export default (state={done:false}, action) =>{
	const cases = {
		CONTACT:{...state, done:action.payload}
	}
	return cases[action.type] ? cases[action.type] : state;
}