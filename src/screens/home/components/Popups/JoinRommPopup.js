import * as React from "react";
import {
	Alert,
	Modal,
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { setRoom } from "../../../../state/player/playerActions";
import { joinRoom } from "../../../../services/socket";
import { useThemedStyle } from "../../../../hooks/theme";

import {
	PrimarySmallButton,
	ErrorSmallButton,
} from "../../../../common/components";

export const JoinRoomPopup = ({ visible, hideModal }) => {
	const style = useThemedStyle(styles);

	const dispatch = useDispatch();

	const [roomId, setRoomId] = React.useState("");

	function handleOnPressJoinBtn() {
		joinRoom(roomId, (error, data) => {
			if (error) return console.log(error);

			dispatch(setRoom({ room_id: data.room_id, sockets: data.sockets }));
		});
	}

	return (
		<Modal animationType="slide" transparent={true} visible={visible}>
			<View style={style.centeredView}>
				<View style={style.modalView}>
					<Text
						style={style.modalText}
					>{`RoomID ကိုဖြည့်ပေးပါ။\nဥပမာ (RoomID: 1TJRZO)`}</Text>

					<View style={style.textInputContainer}>
						<TextInput
							style={style.textInput}
							maxLength={150}
							multiline={false}
							placeholder="RoomID"
							value={roomId}
							onChangeText={(text) => setRoomId(text)}
						/>
					</View>

					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-evenly",
							width: "100%",
						}}
					>
						<ErrorSmallButton
							title={`မလုပ်တော့ပါ`}
							onPress={() => hideModal()}
						/>

						<PrimarySmallButton
							title={`ဆက်သွားပါ`}
							onPress={() => handleOnPressJoinBtn()}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = (theme) =>
	StyleSheet.create({
		centeredView: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			marginTop: 22,
		},
		modalView: {
			margin: 20,
			backgroundColor: "white",
			borderRadius: 20,
			padding: 35,
			alignItems: "center",
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.25,
			shadowRadius: 4,
			elevation: 5,
		},
		button: {
			borderRadius: 20,
			padding: 10,
			elevation: 2,
		},
		buttonOpen: {
			backgroundColor: "#F194FF",
		},
		buttonClose: {
			backgroundColor: "#2196F3",
		},
		textStyle: {
			color: "white",
			fontWeight: "bold",
			textAlign: "center",
		},
		modalText: {
			...theme.typography.fonts.h5,
			textAlign: "center",
			marginBottom: theme.sizes.margin,
			color: theme.colors.text,
		},
		textInputContainer: {
			flexDirection: "row",
			marginBottom: theme.sizes.margin * 2,
		},
		textInput: {
			flexGrow: 1,
			flexShrink: 1,
			borderWidth: theme.sizes.border,
			borderColor: theme.colors.text,
			borderRadius: theme.sizes.radius,
			marginRight: theme.sizes.margin,
			paddingHorizontal: theme.sizes.padding,
			// marginBottom: theme.sizes.margin,
			// height: theme.sizes.base * 10,
		},
	});
