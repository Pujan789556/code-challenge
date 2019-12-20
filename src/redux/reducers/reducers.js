import { SEARCH_MOVIES, APPEND_SEARCH, CHANGE_PARAM,CLEAR_PARAM } from '../actions/actions';

const initialState = {
	movies: [],
	response: '',
	error: 'Search Movies By Name!!!',
	totalResults: '',
	type: {id: '',text: 'All'},
	search: '',
	page: 1
}

function rootReducer(state = initialState, action, props){
	switch(action.type){
		case SEARCH_MOVIES:
			return {
				...state,
				movies: action.response.Search ? action.response.Search : [],
				response: action.response.Response,
				error: action.response.Error,
				totalResults: action.response.totalResults
			}
		case APPEND_SEARCH:
		      return {
				...state,
				movies: action.response.Search ? [ ...state.movies , ...action.response.Search ] : [],
				response: action.response.Response,
				error: action.response.Error,
				totalResults: action.response.totalResults,
				page: action.nextPage
			}
		case CHANGE_PARAM:
			return {
				...state,
				[action.name]: action.value
			}
		default:
			return state;
	}
}

export default rootReducer;