import * as React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { useTheme, useThemedStyle } from "../../hooks/theme";
import {
	disconnectSocket,
	subscribeToRoom,
	subscribeToChat,
	sendMessageToRoom,
} from "../../services/socket";
import { updateRoomSockets } from "../../state/player/playerActions";

import { windowWidth } from "../../theme";
import { MediumRectanglePlayerIconBox } from "../../common/components/box";
import {
	PrimaryMediumButton,
	SecondaryMediumButton,
	ErrorMediumButton,
} from "../../common/components";
import { Room } from "./components/Room";
import { ChatBox } from "./components/Chats/Chat";

const LobbyScreen = ({ navigation }) => {
	const style = useThemedStyle(styles);
	const theme = useTheme();

	const dispatch = useDispatch();

	const { player } = useSelector((state) => state);

	const [chat, setChat] = React.useState([]);

	const handleOnPressExitBtn = () => {
		navigation.goBack();
	};

	const handleOnPressPlayBtn = () => {
		return;
	};

	React.useEffect(() => {
		subscribeToChat((error, data) => {
			if (error) return console.log(error);
			console.log("chat", data);
			setChat((oldChats) => [{ ...data }, ...oldChats]);
		});

		subscribeToRoom((error, data) => {
			if (error) return console.log(error);

			dispatch(updateRoomSockets(data));
			console.log("update socket", data);
		});
	}, []);

	return (
		<SafeAreaView style={style.container}>
			<View style={style.content}>
				<Room
					roomId={player.room.room_id}
					sockets={player.room.sockets}
					exit={handleOnPressExitBtn}
					play={handleOnPressPlayBtn}
				/>
			</View>

			<View style={style.footer}>
				<ChatBox
					roomId={player.room.room_id}
					socketId={player.socket_id}
					chat={chat}
					sendMsg={sendMessageToRoom}
				/>
			</View>
		</SafeAreaView>
	);
};

export default LobbyScreen;

const styles = (theme) =>
	StyleSheet.create({
		container: {
			flex: 1,
			flexDirection: "column",
			justifyContent: "space-between",
			padding: theme.sizes.padding,
		},
		content: {
			// flexGrow: 1,
			// flexDirection: "column",
		},
		footer: {
			height: theme.sizes.base * 25,
		},
	});
