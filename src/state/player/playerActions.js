import {
	SIGN_UP_PLAYER,
	LOG_IN_PLAYER,
	LOG_OUT_PLAYER,
	SET_ROOM,
	REMOVE_ROOM,
	SET_SOCKET,
	UPDATE_ROOM_SOCKETS,
} from "./playerConstant";

export function singUp(data) {
	return {
		type: SIGN_UP_PLAYER,
		payload: {
			player_id: data.player_id,
			player_name: data.player_name,
		},
	};
}

export function logIn(data) {
	return {
		type: LOG_IN_PLAYER,
		payload: {
			player_id: data.player_id,
			player_name: data.player_name,
		},
	};
}

export function logOut() {
	return {
		type: LOG_OUT_PLAYER,
	};
}

export function setSocket(data) {
	return {
		type: SET_SOCKET,
		payload: {
			socket_id: data.socket_id,
		},
	};
}

export function setRoom(data) {
	return {
		type: SET_ROOM,
		payload: data,
	};
}

export function updateRoomSockets(data) {
	return {
		type: UPDATE_ROOM_SOCKETS,
		payload: data,
	};
}
