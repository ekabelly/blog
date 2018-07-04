export default (state={err:{}}, action) =>{
	const cases = {
		ERR:{...state, err:{...state.err, [action.payload]:true}},
		CLEAR_ERR:{...state, err:{}}
	}
	return cases[action.type] ? cases[action.type] : state;
}