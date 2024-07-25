import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SignIn from '@pages/sign-in'
import SignUp from '@pages/sign-up'
import Home from '@pages/home'
import { Stack } from './types'

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          fullScreenGestureEnabled: true,
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
