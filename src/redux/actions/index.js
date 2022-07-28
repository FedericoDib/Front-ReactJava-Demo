import axios from 'axios';
export const GET_ALL_PLAYERS = 'GET_ALL_PLAYERS';
export const GET_PLAYER = 'GET_PLAYER';
export const POST_PLAYER = 'POST_PLAYER';
export const PUT_PLAYER = 'PUT_PLAYER';
export const DELETE_PLAYER = 'DELETE_PLAYER';

export const getAllPlayers = () => {
	// console.log("ESTOY EN LA ACTION", payload);
	return async (dispatch) => {
		let response = await axios.get(
			`https://jsonplaceholder.typicode.com/posts`
		);
		return dispatch({
			type: GET_ALL_PLAYERS,
			payload: response.data,
		});
	};
};

export const getPlayer = (id) => {
	return async (dispatch) => {
		let response = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		);
		return dispatch({
			type: GET_PLAYER,
			payload: response.data,
		});
	};
};

export const postPlayer = (player) => {
	return async (dispatch) => {
		let response = await axios.post(
			`https://jsonplaceholder.typicode.com/posts`,
			player
		);
		return dispatch({
			type: POST_PLAYER,
			payload: response.data,
		});
	};
};

export const putPlayer = (id, player) => {
	return async (dispatch) => {
		let response = await axios.put(
			`https://jsonplaceholder.typicode.com/posts/${id}`,
			player
		);
		return dispatch({
			type: PUT_PLAYER,
			payload: response.data,
		});
	};
};

export const deletePlayer = (id) => {
	return async (dispatch) => {
		let response = await axios.delete(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		);
		return dispatch({
			type: DELETE_PLAYER,
			payload: response.data,
		});
	};
};
