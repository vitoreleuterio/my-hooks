import { StatusBar } from 'expo-status-bar';
import { useRef, useReducer } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const actionsTypes = {
  RESET: 'RESET',
  WRITE: 'WRITE'
}

const reducer = (state, action) => {
  switch(action.type) {

    case actionsTypes.RESET:
      state.textInputRef.current.focus();
      state.textInputRef.current.setNativeProps({text: ""})
    
     return state

    case actionsTypes.WRITE:
      state.textInputRef.current.setNativeProps({text:"Vitor"})

      return state;
  }
}

export default function App() {

  // valor inicial 
  const initialState = {textInputRef: useRef<TextInput>(null)}

  // dispatch é a função que vai executa
  const [state, dispatch] = useReducer(reducer, initialState)

  const resetButton = () => dispatch({type: actionsTypes.RESET})


  return (
    <View style={styles.container}>
     <TextInput
     ref={state.textInputRef}
     style={
      {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1, 
        marginBottom:10, 
        paddingHorizontal: 10
      }
     }
     
     />
     <Button title='resetar' onPress={resetButton}/>
     <Button title='escrever' onPress={() => dispatch({type: actionsTypes.WRITE})}/>

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
