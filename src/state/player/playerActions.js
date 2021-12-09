import {
	SIGN_UP_PLAYER,
	LOG_IN_PLAYER,
	LOG_OUT_PLAYER,
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
