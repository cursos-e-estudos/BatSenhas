import { StyleSheet, Text, View } from "react-native";

function RedBox() {
	return (
		<View
			style={{
				width: 100,
				height: 100,
				backgroundColor: "red",
				borderColor: "pink",
				borderWidth: 5,
			}}
		></View>
	);
}
function BlueBox() {
	return (
		<View
			style={{
				width: 100,
				height: 100,
				backgroundColor: "blue",
				borderColor: "cyan",
				borderWidth: 5,
			}}
		></View>
	);
}
function GreenBox() {
	return (
		<View
			style={{
				width: 100,
				height: 100,
				backgroundColor: "green",
				borderColor: "lightgreen",
				borderWidth: 5,
			}}
		></View>
	);
}

export default function Screen1() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Flex vertical padrão</Text>
			<RedBox />
			<GreenBox />
			<BlueBox />
			<View style={{ alignSelf: "flex-end" }}>
				<GreenBox />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		borderColor: "purple",
		borderWidth: 20,
		alignItems: "flex-start",
		justifyContent: "center",
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
		color: "white",
		textAlign: "center",
	},
});
