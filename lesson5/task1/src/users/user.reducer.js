import { INCREMENT, DECREMENT } from './user.actions.js';

const initialState = {
	usersList: [
		{
			id: 'id-0',
			age: 21,
			name: 'Bob'
		},
		{
			id: 'id-1',
			age: 17,
			name: 'Tom'
		},
		{
			id: 'id-2',
			age: 18,
			name: 'Tad'
		},
		{
			id: 'id-3',
			age: 45,
			name: 'Justin'
		},
		{
			id: 'id-4',
			age: 45,
			name: 'Franklin'
		},
		{
			id: 'id-5',
			age: 45,
			name: 'John'
		},
		{
			id: 'id-6',
			age: 45,
			name: 'Andrew'
		},
		{
			id: 'id-7',
			age: 45,
			name: 'Pol'
		},
		{
			id: 'id-8',
			age: 45,
			name: 'Ron'
		},
		{
			id: 'id-9',
			age: 45,
			name: 'Harry'
		},
		{
			id: 'id-10',
			age: 45,
			name: 'Anna'
		}
	],
	currentPage: 0
};

function pageReducer(state = initialState, action) {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				currentPage: state.currentPage + 1
			};
		case DECREMENT:
			return {
				...state,
				currentPage:state.currentPage - 1
			};
		default:
			return state;
	}
}

export default pageReducer;