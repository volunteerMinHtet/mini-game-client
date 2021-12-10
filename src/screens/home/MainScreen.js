import * as React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
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
	ShowBannerAd,
} from "../../utils/admobUtils"; // Import Admob Format from custom utils

import UserInfoPopup from "./components/Popups/UserInfoPopup";
import {
	PrimarySmallButton,
	SuccessSmallButton,
} from "../../common/components/buttons";

const MainScreen = ({ navigation }) => {
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
		const socket = io("http://10.0.2.2:5000", {
			query: {
				player_id: player.player_id,
				player_name: player.player_name,
			},
		}); // create socket and send player

		socket.connect();

		return () => {
			socket.disconnect();
		};
	}, []);

	function hideModal() {
		setVisible(!visible);
		finishShowedPlayerData();
	}

	return (
		<SafeAreaView style={style.container}>
			<UserInfoPopup visible={visible} hideModal={hideModal} />

			<Image
				style={style.logoImage}
				source={require("../../../assets/images/dummy-game-logo.png")}
			/>

			<View style={style.centeredView}>
				<View style={{ flexDirection: "column", alignItems: "center" }}>
					<ShowBannerAd />

					<View style={style.cardContainer}>
						<Image
							source={require("../../../assets/images/snakes-and-ladders.png")}
						/>
					</View>
					<PrimarySmallButton title={`ကစားမယ်`} />
				</View>
			</View>

			<View style={style.footer}>
				<SuccessSmallButton
					title={`ကြော်ငြာ`}
					onPress={() => playInterstitialAd()}
				/>

				<SuccessSmallButton title={`ပြင်ဆင်ပါ`} />
			</View>
		</SafeAreaView>
	);
};

export default MainScreen;

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
		logoImage: {
			width: theme.windowWidth,
			height: theme.sizes.base * 10,
			resizeMode: "contain",
		},
		centeredView: {
			flex: 1,
			justifyContent: "space-around",
			alignItems: "center",
			// marginTop: 22,
		},
		cardContainer: {
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			width: theme.sizes.base * 22,
			height: theme.sizes.base * 16,
			borderWidth: theme.sizes.border,
			borderColor: theme.colors.text,
			padding: theme.sizes.padding,
			marginTop: theme.sizes.margin * 2,
			marginBottom: theme.sizes.margin,
		},
		footer: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "flex-start",
			height: theme.sizes.base * 10,
			// paddingVertical: theme.sizes.padding,
		},
	});
