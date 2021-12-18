import * as React from "react";
import {
	KeyboardAvoidingView,
	FlatList,
	View,
	Text,
	TextInput,
	StyleSheet,
	Platform,
} from "react-native";

import { useThemedStyle } from "../../../../hooks/theme";

import {
	PrimaryMediumButton,
	SecondaryMediumButton,
	SecondarySmallButton,
} from "../../../../common/components/buttons";

// const data = [
// 	{
// 		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
// 		title: "First Item First Item First Item First Item First Item First Item First Item First Item First Item First Item",
// 	},
// 	{
// 		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
// 		title: "Second Item",
// 	},
// 	{
// 		id: "58694a0f-3da1-471f-bd96-145571e29d72",
// 		title: "Third Item",
// 	},
// 	{
// 		id: "bd7acbeaf-c1b1-46c2-aed5-3ad53abb28ba",
// 		title: "First Item",
// 	},
// 	{
// 		id: "3ac68afdc-c605-48d3-a4f8-fbd91aa97f63",
// 		title: "Second Item",
// 	},
// 	{
// 		id: "58694a0fd-3da1-471f-bd96-145571e29d72",
// 		title: "Third Item",
// 	},
// 	{
// 		id: "58694ad0fd-3da1-471f-bd96-145571e29d72",
// 		title: "Third Item",
// 	},
// 	{
// 		id: "58694as0fd-3da1-471f-bd96-145571e29d72",
// 		title: "Third Item",
// 	},
// 	{
// 		id: "58694aa0fd-3da1-471f-bd96-145571e29d72",
// 		title: "Third Item",
// 	},
// 	{
// 		id: "5869df4a0fd-3da1-471f-bd96-145571e29d72",
// 		title: "Third Item",
// 	},
// 	{
// 		id: "586df94a0fd-3da1-471f-bd96-145571e29d72",
// 		title: "Third Item",
// 	},
// 	{
// 		id: "5869as4a0fd-3da1-471f-bd96-145571e29d72",
// 		title: "Third Item",
// 	},
// ];

const ChatBoxHeader = () => {
	const style = useThemedStyle(styles);

	return (
		<View style={style.chatBoxHeader}>
			<Text style={style.chatBoxHeaderText}>Message</Text>
		</View>
	);
};

const ChatBoxFooter = ({ roomId, sendMsg }) => {
	const style = useThemedStyle(styles);

	const [message, setMessage] = React.useState("");

	return (
		<View style={style.chatBoxFooter}>
			<TextInput
				style={style.chatBoxInput}
				maxLength={150}
				multiline={true}
				value={message}
				onChangeText={(text) => setMessage(text)}
				returnKeyType="send"
			/>
			<SecondarySmallButton
				title={`ပို့ပါ`}
				myAlinSelf={"flex-end"}
				onPress={() => {
					sendMsg(roomId, message);
					setMessage("");
				}}
			/>
		</View>
	);
};

const ItemSeparator = () => {
	const style = useThemedStyle(styles);

	return <View style={style.separator}></View>;
};

const LeftItem = ({ message }) => {
	const style = useThemedStyle(styles);

	return (
		<View style={style.leftListItem}>
			<Text style={style.leftListItemText}>{message}</Text>
		</View>
	);
};

const RightItem = ({ message }) => {
	const style = useThemedStyle(styles);

	return (
		<View style={style.rightListItem}>
			<Text style={style.rightListItemText}>{message}</Text>
		</View>
	);
};

export const ChatBox = ({ socketId, roomId, chat, sendMsg }) => {
	const style = useThemedStyle(styles);

	const renderItem = (item) => {
		return item.socket_id === socketId ? (
			<RightItem message={item.message} />
		) : (
			<LeftItem message={item.message} />
		);
	};

	return (
		<View style={style.container}>
			<ChatBoxHeader />
			<FlatList
				data={chat}
				keyExtractor={(item, index) => index}
				renderItem={({ item }) => renderItem(item)}
				contentContainerStyle={style.chatBoxContentContainer}
				ItemSeparatorComponent={ItemSeparator}
				inverted={true}
			/>
			<ChatBoxFooter roomId={roomId} sendMsg={sendMsg} />
		</View>
	);
};

const styles = (theme) =>
	StyleSheet.create({
		container: {
			flex: 1,
		},
		chatBoxHeader: {
			backgroundColor: theme.colors.primary,
			padding: theme.sizes.padding / 2,
			marginBottom: theme.sizes.margin / 2,
		},
		chatBoxHeaderText: {
			color: theme.colors.text,
		},
		chatBoxContentContainer: {
			paddingHorizontal: theme.sizes.padding / 2,
		},
		leftListItem: {
			flexDirection: "row",
			justifyContent: "flex-start",
		},
		leftListItemText: {
			color: theme.colors.white,
			backgroundColor: theme.colors.secondary_text,
			textAlign: "left",
			maxWidth: "70%",
			paddingHorizontal: theme.sizes.padding / 2,
			paddingVertical: theme.sizes.padding / 4,
		},
		rightListItem: {
			flexDirection: "row",
			justifyContent: "flex-end",
		},
		rightListItemText: {
			color: theme.colors.white,
			backgroundColor: theme.colors.success,
			textAlign: "right",
			maxWidth: "70%",
			paddingHorizontal: theme.sizes.padding / 2,
			paddingVertical: theme.sizes.padding / 4,
		},
		chatBoxFooter: {
			// flexGrow: 1,
			flexDirection: "row",
			justifyContent: "space-between",
			marginTop: theme.sizes.margin / 2,
		},
		chatBoxInput: {
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
		separator: {
			height: theme.sizes.base / 2,
		},
	});
