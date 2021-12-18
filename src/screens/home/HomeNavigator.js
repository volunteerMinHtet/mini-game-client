import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./MainScreen";
import LobbyScreen from "./LobbyScreen";

import { InviteButton } from "../../common/components/buttons";

const Stack = createNativeStackNavigator();

const homeNavigator = (
	// <Stack.Navigator>
	<Stack.Group>
		<Stack.Screen
			name="Home/Main"
			component={MainScreen}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name="Home/Lobby"
			component={LobbyScreen}
			options={({ navigation, route }) => ({
				headerShown: true,
				title: "Lobby",
				headerBackVisible: false,
				headerRight: () => (
					<InviteButton
						title={`ဖိတ်ခေါ်ပါ`}
						myAlinSelf="center"
						message={route.params.message}
					/>
				),
			})}
		/>
	</Stack.Group>
	// </Stack.Navigator>
);

export default homeNavigator;
