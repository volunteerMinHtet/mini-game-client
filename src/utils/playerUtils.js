import uuid from "react-native-uuid";

const firstNameArray = ["ကျော်", "င", "ဇော်"];
const lastNameArray = ["ကြီး", "အောင်", "မျိုး"];

export function generatePlayerId() {
	const playerId = uuid.v4();

	return playerId;
}

export function generatePlayerName() {
	let firstIndex = generateRandomNumber(firstNameArray.length);
	let lastIndex = generateRandomNumber(lastNameArray.length);

	return `${firstNameArray[firstIndex]}${lastNameArray[lastIndex]}`;
}

export function generateRandomNumber(maxNumber) {
	return Math.floor(Math.random() * maxNumber);
}
