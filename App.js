import * as React from "react";
import { Provider } from "react-redux"; // redux state provider
import { useFonts } from "expo-font";

import configureStore from "./src/state/store"; // redux store

import { sounds } from "./src/state/sound/soundConstant";
import { playSound } from "./src/state/sound/soundActions"; // redux sound actions to dispatch

import RootNavigator from "./src/Navigator";

const store = configureStore(); // make store('global-state') variable

const App = () => {
	React.useEffect(() => {
		store.dispatch(playSound(sounds.BACKGROUND_THEME_SOUND)); // dispatch playSound action to play song for app
	}, []);

	const [loaded] = useFonts({
		"Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
		"Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
		"Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
	}); // use custom fonts

	if (!loaded) {
		return null;
	}

	return (
		<Provider store={store}>
			<RootNavigator />
		</Provider>
	);
};

export default App;
