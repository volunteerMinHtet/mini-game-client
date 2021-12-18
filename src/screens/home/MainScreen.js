import * as React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { useThemedStyle } from "../../hooks/theme";
import { isShowedPlayerData, finishShowedPlayerData } from "../../utils/player";
import {
	playRewardedAd,
	playInterstitialAd,
	ShowBannerAd,
} from "../../utils/admob"; // Import Admob Format from custom utils
import {
	initiateSocket,
	createRoom,
	disconnectSocket,
} from "../../services/socket"; // socket service
import { setSocket, setRoom } from "../../state/player/playerActions"; // player actions

import {
	UserInfoPopup,
	JoinRoomPopup,
	WelcomePopup,
} from "./components/Popups";
import {
	PrimaryMediumButton,
	SecondaryMediumButton,
} from "../../common/components/buttons";

const MainScreen = ({ navigation }) => {
	const style = useThemedStyle(styles);

	const dispatch = useDispatch();
	const { player } = useSelector((state) => state);

	const [playerInfoPopupVisible, setPlayerInfoPopupVisible] =
		React.useState(false);
	// const [welcomePopupVisible, setWelcomePopupVisible] = React.useState(false);
	const [joinRoomPopupVisible, setJoinRoomPopupVisible] =
		React.useState(false);

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
		initiateSocket(
			{
				player_id: player.player_id,
				player_name: player.player_name,
			},
			(error, data) => {
				if (error) return console.log(error);

				dispatch(setSocket({ socket_id: data.socket_id }));
			}
		);

		return () => {
			disconnectSocket();
			console.log("disconnected", "main");
		};
	}, []);

	function hidePlayerInfoPopup() {
		setPlayerInfoPopupVisible(false);
		finishShowedPlayerData();
	}

	function handleOnPressPlayBtn() {
		// e.preventDefault();

		createRoom((data) => {
			dispatch(
				setRoom({
					room_id: data.room_id,
					sockets: data.sockets,
				})
			);
		});
	}

	return (
		<SafeAreaView style={style.container}>
			<UserInfoPopup
				visible={playerInfoPopupVisible}
				hideModal={() => hidePlayerInfoPopup()}
			/>
			<JoinRoomPopup
				visible={joinRoomPopupVisible}
				hideModal={() => setJoinRoomPopupVisible(false)}
			/>
			{/* <WelcomePopup
				visible={welcomePopupVisible}
				hideModal={() => setWelcomePopupVisible(false)}
			/> */}

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

					<View
						style={{
							flexDirection: "column",
							flexGrow: 1,
							justifyContent: "space-evenly",
						}}
					>
						{player.room.room_id ? (
							<PrimaryMediumButton
								title={`Room ကို ပြန်သွားမယ်`}
								onPress={() =>
									navigation.navigate("Home/Lobby", {
										message: player.room.room_id,
									})
								}
							/>
						) : (
							<PrimaryMediumButton
								title={`Room ဖန်တီးမယ်`}
								onPress={() => handleOnPressPlayBtn()}
							/>
						)}

						{!player.room.room_id ? (
							<PrimaryMediumButton
								title={`Room သို့ ချိတ်ဆက်မယ်`}
								onPress={() => setJoinRoomPopupVisible(true)}
							/>
						) : null}
					</View>
				</View>
			</View>

			<View style={style.footer}>
				<SecondaryMediumButton
					title={`ကြော်ငြာ`}
					onPress={() => playInterstitialAd()}
				/>

				<SecondaryMediumButton title={`ပြင်ဆင်ပါ`} />
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
