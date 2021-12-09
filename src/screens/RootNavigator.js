import * as React from "react";
import {
	NavigationContainer,
	createNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import signUpNavigator from "./signup/SignUpNavigator";
import homeNavigator from "./home/HomeNavigator";

const Stack = createNativeStackNavigator();

export const navigationRef = createNavigationContainerRef();

export function navigation(name, params) {
	if (navigationRef.isReady()) {
		navigationRef.navigate(name, params);
	}
}

const RootNavigator = () => {
	const { player } = useSelector((state) => state);

	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator>
				{player.isLoggedIn ? homeNavigator : signUpNavigator}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigator;
