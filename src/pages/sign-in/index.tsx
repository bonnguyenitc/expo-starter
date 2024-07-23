import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SignInNavigationProps } from '../../routes';

const SignIn = ({ navigation }: SignInNavigationProps) => {
  return (
    <View style={styles.container}>
      <Text>SignIn</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
