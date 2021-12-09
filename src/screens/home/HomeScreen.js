import * as React from "react";
import { SafeAreaView, View, Text, Button, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { io } from "socket.io-client"; // socket.io (client) library

import { useThemedStyle } from "../../hooks/theme";
import {
	isShowedPlayerData,
	finishShowedPlayerData,
} from "../../utils/playerUtils";
import {
	playRewardedAd,
	playInterstitialAd,
} from "../../utils/androidAdmobUtils";

import UserInfoPopup from "./components/Popups/UserInfoPopup";

const socket = io("http://10.0.2.2:5000"); // create socket

const HomeScreen = ({ navigation }) => {
	const style = useThemedStyle(styles);

	const { player } = useSelector((state) => state);

	const [visible, setVisible] = React.useState(false);

	React.useEffect(() => {
		let mounted = true;

		if (!isShowedPlayerData()) {
			if (mounted) {
				setVisible(true);
			}
		}

		return () => (mounted = false);
	}, []);

	React.useEffect(() => {
		socket.connect();

		socket.emit("confirm_player", {
			player_id: player.player_id,
			player_name: player.player_name,
		});

		return () => {
			socket.disconnect();
		};
	}, []);

	const hideModal = () => {
		setVisible(!visible);
		finishShowedPlayerData();
	};

	return (
		<SafeAreaView>
			<UserInfoPopup visible={visible} hideModal={hideModal} />
			<View>
				<Text>Home Screen</Text>
			</View>

			<Button title="Rewarded Ad" onPress={() => playRewardedAd()} />
			<Button
				title="Interstitial Ad"
				color="orange"
				onPress={() => playInterstitialAd()}
			/>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = (theme) =>
	StyleSheet.create({
		centeredView: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			marginTop: 22,
		},
	});
