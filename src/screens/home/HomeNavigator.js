import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();

const homeNavigator = (
	// <Stack.Navigator>
	<Stack.Group>
		<Stack.Screen name="Home" component={HomeScreen} />
	</Stack.Group>
	// </Stack.Navigator>
);

export default homeNavigator;
