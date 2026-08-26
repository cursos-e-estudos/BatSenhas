//Imports de navegação
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// Cria o navegador sem passar nenhuma tipagem complexa de rotas
const Tab = createBottomTabNavigator();

//adicionada navegação com bottom tabs para demonstrar diferentes exercícios de programação de componentes e estilos. A primeira tela exibe três caixas coloridas (vermelha, azul e verde) com bordas, enquanto a segunda tela apresenta um texto de teste de componentes de configuração.
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

function Tela1() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Flex vertical padrão</Text>
			<RedBox />
			<BlueBox />
			<GreenBox />
			<StatusBar style="auto" />
		</View>
	);
}

function Tela2() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Flex horizontal</Text>
			<View style={{ flexDirection: "row" }}>
				<RedBox />
				<BlueBox />
				<GreenBox />
				<StatusBar style="auto" />
			</View>
		</View>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					// Cabeçalho (Header)
					headerStyle: {
						backgroundColor: "black",
						elevation: 0,
						shadowColor: "transparent",
					},
					headerTintColor: "#ffffff",
					headerTitleAlign: "center",

					// Barra de Abas (Tab Bar)
					tabBarStyle: {
						backgroundColor: "black",
						borderTopColor: "black",
						height: 60,
					},
					tabBarActiveTintColor: "#ffffff",
					tabBarInactiveTintColor: "#888888",
					tabBarShowLabel: false,

					tabBarItemStyle: {
						paddingTop: 8,
					},
				}}
			>
				<Tab.Screen
					name="Tela 1"
					component={Tela1}
					options={{
						tabBarIcon: () => <Text style={{ fontSize: 20 }}>1️⃣</Text>,
					}}
				/>
				<Tab.Screen
					name="Tela 2️⃣"
					component={Tela2}
					options={{
						tabBarIcon: () => <Text style={{ fontSize: 20 }}>2️⃣</Text>,
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		borderColor: "purple",
		borderWidth: 20,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
		color: "white",
		textAlign: "center",
	},
});
