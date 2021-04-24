import { getActionFromState } from '@react-navigation/core';
import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import userImg from '../assets/profile.jpg';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Douglas</Text>
      </View>

      <Image 
        style={styles.image}
        source={userImg}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: getStatusBarHeight(),
    paddingVertical: 20,
    //backgroundColor: colors.red
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  }
});