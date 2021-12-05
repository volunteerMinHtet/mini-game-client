import { TOGGLE_THEME } from "./themeConstant";

const defaultState = {
	isLightTheme: true,
	isLoading: false,
	error: "",
};

const themeReducer = (state = defaultState, action) => {
	switch (action.type) {
		case TOGGLE_THEME:
			return {
				...state,
				isLightTheme: !state.isLightTheme,
				isLoading: false,
				error: "",
			};

		default:
			return state;
	}
};

export default themeReducer;
