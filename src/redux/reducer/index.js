import {
	GET_ALL_PLAYERS,
	GET_PLAYER,
	POST_PLAYER,
	PUT_PLAYER,
	DELETE_PLAYER,
} from '../actions';

const initialState = {
	players: [],
	player: {},
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_PLAYERS:
			return {
				...state,
				players: action.payload,
			};
		case GET_PLAYER:
			return {
				...state,
				player: action.payload,
			};
		case POST_PLAYER:
			return {
				...state,
				players: [...state.players, action.payload],
			};
		case PUT_PLAYER:
			return {
				...state,
				players: state.players.map((player) => {
					if (player.id === action.payload.id) {
						return action.payload;
					}
					return player;
				}),
			};
		case DELETE_PLAYER:
			return {
				...state,
				players: state.players.filter(
					(player) => player.id !== action.payload.id
				),
			};
		default:
			return state;
	}
};

export default rootReducer;
