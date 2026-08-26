import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/screens/MainNavigator";

export default function App() {
	return (
		<NavigationContainer>
			<MainNavigator />
		</NavigationContainer>
	);
}
