import { Button, Text, View } from 'react-native'
import React from 'react'
import { SignInNavigationProps } from '@routes/types'
import { createStyleSheet, useStyles } from 'react-native-unistyles'
import Screen from '@components/common/ui/screen'

const stylesSheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  text: {
    fontSize: 24,
  },
}))

function SignIn({ navigation }: SignInNavigationProps) {
  const { styles } = useStyles(stylesSheet)
  return (
    <Screen>
      <View style={styles.container}>
        <Text>SignIn {process.env.EXPO_PUBLIC_API_URL}</Text>
        <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </Screen>
  )
}

export default SignIn
