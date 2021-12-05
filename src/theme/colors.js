// Colors palette source https://flatuicolors.com/palette/defo

const SUN_FLOWER = "#f1c40f";
const ASBESTOS = "#7f8c8d";
const MIDNIGHT_BLUE = "#2c3e50";
const EMERALD = "#2ecc71";
const ALIZARIN = "#e74c3c";
const CLOUDS = "#ecf0f1";
const SILVER = "#bdc3c7";

const WHITE = "#FFFFFF";
const BLACK = "#000000";

const common = {
	primary: SUN_FLOWER,
	success: EMERALD,
	error: ALIZARIN,

	white: WHITE,
	black: BLACK,
};

const light = {
	...common,
	background: CLOUDS,
	text: MIDNIGHT_BLUE,
	text_secondary: ASBESTOS,
};

const dark = {
	...common,
	background: MIDNIGHT_BLUE,
	text: CLOUDS,
	text_secondary: SILVER,
};

export const colors = { light, dark };
