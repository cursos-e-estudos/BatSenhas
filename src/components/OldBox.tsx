import { View } from "react-native";
import { Colors } from "./Colors";
export const Box = {
	Red: RedBox,
	Blue: BlueBox,
	Green: GreenBox,
	Um: Um,
	Dois: Dois,
	Tres: Tres,
	Quatro: Quatro,
	Cinco: Cinco,
	Seis: Seis,
	Sete: Sete,
	Oito: Oito,
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

function Um() {
	return (
		<View
			style={{
				width: 100,
				height: 100,
				backgroundColor: Colors.primeira,
			}}
		></View>
	);
}
function Dois() {
	return (
		<View
			style={{
				width: 100,
				height: 100,
				backgroundColor: Colors.segunda,
			}}
		></View>
	);
}
function Tres() {
	return (
		<View
			style={{
				width: 100,
				height: 100,
				backgroundColor: Colors.terceira,
			}}
		></View>
	);
}
function Quatro() {
	return (
		<View
			style={{
				width: 100,
				height: 100,
				backgroundColor: Colors.quarta,
			}}
		></View>
	);
}
function Cinco() {
	return (
		<View
			style={{
				width: 100,
				height: 100,
				backgroundColor: Colors.quinta,
			}}
		></View>
	);
}
function Seis() {
	return (
		<View
			style={{
				width: 100,
				height: 100,
				backgroundColor: Colors.sexta,
			}}
		></View>
	);
}
function Sete() {
	return (
		<View
			style={{
				width: 100,
				height: 100,
				backgroundColor: Colors.setima,
			}}
		></View>
	);
}
function Oito() {
	return (
		<View
			style={{
				width: 100,
				height: 100,
				backgroundColor: Colors.oitava,
			}}
		></View>
	);
}
