import { StyleSheet, Text, View } from "react-native";
import { Box } from "../components/OldBox";
export default function Screen2() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Cores</Text>
			<View style={styles.boxContainer}>
				<Box.Um />
				<Box.Dois />
				<Box.Tres />
				<Box.Quatro />
				<Box.Cinco />
				<Box.Seis />
				<Box.Sete />
				<Box.Oito />
			</View>
			<View style={[styles.boxContainer, { backgroundColor: "white" }]}>
				<Box.Um />
				<Box.Dois />
				<Box.Tres />
				<Box.Quatro />
				<Box.Cinco />
				<Box.Seis />
				<Box.Sete />
				<Box.Oito />
			</View>
		</View>
	);
}

//TODO: criar um styleSheet e mover os estilos inline para ele, para melhorar a organização do código e facilitar a manutenção.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
		color: "white",
		textAlign: "center",
	},
	boxContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: "black",
		padding: 10,
		flexWrap: "wrap",
	},
});
