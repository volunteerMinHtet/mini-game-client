import * as React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

import { useThemedStyle } from "../../../hooks/theme";

import { PrimaryBadge } from "../../../common/components";
import {
	PrimaryMediumButton,
	ErrorMediumButton,
} from "../../../common/components";

const Item = ({ name }) => {
	const style = useThemedStyle(styles);

	return (
		<View style={style.playerBoxContainer}>
			<Text>{name}</Text>
		</View>
	);
};

export const Room = ({ roomId, sockets, exit, play }) => {
	const renderItem = ({ item }) => <Item name={item.player_name} />;

	const style = useThemedStyle(styles);

	return (
		<View>
			<View style={style.headerContainer}>
				<Text style={style.headerText}>Room</Text>
				<PrimaryBadge title={`${roomId}`} />
			</View>

			<View style={style.contentContainer}>
				<FlatList
					data={sockets}
					keyExtractor={(item) => item.socket_id}
					renderItem={renderItem}
					horizontal={true}
				/>
			</View>

			<View style={style.footerContainer}>
				<ErrorMediumButton title={`ထွက်ပါ`} onPress={() => exit()} />
				<PrimaryMediumButton title={`စတင်ပါ`} onPress={() => play()} />
			</View>
		</View>
	);
};

const styles = (theme) =>
	StyleSheet.create({
		headerContainer: {
			flexDirection: "row",
			justifyContent: "center",
			marginBottom: theme.sizes.margin * 2,
		},
		headerText: {
			...theme.typography.fonts.h3,
			marginRight: theme.sizes.margin / 2,
		},
		contentContainer: {
			// flexDirection: "row",
		},
		playerBoxContainer: {
			justifyContent: "center",
			alignItems: "center",
			width: theme.sizes.base * 10,
			height: theme.sizes.base * 10,
			borderWidth: theme.sizes.border,
			borderColor: theme.colors.text,
		},
		footerContainer: {
			flexDirection: "row",
			justifyContent: "space-evenly",
			marginTop: theme.sizes.margin * 2,
		},
	});
