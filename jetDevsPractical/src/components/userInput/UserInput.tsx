import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Image, TextInput} from 'react-native';
import colors from '../../themes/colors';
import {UserInputProps} from './UserInput.model';

export const UserInput = (props: UserInputProps) => {
  const {
    isSecureText = false,
    error,
    onChangeText,
    value,
    icon,
    placeholder,
  } = props;
  return (
    <View
      style={[
        styles.inputContainer,
        {borderBottomColor: error ? colors.pink : colors.disabled},
      ]}>
      {/* {label && <Text>{label}</Text>} */}
      <Image source={icon} style={styles.inputIcon} />
      <TextInput
        placeholderTextColor={colors.grey}
        style={styles.textInput}
        secureTextEntry={isSecureText}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />

      {/* <ErrorMessage error={error} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderRadius: 8,
    padding: 8,
    color: colors.black,
    fontSize: 16,
    width: '100%',
  },
  inputContainer: {
    marginBottom: 30,
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  error: {
    color: colors.red,
    fontWeight: '600',
    marginTop: 8,
  },
  inputIcon: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: colors.disabled,
  },
});
