import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exercicio02 from './src/components/Exercicio02';
import Exercicio01 from './src/components/Exercicio01';




export default function App() {
  return (

    <View style={styles.container}>
      
    
    <Exercicio02/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

 


});
