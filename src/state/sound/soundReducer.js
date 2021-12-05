import { PLAY_SOUND } from "./soundConstant";

const defaultState = {
	type: "",
	playing: false,
	error: "",
};

const soundReducer = (state = defaultState, action) => {
	switch (action.type) {
		case PLAY_SOUND:
			return {
				...state,
				type: action.payload.sound.type,
				playing: true,
				error: "",
			};

		default:
			return state;
	}
};

export default soundReducer;
