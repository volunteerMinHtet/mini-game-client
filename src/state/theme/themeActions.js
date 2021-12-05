import { TOGGLE_THEME } from "./themeConstant";

export const toggleTheme = () => {
	return {
		type: TOGGLE_THEME,
		payload: {},
	};
};
