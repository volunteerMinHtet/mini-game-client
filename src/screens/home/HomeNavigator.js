import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./MainScreen";

const Stack = createNativeStackNavigator();

const homeNavigator = (
	// <Stack.Navigator>
	<Stack.Group>
		<Stack.Screen
			name="Main"
			component={MainScreen}
			options={{ headerShown: false }}
		/>
	</Stack.Group>
	// </Stack.Navigator>
);

export default homeNavigator;
