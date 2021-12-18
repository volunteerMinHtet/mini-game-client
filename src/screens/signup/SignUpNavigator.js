import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUpPlayerNameScreen from "./SignUpPlayerNameScreen";

const Stack = createNativeStackNavigator();

const signUpNavigator = (
	<Stack.Group screenOptions={{ headerShown: false }}>
		<Stack.Screen
			name="SignUp/PlayerName"
			component={SignUpPlayerNameScreen}
		/>
	</Stack.Group>
);

export default signUpNavigator;
