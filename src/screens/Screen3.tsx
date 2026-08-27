import * as Clipboard from "expo-clipboard";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CardLogo, CardTextInput, Colors, MyButton } from "../components";

export default function Screen3() {
	const [password, setPassword] = useState("");
	const [aviso, setAviso] = useState("");

	function handleGeneratePassword() {
		setPassword(Math.random().toString(36).slice(-8)); // Gera uma senha aleatória de 8 caracteres
		setAviso("");
	}
	async function handleCopyPassword() {
		setAviso("Senha copiada para área de transferência");

		await Clipboard.setStringAsync(password); // Copia a senha para a área de transferência
		setTimeout(() => {
			setAviso(""); // Limpa o aviso após 2000 milissegundos
		}, 2000);
	}

	return (
		<View style={styles.container}>
			<CardLogo />
			<View style={styles.cardInput}>
				<CardTextInput
					placeholder="Senha para que?"
					value={password}
					onChangeText={setPassword}
				/>

				<MyButton
					title="GERAR"
					icon="refresh"
					onPress={() => handleGeneratePassword()}
				/>
				<MyButton
					title="COPIAR"
					icon="content-copy"
					onPress={() => handleCopyPassword()}
				/>
				{aviso ? <Text style={styles.cardAviso}>{aviso}</Text> : null}
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
	cardAviso: {
		backgroundColor: Colors.setima,
		textAlign: "center",
		padding: 10,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: Colors.sexta,
	},
});
