import { Audio } from "expo-av"; // expo audio library

import { PLAY_SOUND } from "../sound/soundConstant";

const soundMiddleWare = (store) => (next) => (action) => {
	switch (action.type) {
		case PLAY_SOUND:
			{
				next(action);

				playSound(action.payload.sound.file);
			}
			break;

		default:
			return next(action);
	}
};

export default soundMiddleWare;

async function playSound(file) {
	try {
		const { sound } = await Audio.Sound.createAsync(file);

		return await sound.playAsync();
	} catch (err) {
		return console.error(err);
	}
}
