import * as React from "react";
import {
	TouchableOpacity,
	View,
	Text,
	Image,
	ImageBackground,
	StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useThemedStyle } from "../../hooks/theme";

const playerIconBackgroundImage = require("../../../assets/images/character-icon-frame.png");

export const MediumRectanglePlayerIconBox = ({ children }) => {
	const style = useThemedStyle(styles);

	return (
		<View style={style.playerIconContainer}>
			<ImageBackground
				style={style.backgroundImage}
				source={playerIconBackgroundImage}
				resizeMode="cover"
			>
				{children}
			</ImageBackground>
		</View>
	);
};

const styles = (theme) =>
	StyleSheet.create({
		playerIconContainer: {
			width: theme.sizes.box,
			height: theme.sizes.box,
		},
		backgroundImage: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			padding: theme.sizes.base / 8,
		},
	});
