import { View } from "react-native";

//TODO: criar um componente Box com dotNotation que abraça RedBox, BlueBox e GreenBox, e que possa ser usado como <Box.Red />, <Box.Blue /> e <Box.Green />
export const Box = {
	Red: RedBox,
	Blue: BlueBox,
	Green: GreenBox,
};
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
