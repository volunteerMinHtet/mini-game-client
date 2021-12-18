// Colors palette source https://flatuicolors.com/palette/defo

const SUN_FLOWER = "#f1c40f";
const ASBESTOS = "#7f8c8d";
const MIDNIGHT_BLUE = "#2c3e50";
const EMERALD = "#2ecc71";
const ALIZARIN = "#e74c3c";
const CLOUDS = "#ecf0f1";
const SILVER = "#bdc3c7";
const CONCRETE = "#95a5a6";
const WET_ASPHALT = "#95a5a6";

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
	secondary_background: CONCRETE,
	text: MIDNIGHT_BLUE,
	secondary_text: ASBESTOS,
};

const dark = {
	...common,
	background: MIDNIGHT_BLUE,
	secondary_background: WET_ASPHALT,
	text: CLOUDS,
	secondary_text: SILVER,
};

export const colors = { light, dark };
