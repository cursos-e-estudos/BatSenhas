import { Text, View } from "react-native";

export default function Screen2() {
	return (
		<View style={{ flex: 1, backgroundColor: "#000" }}>
			<Text
				style={{
					fontSize: 18,
					fontWeight: "bold",
					color: "white",
					textAlign: "center",
				}}
			>
				Flex horizontal
			</Text>
		</View>
	);
}
