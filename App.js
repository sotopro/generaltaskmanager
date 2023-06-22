import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, StatusBar, TextInput, TouchableWithoutFeedback, View, Platform, Button } from 'react-native';

export default function App() {
  const [borderColor, setBorderColor] = useState('#E2E4F3');
  const [email, setEmail] = useState('');

  const onHandlerFocus = () => {
    setBorderColor('#505CB9')
  }

  const onHandlerBlur = () => {
    setBorderColor('#E2E4F3')
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <TextInput 
              style={[styles.input, {borderColor: borderColor}]} 
              placeholder='Create new task'
              keyboardType='default'
              autoCapitalize='none'
              cursorColor='#505CB9'
              selectionColor='#E2E4F3'
              placeholderTextColor='#999'
              onBlur={onHandlerBlur}
              onFocus={onHandlerFocus}
              onChangeText={text => setEmail(text)}
            />
            <Button 
              disabled={email.length === 0}
              title='Send'
              color='#505CB9' 
              onPress={() => {}} 
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    flex: 0.95,
    borderWidth: 1,
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#212121'
  }
});
