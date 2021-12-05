import { scale } from "react-native-size-matters";

const fontSize = {
	largeTitle: scale(50),
	h1: scale(30),
	h2: scale(22),
	h3: scale(20),
	h4: scale(18),
	body1: scale(30),
	body2: scale(20),
	body3: scale(16),
	body4: scale(14),
	body5: scale(12),
};

const letterSpacing = {
	S: scale(2),
	M: scale(5),
	L: scale(10),
};

const fonts = {
	largeTitle: {
		fontFamily: "Roboto-Regular",
		fontSize: fontSize.largeTitle,
		lineHeight: scale(60),
	},
	h1: {
		fontFamily: "Roboto-Black",
		fontSize: fontSize.h1,
		lineHeight: scale(41),
	},
	h2: {
		fontFamily: "Roboto-Bold",
		fontSize: fontSize.h2,
		lineHeight: scale(35),
	},
	h3: {
		fontFamily: "Roboto-Bold",
		fontSize: fontSize.h3,
		lineHeight: scale(27),
	},
	h4: {
		fontFamily: "Roboto-Bold",
		fontSize: fontSize.h4,
		lineHeight: scale(27),
	},
	body1: {
		fontFamily: "Roboto-Regular",
		fontSize: fontSize.body1,
		lineHeight: scale(41),
	},
	body2: {
		fontFamily: "Roboto-Regular",
		fontSize: fontSize.body2,
		lineHeight: scale(35),
	},
	body3: {
		fontFamily: "Roboto-Regular",
		fontSize: fontSize.body3,
		lineHeight: scale(27),
	},
	body4: {
		fontFamily: "Roboto-Regular",
		fontSize: fontSize.body4,
		lineHeight: scale(27),
	},
	body5: {
		fontFamily: "Roboto-Regular",
		fontSize: fontSize.body5,
		lineHeight: scale(27),
	},
};

export const typography = { letterSpacing, fonts };
