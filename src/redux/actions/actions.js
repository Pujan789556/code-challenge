import axios from '../../axios/axios'

export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const CHANGE_PARAM = 'CHANGE_PARAM';
export const APPEND_SEARCH = 'APPEND_SEARCH';
export const CLEAR_PARAM= 'CLEAR_PARAM';
//export const GET_MOVIE = 'GET_MOVIE';

//export const ENABLE_ADVANCE_SEARCH = 'ENABLE_ADVANCE_SEARCH';
//export const DISABLE_ADVANCE_SEARCH = 'DISABLE_ADVANCE_SEARCH';

const getSearchResponse = (response,props)=>{
	return {type: SEARCH_MOVIES, response: response, props: props}
}

export const searchMovies = (props) => {
	const url = '&type=' + props.type.id + '&s=' + props.search + '&y=' + props.year;
	return (dispatch) => {
		axios.get(url)
			.then(response =>{
				dispatch(getSearchResponse(response.data,props));
			})
			.catch(error => {
				console.log(error);
			})
	}
}

const getAppededSearchResponse = (response,props,nextPage)=>{
	return {type: APPEND_SEARCH, response: response, props: props, nextPage: nextPage}
}

export const nextPageSearchMovies = (props,nextPage) => {
	const url = '&type=' + props.type.id + '&s=' + props.search + '&y=' + props.year + '&page=' + nextPage;
	return (dispatch) => {
		axios.get(url)
			.then(response =>{
				dispatch(getAppededSearchResponse(response.data,props,nextPage));
			})
			.catch(error => {
				console.log(error);
			})
	}
}

export const changeParam = (name,value) => {
	return {type: CHANGE_PARAM, name: name,value: value}
}

export const clearParam = () => {
	return {type: CLEAR_PARAM }
}