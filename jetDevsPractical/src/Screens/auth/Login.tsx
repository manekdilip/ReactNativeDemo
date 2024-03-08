import React, {useState} from 'react';
import {Image, KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import {Button, UserInput} from '../../components';
import styles from './login.styles';
import icons from '../../assets/icons';
import {Text} from 'react-native-paper';
import validation from '../../utils/validations';

const Login = (props: any) => {
  const {navigation} = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [matchCredential, setMatchCredential] = useState('');

  const doLogin = () => {
    if (email && password) {
      if (!validation.validateEmail(email)) {
        setMatchCredential('Invalid email address');
        setEmailError('Invalid email address');
      } else {
        setEmailError('');
        if (!validation.validatePassword(password)) {
          setMatchCredential('Password must be at least 6 characters long');
          setPasswordError('Password must be at least 6 characters long');
        } else {
          setPasswordError('');
          if (
            email.toLowerCase() === 'reactnative@jetdevs.com' &&
            password === 'jetdevs@123'
          ) {
            setMatchCredential('');
            navigation.reset({
              index: 0,
              routes: [{name: 'BottomTab'}],
            });
          } else {
            setMatchCredential('Email or Password is wrong!');
          }
        }
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView>
        <View style={styles.loginContainer}>
          <View style={styles.formContainer}>
            <View style={styles.topCircleContainer}>
              <Image style={styles.logoIcon} source={icons.logo} />
            </View>
            <Text variant="headlineLarge" style={styles.headingText}>
              LOGIN
            </Text>
            <UserInput
              isSecureText={false}
              icon={icons.mail}
              value={email}
              placeholder="Email"
              onChangeText={value => {
                setEmail(value);
              }}
              error={emailError}
            />
            <UserInput
              isSecureText={true}
              icon={icons.lock}
              value={password}
              placeholder="Password"
              onChangeText={value => {
                setPassword(value);
              }}
              error={passwordError}
            />

            <Text style={styles.error}>{matchCredential}</Text>

            <Button
              style={styles.button}
              isValid={email && password}
              onPress={doLogin}
              buttonText={'Login'}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
