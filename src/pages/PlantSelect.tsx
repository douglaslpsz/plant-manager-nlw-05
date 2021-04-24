import React from 'react';
import { 
  View, 
  Text,
  StyleSheet
} from 'react-native';

import { Header } from '../components/Header';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function PlantSelect() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header/>
        <Text style={styles.title}>
          Em qual ambiente
        </Text>
        <Text style={styles.subtitle}>
          Você quer colocar sua planta?
        </Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: colors.background
  }, 
  header: {
    paddingHorizontal: 30
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading
  },
  

});