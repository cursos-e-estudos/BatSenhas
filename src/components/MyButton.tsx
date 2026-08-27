import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "./Colors";

export default function MyButton({ onPress, title, icon }: any) {
	return (
		<TouchableOpacity onPress={onPress} style={styles.myButton}>
			<Text style={styles.buttonText}>{title} </Text>
			<Icon name={icon} size={20} color={Colors.terceira} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	myButton: {
		backgroundColor: Colors.quinta,
		borderRadius: 10,
		padding: 10,
		margin: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: Colors.terceira,
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
});
