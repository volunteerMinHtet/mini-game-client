import { useSelector } from "react-redux"; // hook for select state from redux store

import defaultTheme from "../theme";

export const useThemedStyle = (styles) => {
	const { theme } = useSelector((state) => state); // select theme state from redux store

	return styles(
		theme.isLightTheme
			? {
					...defaultTheme,
					colors: defaultTheme.colors.light,
			  }
			: {
					...defaultTheme,
					colors: defaultTheme.colors.dark,
			  }
	);
};

export const useTheme = () => {
	const { theme } = useSelector((state) => state); // select theme state from redux store

	return theme.isLightTheme
		? {
				...defaultTheme,
				colors: defaultTheme.colors.light,
		  }
		: {
				...defaultTheme,
				colors: defaultTheme.colors.dark,
		  };
};
