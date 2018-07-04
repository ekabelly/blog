export default (state={done:false}, action) =>{
	const cases = {
		CONTACT:{...state, done:true}
	}
	return cases[action.type] ? cases[action.type] : state;
}