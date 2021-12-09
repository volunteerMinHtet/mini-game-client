import uuid from "react-native-uuid";

import LocalData from "../hooks/localData";

const firstNameArray = ["ကျော်", "င", "ဇော်"];
const lastNameArray = ["ကြီး", "အောင်", "မျိုး"];

export function generatePlayerId() {
	return uuid.v4();
}

export function generatePlayerName() {
	let firstIndex = generateRandomNumber(firstNameArray.length);
	let lastIndex = generateRandomNumber(lastNameArray.length);

	return `${firstNameArray[firstIndex]}${lastNameArray[lastIndex]}`;
}

export function generateRandomNumber(maxNumber) {
	return Math.floor(Math.random() * maxNumber);
}

export async function storePlayerToLocal(data) {
	return await LocalData.storeObjectValue("@player", data);
}

export async function getPlayerFromLocal() {
	try {
		return await LocalData.getObjectValue("@player");
	} catch (err) {
		return err;
	}
}

export async function isShowedPlayerData() {
	try {
		const playerData = await LocalData.getObjectValue("@player");

		return playerData.shown;
	} catch (err) {
		return err;
	}
}

export async function finishShowedPlayerData() {
	let oldPlayerData = await LocalData.getObjectValue("@player");
	let newPlayerData = {
		...oldPlayerData,
		shown: true,
	};

	return await LocalData.storeObjectValue("@player", newPlayerData);
}

export async function checkPlayerFromLocal() {
	try {
		const playerData = await LocalData.getObjectValue("@player");

		return Boolean(playerData.player_id && playerData.player_name);
	} catch (err) {
		return err;
	}
}
