export default (state={id:'me', show:false}, action) =>{
	const show  = action.payload ? true : false;
	const cases = {
		SHOW_ARTICLE:{...state, show:show, id:action.payload}
	}
	return cases[action.type] ? cases[action.type] : state;
}