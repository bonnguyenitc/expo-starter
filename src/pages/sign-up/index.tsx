import { Button, Text, View } from 'react-native'
import React from 'react'
import { SignUpNavigationProps } from '@routes/types'
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
    color: theme.colors.typography,
  },
}))

function SignUp({ navigation }: SignUpNavigationProps) {
  const { styles } = useStyles(stylesSheet)
  return (
    <Screen>
      <View style={styles.container}>
        <Text>SignIn</Text>
        <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
      </View>
    </Screen>
  )
}

export default SignUp
