import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CardLogo, CardTextInput, Colors } from "../components";

export default function Screen3() {
	return (
		<View style={styles.container}>
			<CardLogo />
			<View style={styles.cardInput}>
				<CardTextInput placeholder="Senha para que?" />

				<TouchableOpacity
					style={styles.myButton}
					onPress={() => Alert.alert("Pressed")}
				>
					<Text>Gerar</Text>
				</TouchableOpacity>
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
		backgroundColor: Colors.quarta,
		marginBottom: 100,
		alignItems: "center",
		width: "80%",
		padding: 10,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: Colors.sexta,
	},
	myButton: {
		backgroundColor: Colors.quinta,
		borderRadius: 10,
		padding: 10,
		margin: 10,
	},
});
