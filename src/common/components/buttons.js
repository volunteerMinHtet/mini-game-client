import * as React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useTheme, useThemedStyle } from "../../hooks/theme";

export const PrimarySmallButton = ({ title, iconName, onPress }) => {
	const style = useThemedStyle(styles);
	const theme = useTheme();

	return (
		<TouchableOpacity
			activeOpacity={0.3}
			style={[
				style.button,
				{
					backgroundColor: theme.colors.primary,
				},
			]}
			onPress={onPress}
		>
			<Text style={[style.btnText, { color: theme.colors.black }]}>
				{title}
			</Text>

			{iconName ? (
				<MaterialIcons
					name={iconName}
					size={theme.sizes.base * 2.5}
					color="black"
				/>
			) : null}
		</TouchableOpacity>
	);
};

export const SuccessSmallButton = ({ title, iconName, onPress }) => {
	const style = useThemedStyle(styles);
	const theme = useTheme();

	return (
		<TouchableOpacity
			activeOpacity={0.3}
			style={[style.button, { backgroundColor: theme.colors.success }]}
			onPress={onPress}
		>
			<Text style={[style.btnText, { color: theme.colors.black }]}>
				{title}
			</Text>

			{iconName ? (
				<MaterialIcons
					name={iconName}
					size={theme.sizes.base * 2.5}
					color="black"
				/>
			) : null}
		</TouchableOpacity>
	);
};

const styles = (theme) =>
	StyleSheet.create({
		button: {
			flexDirection: "row",
			justifyContent: "space-around",
			alignItems: "center",
			width: theme.sizes.base * 15,
			paddingHorizontal: theme.sizes.base,
			paddingVertical: theme.sizes.base / 2,
			borderWidth: theme.sizes.border,
			borderColor: theme.colors.text,
			borderRadius: theme.sizes.radius,
		},
		btnText: {
			flexShrink: 1,
			textAlign: "center",
		},
	});
