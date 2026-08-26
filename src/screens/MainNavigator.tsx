//Imports de navegação
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Text } from "react-native";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

// Cria o navegador sem passar nenhuma tipagem complexa de rotas
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

//TODO: onde fica o theme de navigation
export default function MainNavigator() {
	return (
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
				name="Tela 1️⃣"
				component={Screen1}
				options={{
					tabBarIcon: () => <Text style={{ fontSize: 20 }}>1️⃣</Text>,
				}}
			/>
			<Tab.Screen
				name="Tela 2️⃣"
				component={Screen2}
				options={{
					tabBarIcon: () => <Text style={{ fontSize: 20 }}>2️⃣</Text>,
				}}
			/>
		</Tab.Navigator>
	);
}
