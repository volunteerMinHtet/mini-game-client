import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterScreenContainer from "./screens/RegisterScreen/RegisterScreenContainer";
import LoginScreenContainer from "./screens/LoginScreen/LoginScreenContainer";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Group screenOptions={{ headerShown: false }}>
					<Stack.Screen
						name="Register"
						component={RegisterScreenContainer}
					/>
					<Stack.Screen
						name="Login"
						component={LoginScreenContainer}
					/>
				</Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigator;
