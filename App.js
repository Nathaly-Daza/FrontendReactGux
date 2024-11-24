import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const icon = require('./assets/LogoGux.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={icon} style={{width:100, height:100}}/>
      <Text>Inicio de Sesión</Text>
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
