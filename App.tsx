import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Imports de navegação
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Cria o navegador sem passar nenhuma tipagem complexa de rotas
const Tab = createBottomTabNavigator();

//adicionada navegação com bottom tabs para demonstrar diferentes exercícios de programação de componentes e estilos. A primeira tela exibe três caixas coloridas (vermelha, azul e verde) com bordas, enquanto a segunda tela apresenta um texto de teste de componentes de configuração.
function RedBox()
{
  return <View style={{width: 100, height: 100, backgroundColor: 'red', borderColor: 'pink', borderWidth: 5}}></View>
}
function BlueBox()
{
  return <View style={{width: 100, height: 100, backgroundColor: 'blue', borderColor: 'cyan', borderWidth: 5}}></View>
}
function GreenBox()
{
  return <View style={{width: 100, height: 100, backgroundColor: 'green', borderColor: 'lightgreen', borderWidth: 5}}></View>
}

function Tela1() {
  return (
    <View style={styles.container}>
      <RedBox/>
      <BlueBox />
      <GreenBox />
      <StatusBar style="auto" />
    </View>
  );
}

function Tela2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Teste de Componentes de Configuração ⚙️</Text>
    </View>
  );
}




export default function App() {
  return (
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tela 1" component={Tela1} options={{ tabBarIcon: () => <Text style={styles.icon}>🏠</Text> }} />
        <Tab.Screen name="Tela 2" component={Tela2} options={{ tabBarIcon: () => <Text style={styles.icon}>⚙️</Text> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    borderColor: 'purple',
    borderWidth: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center' },
  icon: { fontSize: 20 }, // Controla o tamanho do emoji na barra inferior

});
