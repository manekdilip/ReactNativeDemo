import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity, Text} from 'react-native';
import colors from '../../themes/colors';
import {ButtonProps} from './Button.model';

export const Button = (props: ButtonProps) => {
  const {onPress, isValid, buttonText, style} = props;
  const backgroundColor = isValid ? colors.pink : colors.disabled;
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor}, style && style]}
      disabled={!isValid}
      onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 16,
  },
});
