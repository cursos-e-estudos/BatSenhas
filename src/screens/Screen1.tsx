import { StyleSheet, Text, View } from "react-native";
import CardLogo from "../components/CardLogo";
import { Colors } from "../components/Colors";
export default function Screen1() {
	return (
		<View style={styles.container}>
			<CardLogo />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.segunda,
		alignItems: "center",
		justifyContent: "center",
	},
});
