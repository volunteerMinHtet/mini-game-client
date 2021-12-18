import * as React from "react";
import { Provider } from "react-redux"; // redux state provider
import { useFonts } from "expo-font";
import { RootSiblingParent } from "react-native-root-siblings";

// Expo Admob
import { setTestDeviceIDAsync } from "expo-ads-admob";

import configureStore from "./src/state/store"; // redux store

// sound
import { sounds } from "./src/state/sound/soundConstant";
import { playSound } from "./src/state/sound/soundActions"; // redux sound actions to dispatch

// player
import { LOG_IN_PLAYER } from "./src/state/player/playerConstant";
import { logIn } from "./src/state/player/playerActions";

import { checkPlayerFromLocal, getPlayerFromLocal } from "./src/utils/player";

// import RootNavigator from "./src/Navigator";
import RootNavigator from "./src/screens/RootNavigator";

const store = configureStore(); // make store('global-state') variable

const convertTestDeviceForExpoAdmob = async () => {
	await setTestDeviceIDAsync("EMULATOR"); // set current using device to test device for google
};

const App = () => {
	React.useEffect(() => {
		// store.dispatch(playSound(sounds.BACKGROUND_THEME_SOUND)); // dispatch playSound action to play song for app
	}, []);

	React.useEffect(() => {
		convertTestDeviceForExpoAdmob();
	}, []);

	React.useEffect(() => {
		let mounted = true;

		async function initializePlayer() {
			try {
				let result = await checkPlayerFromLocal();

				if (result) {
					let player = await getPlayerFromLocal();
					let data = {
						player_id: player.player_id,
						player_name: player.player_name,
					};

					store.dispatch(logIn(data));

					if (mounted) {
						setLoading(false);
					}
				}
			} catch (err) {
				if (mounted) {
					setLoading(false);
				}
			}
		}

		initializePlayer();

		return () => {
			mounted = false;
		};
	}, []);

	const [loading, setLoading] = React.useState(true);

	const [loaded] = useFonts({
		"Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
		"Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
		"Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
	}); // use custom fonts

	if (!loaded) {
		return null;
	}

	if (loading) {
		return null;
	}

	return (
		<Provider store={store}>
			<RootSiblingParent>
				<RootNavigator />
			</RootSiblingParent>
		</Provider>
	);
};

export default App;
