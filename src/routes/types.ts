import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'

type RootStackParamList = {
  SignIn: undefined
  SignUp: undefined
  Home: undefined
}

export const Stack = createNativeStackNavigator<RootStackParamList>()

export type SignInNavigationProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>
export type SignUpNavigationProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>
export type HomeNavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>
