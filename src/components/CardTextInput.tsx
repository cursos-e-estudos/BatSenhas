import { StyleSheet, TextInput, View } from "react-native";
import { Colors } from "./Colors";

export default function CardTextInput({
	value,
	onChangeText,
	placeholder,
	secureTextEntry,
}: any) {
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				value={value}
				onChangeText={onChangeText}
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}
				placeholderTextColor={Colors.setima}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.segunda,
		borderRadius: 10,
		padding: 10,
		margin: 10,
	},
	input: {
		color: Colors.sexta,
		fontSize: 16,
		fontWeight: "bold",
	},
});
