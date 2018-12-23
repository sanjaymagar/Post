import {
	GET_PROFILE,
	GET_PROFILES,
	ADD_PROFILE,
	DELETE_PROFILE
} from './types';

import axios from 'axios';


export const createProfile = newProfile => dispatch => {
	axios
		.post('https://jsonplaceholder.typicode.com/users')
		.then(res => 
			dispatch({
				type:ADD_PROFILE,
				payload:res.data
			})
		)
		.catch(err => console.table(err));
}




export const getProfiles = () => dispatch => {
	axios
		.get('https://jsonplaceholder.typicode.com/users')
		.then(res => 
			dispatch({
				type:GET_PROFILES,
				payload:res.data
			})
		)
		.catch(err => console.table(err));
}