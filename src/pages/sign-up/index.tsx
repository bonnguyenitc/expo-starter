import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SignUpNavigationProps } from '../../routes';

const SignUp = ({ navigation }: SignUpNavigationProps) => {
  return (
    <View style={styles.container}>
      <Text>SignIn</Text>
      <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
    </View>
  );
};

export default SignUp;

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
