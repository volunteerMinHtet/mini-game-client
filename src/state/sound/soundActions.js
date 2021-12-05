import { PLAY_SOUND } from "./soundConstant";

export const playSound = (sound) => {
	return {
		type: PLAY_SOUND,
		payload: {
			sound,
		},
	};
};
