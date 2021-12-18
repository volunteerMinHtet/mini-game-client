import * as React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Share } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { useTheme, useThemedStyle } from "../../hooks/theme";

export const PrimaryBadge = ({ title, iconName, onPress, myAlinSelf }) => {
	const style = useThemedStyle(styles);
	const theme = useTheme();

	return (
		<TouchableOpacity
			activeOpacity={0.3}
			style={[
				style.badge,
				{
					alignSelf: myAlinSelf,
					backgroundColor: theme.colors.primary,
					// width: theme.sizes.base * 10,
				},
			]}
			onPress={onPress}
		>
			<Text style={[style.badgeText, { color: theme.colors.black }]}>
				{title}
			</Text>

			{iconName ? (
				<MaterialIcons
					name={iconName}
					size={theme.sizes.base * 2.5}
					color="black"
				/>
			) : null}
		</TouchableOpacity>
	);
};

const styles = (theme) =>
	StyleSheet.create({
		badge: {
			flexGrow: 0,
			flexShrink: 1,
			flexDirection: "row",
			justifyContent: "space-around",
			alignItems: "center",
			paddingHorizontal: theme.sizes.base,
			paddingVertical: theme.sizes.base / 2,
			borderWidth: theme.sizes.border,
			borderColor: theme.colors.text,
			borderRadius: theme.sizes.radius * 4,
		},
		badgeText: {
			flexShrink: 1,
			textAlign: "center",
		},
	});
