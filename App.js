import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button
} from 'react-native';
import React from 'react';

export default function App() {
  
  const [counter, setCounter] = React.useState(0);

  function doit() {
    let sum = Number(counter) + 1;
    setCounter(sum)    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.elso}>Számláló</Text>
      
      <Button title='Számol' 
      onPress={doit}/>
      
      <View>
        <Text style={styles.elso}>
          {counter}
        </Text>
      </View>

      <Button title="Nulla" onPress={ () => setCounter(0)} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  elso: {
    color: '#fff',
    fontSize: 30,
  },
  input: {
    backgroundColor: 'lightblue',
    width: '90%',
    fontSize: 30,
  },
});
