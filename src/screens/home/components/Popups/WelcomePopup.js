import * as React from "react";
import {
	Alert,
	Modal,
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableWithoutFeedback,
} from "react-native";

import { useThemedStyle } from "../../../../hooks/theme";

export const WelcomePopup = ({ visible, hideModal, playerName }) => {
	const style = useThemedStyle(styles);

	return (
		<Modal animationType="slide" transparent={true} visible={visible}>
			<View style={style.centeredView}>
				<View style={style.modalView}>
					<Text
						style={style.modalText}
					>{`ကြိုဆိုပါတယ် ${playerName} ရေ`}</Text>

					<TouchableWithoutFeedback onPress={() => hideModal()}>
						<Text style={style.closeBtn}>x</Text>
					</TouchableWithoutFeedback>

					{/* <View style={{ flexDirection: "row" }}>
						<TextInput
							style={style.textInput}
							maxLength={150}
							multiline={true}
							placeholder="RoomID"
							value={roomId}
							onChangeText={(text) => setRoomId(text)}
						/>
						<Pressable
							style={[style.button, style.buttonClose]}
							onPress={() => hideModal()}
						>
							<Text style={style.textStyle}>Ok</Text>
						</Pressable>
					</View> */}
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
			// marginTop: 22,
		},
		modalView: {
			margin: theme.sizes.margin * 2,
			backgroundColor: theme.colors.primary,
			borderRadius: 10,
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
		modalText: {
			marginBottom: 15,
			textAlign: "center",
		},
		closeBtn: {
			position: "absolute",
			top: 0,
			right: 10,
		},
	});
