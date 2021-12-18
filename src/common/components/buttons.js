import * as React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Share } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { useTheme, useThemedStyle } from "../../hooks/theme";

export const PrimaryMediumButton = ({ title, iconName, onPress }) => {
	const style = useThemedStyle(styles);
	const theme = useTheme();

	return (
		<TouchableOpacity
			activeOpacity={0.3}
			style={[
				style.button,
				{
					backgroundColor: theme.colors.primary,
					width: theme.sizes.base * 15,
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

export const SecondaryMediumButton = ({ title, iconName, onPress }) => {
	const style = useThemedStyle(styles);
	const theme = useTheme();

	return (
		<TouchableOpacity
			activeOpacity={0.3}
			style={[
				style.button,
				{
					backgroundColor: theme.colors.success,
					width: theme.sizes.base * 15,
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

export const ErrorMediumButton = ({ title, iconName, onPress, myAlinSelf }) => {
	const style = useThemedStyle(styles);
	const theme = useTheme();

	return (
		<TouchableOpacity
			activeOpacity={0.3}
			style={[
				style.button,
				{
					alignSelf: myAlinSelf,
					backgroundColor: theme.colors.error,
					width: theme.sizes.base * 15,
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

export const PrimarySmallButton = ({
	title,
	iconName,
	onPress,
	myAlinSelf,
}) => {
	const style = useThemedStyle(styles);
	const theme = useTheme();

	return (
		<TouchableOpacity
			activeOpacity={0.3}
			style={[
				style.button,
				{
					alignSelf: myAlinSelf,
					backgroundColor: theme.colors.primary,
					width: theme.sizes.base * 10,
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

export const SecondarySmallButton = ({
	title,
	iconName,
	onPress,
	myAlinSelf,
}) => {
	const style = useThemedStyle(styles);
	const theme = useTheme();

	return (
		<TouchableOpacity
			activeOpacity={0.3}
			style={[
				style.button,
				{
					alignSelf: myAlinSelf,
					backgroundColor: theme.colors.success,
					width: theme.sizes.base * 10,
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

export const ErrorSmallButton = ({ title, iconName, onPress, myAlinSelf }) => {
	const style = useThemedStyle(styles);
	const theme = useTheme();

	return (
		<TouchableOpacity
			activeOpacity={0.3}
			style={[
				style.button,
				{
					alignSelf: myAlinSelf,
					backgroundColor: theme.colors.error,
					width: theme.sizes.base * 10,
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
					size={theme.sizes.base * 2}
					color="black"
				/>
			) : null}
		</TouchableOpacity>
	);
};

export const InviteButton = ({ title, myAlinSelf, message }) => {
	const style = useThemedStyle(styles);
	const theme = useTheme();

	const onShare = async () => {
		try {
			const result = await Share.share({
				message,
			});

			// console.log(result);

			if (result.action === Share.sharedAction) {
				if (result.activityType) {
					// shared with activity type of result.activityType
				} else {
					// shared
				}
			} else if (result.action === Share.dismissedAction) {
				// dismissed
			}
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<TouchableOpacity
			activeOpacity={0.3}
			onPress={onShare}
			style={[
				style.button,
				{
					alignSelf: myAlinSelf,
					backgroundColor: theme.colors.success,
					width: theme.sizes.base * 12,
					borderRadius: theme.sizes.radius * 10,
					paddingHorizontal: theme.sizes.base / 4,
				},
			]}
		>
			<Text style={[style.btnText, { color: theme.colors.white }]}>
				{title}
			</Text>
			<MaterialCommunityIcons
				name="facebook-messenger"
				size={20}
				color={theme.colors.white}
			/>
		</TouchableOpacity>
	);
};

const styles = (theme) =>
	StyleSheet.create({
		button: {
			flexGrow: 0,
			flexShrink: 1,
			flexDirection: "row",
			justifyContent: "space-around",
			alignItems: "center",
			paddingHorizontal: theme.sizes.padding / 2,
			paddingVertical: theme.sizes.padding / 2,
			borderWidth: theme.sizes.border,
			borderColor: theme.colors.text,
			borderRadius: theme.sizes.radius,
		},
		btnText: {
			flexShrink: 1,
			textAlign: "center",
		},
	});
