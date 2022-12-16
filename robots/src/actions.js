//import searchField & robots
import {CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED} from './constants.js';

//function: dar khoroji object return mikonad pas redux be tanhayi mifahmad
export const setSearchField = (text)=>({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

//function: dar khoroji object return nemikonad balke function return mikonad pas redux b tanhayi nemifahmad va bayad redux-thunk Middleware ezafe kard
export const requestRobots = (dispatch) =>{
	dispatch ({type: REQUEST_ROBOTS_PENDING})
	//fetch & .then(response=>response.json()) ra az App.js b actions.js miavarim:
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(data=>dispatch({type:REQUEST_ROBOTS_SUCCESS,payload:data}))
		.catch(error=>dispatch({type:REQUEST_ROBOTS_FAILED,payload:error}))

}