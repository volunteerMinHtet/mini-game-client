import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUpNavigator from "./SignUp/SignUpNavigator";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
	return (
		<NavigationContainer>
			<SignUpNavigator />
		</NavigationContainer>
	);
};

export default RootNavigator;
