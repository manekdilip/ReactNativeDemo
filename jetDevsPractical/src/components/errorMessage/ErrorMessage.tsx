import React from 'react';
import {StyleSheet, Text} from 'react-native';
import colors from '../../themes/colors';
import {ErrorMessageProps} from './ErrorMessage.model';

export const ErrorMessage = (props: ErrorMessageProps) => {
  const {error} = props;
  if (!error) {
    return null;
  }
  return <Text style={styles.error}>{error}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: colors.red,
    fontWeight: '600',
    marginTop: 8,
  },
});
