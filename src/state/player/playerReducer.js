import {
	SIGN_UP_PLAYER,
	LOG_IN_PLAYER,
	LOG_OUT_PLAYER,
	SIGN_UP_PLAYER_ERROR,
	LOG_IN_PLAYER_ERROR,
} from "./playerConstant";

const defaultState = {
	player_id: "",
	player_name: "",
	isLoggedIn: false,
	isLoading: false,
	error: "",
};

const playerReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SIGN_UP_PLAYER:
			return {
				...state,
				player_id: action.payload.player_id,
				player_name: action.payload.player_name,
				isLoggedIn: true,
				isLoading: false,
				error: "",
			};

		case LOG_IN_PLAYER:
			return {
				...state,
				player_id: action.payload.player_id,
				player_name: action.payload.player_name,
				isLoggedIn: true,
				isLoading: false,
				error: "",
			};

		case LOG_OUT_PLAYER:
			return {
				...state,
				player_id: "",
				player_name: "",
				isLoggedIn: false,
				isLoading: false,
				error: "",
			};

		case SIGN_UP_PLAYER_ERROR:
			return {
				...state,
				isLoggedIn: false,
				isLoading: false,
				error: action.payload.error,
			};

		case LOG_IN_PLAYER_ERROR:
			return {
				...state,
				isLoggedIn: false,
				isLoading: false,
				error: action.payload.error,
			};

		default:
			return state;
	}
};

export default playerReducer;
