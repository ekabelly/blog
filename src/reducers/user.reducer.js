export default (state={data:{}, isAuth:false}, action) =>{
	const cases = {
		LOGIN:{...state, data:action.payload, isAuth:true},
		LOGOUT:{...state, data:{}, isAuth:false}
	}
	return cases[action.type] ? cases[action.type] : state;
}