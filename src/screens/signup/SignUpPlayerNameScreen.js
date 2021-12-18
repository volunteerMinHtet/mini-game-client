import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux"; // hook for dispatch (trigger) action to redux reducer

import { toggleTheme } from "../../state/theme/themeActions"; // actions from theme actions
import { singUp } from "../../state/player/playerActions"; // actions from player actions

import { useThemedStyle } from "../../hooks/theme"; // custom hook for theme

import { generatePlayerId, generatePlayerName } from "../../utils/player";

import {
	PrimaryMediumButton,
	SecondaryMediumButton,
} from "../../common/components/buttons";

const SignUpPlayerNameScreen = () => {
	const style = useThemedStyle(styles); // add styles to custom theme hook

	const dispatch = useDispatch(); // variable to dispatch actions

	// const { player } = useSelector((state) => state);
	const [playerName, setPlayerName] = React.useState("");

	const canPass = Boolean(playerName);

	// let toast = Toast.show("Request failed to send.", {
	// 	duration: Toast.durations.LONG,
	// });

	function onPressGeneratePlayerName() {
		setPlayerName(generatePlayerName());
	}

	function onPressToggleTheme() {
		dispatch(toggleTheme()); // dispatch action (trigger action to reducer to toggle theme)
	}

	async function onPressCreate() {
		if (canPass) {
			const playerId = generatePlayerId();
			const data = {
				player_id: playerId,
				player_name: playerName,
			};

			dispatch(singUp(data));
		} else {
			console.log("Please select your player name.");
		}

		// navigation.navigate("SignUp/Complete");
	}

	return (
		<SafeAreaView style={style.container}>
			<Text
				style={style.headerText}
			>{`ဟေး!   နေကောင်းရဲ့လား၊ ထမင်းကောစားပြီးပြီလား\n:)`}</Text>

			<Text style={style.subHeaderText}>{`နာမည်လေး ရွေးပါအုံး`}</Text>

			<View style={style.centerBox}>
				<View style={style.flexBox}>
					<View style={style.displayNameBox}>
						<Text style={style.displayNameText}>{playerName}</Text>
					</View>

					<PrimaryMediumButton
						title={`နောက်တစ်ခု`}
						iconName={`refresh`}
						onPress={onPressGeneratePlayerName}
					/>
				</View>
			</View>

			<View style={style.footer}>
				<View style={style.flexBox}>
					<SecondaryMediumButton
						title={`ဖန်တီးပါ`}
						iconName={`arrow-forward`}
						onPress={onPressCreate}
					/>

					<SecondaryMediumButton
						title={`အရောင်ပြောင်းပါ`}
						iconName={`arrow-forward`}
						onPress={onPressToggleTheme}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default SignUpPlayerNameScreen;

const styles = (theme) =>
	StyleSheet.create({
		container: {
			flex: 1,
			flexDirection: "column",
			justifyContent: "center",
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
			// paddingHorizontal: theme.sizes.padding * 10,
			width: theme.sizes.base * 30,
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
