import * as React from "react";
import { Alert, Modal, View, Text, StyleSheet, Pressable } from "react-native";

import { useThemedStyle } from "../../../../hooks/theme";

const UserInfoPopup = ({ visible, hideModal }) => {
	const style = useThemedStyle(styles);

	return (
		<View style={style.centeredView}>
			<Modal
				animationType="slide"
				transparent={true}
				visible={visible}
				onRequestClose={() => {
					hideModal();
				}}
			>
				<View style={style.centeredView}>
					<View style={style.modalView}>
						<Text style={style.modalText}>Hello World!</Text>
						<Pressable
							style={[style.button, style.buttonClose]}
							onPress={() => hideModal()}
						>
							<Text style={style.textStyle}>Ok</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default UserInfoPopup;

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
			marginBottom: 15,
			textAlign: "center",
		},
	});
