import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/core';

export function UserIdentification() {

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const navigation = useNavigation();

  function hundleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function hundleInputFocus() {
    setIsFocused(true);
  }

  function hundleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  function handleStart() {
    navigation.navigate('Confirmation')
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
      <TouchableWithoutFeedback 
        onPress={Keyboard.dismiss}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            
            <View style={styles.header}>
              <Text style={styles.emoji}>
                {isFilled ? '😄' : '😃'}
              </Text>
              <Text style={styles.title}>
                Como devemos{'\n'}
                chamar você?
              </Text>
            </View>

            <TextInput 
              style={[
                styles.input,
                (isFocused || isFilled) && { borderColor: colors.green}
              ]}
              placeholder="Digite seu nome"
              onBlur={hundleInputBlur}
              onFocus={hundleInputFocus}
              onChangeText={hundleInputChange}
            />
            <View style={styles.footer}>
              <Button
                disabled={!isFilled}
                title="Confirmar"
                onPress={handleStart}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'

  },
  content: {
    flex: 1,
    width: '100%'
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
    width: '100%'
  },
  header: {
    alignItems: 'center'
  },
  emoji: {
    fontSize: 44,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20
  },
  footer: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 20
  }
});