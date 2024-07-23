import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import SignIn from '../pages/sign-in';
import SignUp from '../pages/sign-up';

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type SignInNavigationProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;
export type SignUpNavigationProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
