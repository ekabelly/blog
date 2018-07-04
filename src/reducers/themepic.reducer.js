export default (state={fetched:false, res:'', error:null}, action) =>{
	const cases = {
		FETCH_THEME_PIC:{...state, fetched:true, res:action.payload}
	}
	return cases[action.type] ? cases[action.type] : state;
}