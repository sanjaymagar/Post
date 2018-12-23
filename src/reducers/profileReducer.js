import {
	GET_PROFILE,
	GET_PROFILES,
	ADD_PROFILE,
	DELETE_PROFILE
} from '../actions/types';


const initialState = {
	profile:{},
	profiles:[]
};

export default function(state = initialState, action) {
	switch(action.type) {
		case ADD_PROFILE:
			console.log('ADD_PROFILE');
			return {
				...state,
				profile:action.payload
			};

		case GET_PROFILES:
			return {
				...state,
				profiles:action.payload
			}
		default:
			return state;
	}
}