import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SignIn from '@pages/sign-in'
import SignUp from '@pages/sign-up'
import Home from '@pages/home'
import { Platform } from 'react-native'
import { Stack } from './types'

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          fullScreenGestureEnabled: true,
          presentation: Platform.OS === 'ios' ? undefined : 'transparentModal',
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
