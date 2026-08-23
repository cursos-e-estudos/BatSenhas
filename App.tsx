import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function RedBox()
{
  return <View style={{width: 100, height: 100, backgroundColor: 'red'}}></View>
}
function BlueBox()
{
  return <View style={{width: 100, height: 100, backgroundColor: 'blue'}}></View>
}

export default function App() {
  return (
    <View style={styles.container}>
      <RedBox/>
      <BlueBox />
      <Text>Fala Português Alien FDP</Text>
      <BlueBox />
      <RedBox/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
