import { createStore, combineReducers, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension"; // dev-tools (react-debugger)

// reducers
import themeReducer from "./theme/themeReducer";
import soundReducer from "./sound/soundReducer";
import playerReducer from "./player/playerReducer";

// middlewares
import soundMiddleWare from "./middlewares/soundMiddleware";
import playerMiddleware from "./middlewares/playerMiddleware";

const rootReducers = combineReducers({
	theme: themeReducer,
	sound: soundReducer,
	player: playerReducer,
});

const configureStore = () => {
	return createStore(
		rootReducers,
		composeWithDevTools(applyMiddleware(soundMiddleWare, playerMiddleware))
	);
};

export default configureStore;
