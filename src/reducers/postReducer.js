import {
	ADD_POST,
	GET_POST,
	GET_POSTS,
	DELETE_POST
} from '../actions/types';

const initialState = {
	item:{},
	items:[]
}

export default function(state = initialState, action) {
	switch(action.type){		
		case GET_POST:
			console.log('GET_POST')
			return {
				...state,
				item:action.payload
			};

		case GET_POSTS:
			return {
				...state,
				items:action.payload
			};

		case ADD_POST:
			return {
				...state,
				item:action.payload
			};
			
		case DELETE_POST:
		  return {
		    ...state,
		    items: state.items.filter(post => post.id !== action.payload)
		  };

		default:
			return state;
	}
}