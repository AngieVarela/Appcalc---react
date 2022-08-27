import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Header from './components/Header';

export default function App() {

  //Hooks para esdos con useState
  const[valor1, setValor1] = useState('');
  const[valor2, setValor2] = useState('');
  const[resultado, setResultado] = useState('');

  let mostrar = () => {
    alert(`El valor 1 es ${valor1}`)
  }

  let sumar = ()=>{
    setResultado(parseFloat(valor1)+ parseFloat(valor2));
  }
  
  let limpiar= () => {
    setValor1('');
  }

  return (
    <View style={[styles.container,styles.alignView]}>
      <Header titulo="Banner"></Header>
      <View style={[styles.viewChid, styles.alignView,{marginTop:10}]}>
        <Text>Valor 1</Text>
        <TextInput
        placeholder='Ingrese valor 1'
        style={{borderWidth:1, borderStyle:'solid', padding:5, textAlign: 'center'}}     
        onChangeText={valor1 => setValor1(valor1)} 
        value={valor1}
        />  

        <Text>Valor 2</Text>
        <TextInput
        placeholder='Ingrese valor 2'
        style={{borderWidth:1, borderStyle:'solid', padding:5, textAlign: 'center'}}     
        onChangeText={valor2 => setValor2(valor2)} 
        value={valor2}
        />
        <Text>Resultado</Text>
        <Text> {resultado}</Text>

        <Text>{'\n'}</Text>
        <Button
        title='SUMAR'
        onPress={sumar}
        />
        <Text>{'\n'}</Text>
        <Button
        title='LIMPIAR'
        onPress={limpiar}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  viewChid: {
    flex:5, 
    backgroundColor: 'yellowgreen', 
    width: '80%', 
  },

  alignView:{
    justifyContent: 'center',
    alignItems: 'center'
  }
});
