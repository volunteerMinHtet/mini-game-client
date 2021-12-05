import { createStore, combineReducers, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension"; // dev-tools (react-debugger)

// reducers
import themeReducer from "./theme/themeReducer";
import soundReducer from "./sound/soundReducer";

// middlewares
import soundMiddleWare from "./middlewares/soundMiddleware";

const rootReducers = combineReducers({
	theme: themeReducer,
	sound: soundReducer,
});

const configureStore = () => {
	return createStore(
		rootReducers,
		composeWithDevTools(applyMiddleware(soundMiddleWare))
	);
};

export default configureStore;
