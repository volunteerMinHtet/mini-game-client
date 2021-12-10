import { Dimensions } from "react-native";
import { scale } from "react-native-size-matters";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

export const sizes = {
	base: scale(8),
	font: scale(14),
	radius: scale(5),
	padding: scale(10),
	padding2: scale(12),
	margin: scale(10),
	margin2: scale(12),
	border: scale(1),
	border2: scale(3),
	border3: scale(5),
};
