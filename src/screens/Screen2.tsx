import { Text, View } from "react-native";
import { Box } from "../components/OldBox";
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
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-around",
					backgroundColor: "black",
					padding: 10,
				}}
			>
				<Box.Um />
				<Box.Dois />
				<Box.Tres />
				<Box.Quatro />
				<Box.Cinco />
				<Box.Seis />
				<Box.Sete />
				<Box.Oito />
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-around",
					backgroundColor: "white",
					padding: 10,
				}}
			>
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
