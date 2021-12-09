import * as React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { useThemedStyle } from "../../hooks/theme"; // custom hook for theme

import {
	PrimarySmallButton,
	SuccessSmallButton,
} from "../../common/components/buttons";

const SignUpCompleteScreen = () => {
	const style = useThemedStyle(styles);

	const { player } = useSelector((state) => state);

	return (
		<SafeAreaView style={style.container}>
			<Text
				style={style.headerText}
			>{`ကြိုဆိုပါတယ် Player ကြီးရေ\nစပြီး Play နိုင်ပါပြီ ဗျာ။`}</Text>

			<View style={style.centerBox}>
				<Text
					style={style.subHeaderText}
				>{`Player ID - ${player.player_id}`}</Text>
				<Text
					style={style.subHeaderText}
				>{`Player Name - ${player.player_name}`}</Text>
			</View>
		</SafeAreaView>
	);
};

export default SignUpCompleteScreen;

const styles = (theme) =>
	StyleSheet.create({
		container: {
			flex: 1,
			flexDirection: "column",
			justifyContent: "flex-start",
			paddingHorizontal: theme.sizes.padding,
			paddingVertical: theme.sizes.padding * 2,
			backgroundColor: theme.colors.background,
		},
		headerText: {
			...theme.typography.fonts.h2,
			color: theme.colors.text,
			textAlign: "center",
		},
		subHeaderText: {
			...theme.typography.fonts.body2,
			color: theme.colors.text,
			textAlign: "center",
			paddingTop: theme.sizes.padding * 2,
		},
		centerBox: {
			flex: 1,
			flexDirection: "column",
			justifyContent: "center",
		},
		flexBox: {
			flexDirection: "row",
			justifyContent: "center",
		},
		displayNameBox: {
			justifyContent: "center",
			alignItems: "center",
			paddingHorizontal: theme.sizes.padding * 10,
			paddingVertical: theme.sizes.base / 2,
			marginRight: theme.sizes.margin,
			borderWidth: theme.sizes.border,
			borderColor: theme.colors.text,
			borderRadius: theme.sizes.radius,
		},
		displayNameText: {
			color: theme.colors.text,
		},
		footer: {
			flex: 1,
			flexDirection: "column",
			justifyContent: "center",
		},
	});
