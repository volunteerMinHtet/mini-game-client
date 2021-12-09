import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeStringValue = async (index, value) => {
	try {
		return await AsyncStorage.setItem(`${index}`, value);
	} catch (e) {
		return e;
	}
};

export const getStringValue = async (index) => {
	try {
		return await AsyncStorage.getItem(`${index}`);
	} catch (e) {
		return e;
	}
};

export const storeObjectValue = async (index, value) => {
	try {
		const jsonValue = JSON.stringify(value);
		return await AsyncStorage.setItem(`${index}`, jsonValue);
	} catch (e) {
		return e;
	}
};

export const getObjectValue = async (index) => {
	try {
		const jsonValue = await AsyncStorage.getItem(`${index}`);
		return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch (e) {
		return e;
	}
};

export const mergeObjectValue = async (index, value) => {
	try {
		return await AsyncStorage.mergeItem(`${index}`, JSON.stringify(value));
	} catch (e) {
		return e;
	}
};

export const removeValue = async (index) => {
	try {
		return await AsyncStorage.removeItem(`${index}`);
	} catch (e) {
		return e;
	}
};

const LocalData = {
	storeStringValue,
	getStringValue,
	storeObjectValue,
	getObjectValue,
	mergeObjectValue,
	removeValue,
};

export default LocalData;
