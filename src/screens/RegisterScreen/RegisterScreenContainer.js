import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux"; // hook for dispatch (trigger) action to redux reducer

import { toggleTheme } from "../../state/theme/themeActions"; // actions from theme actions
import { useThemedStyle } from "../../hooks/theme"; // custom hook for theme

import {
	PrimarySmallButton,
	SuccessSmallButton,
} from "../../common/components/buttons";

const RegisterScreenContainer = ({ navigation }) => {
	const dispatch = useDispatch(); // variable to dispatch actions

	const style = useThemedStyle(styles); // add styles to custom theme hook

	function onPressToggleTheme() {
		dispatch(toggleTheme()); // dispatch action (trigger action to reducer to toggle theme)
	}

	function onPressLogin() {
		navigation.navigate("Login");
	}

	return (
		<View style={style.container}>
			<Text style={style.text}>Register Screen Container</Text>

			<PrimarySmallButton
				title={"Toggle Theme"}
				onPress={() => onPressToggleTheme()}
			/>

			<SuccessSmallButton title={"Back"} onPress={() => onPressLogin()} />
		</View>
	);
};

export default RegisterScreenContainer;

const styles = (theme) =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.colors.background,
			alignItems: "center",
			justifyContent: "center",
		},
		text: {
			...theme.typography.fonts.largeTitle,
			color: theme.colors.text,
		},
	});
