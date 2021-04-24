import React from 'react';
import { 
  TouchableOpacity, 
  StyleSheet, 
  Text,
  TouchableOpacityProps
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
  title: string,
  disabled?: boolean
}

export function Button({ title, disabled = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity 
      style={ disabled ? styles.disabled : styles.containers}
      disabled={disabled}
      activeOpacity={0.8}
      {...rest}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  containers: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: colors.green_light,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading
  },
  
});