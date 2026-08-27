import { StyleSheet, Text, View } from "react-native";
import { Box, CardLogo, CardTextInput, Colors } from "../components";
export default function Screen1() {
	return (
		<View style={styles.container}>
			<CardLogo />
			<View style={styles.cardInput}>
				<CardTextInput placeholder="Digite algo..." />
				<CardTextInput placeholder="Digite algo..." />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.segunda,
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	cardInput: {
		width: "80%",
		height: 100,
	},
});
