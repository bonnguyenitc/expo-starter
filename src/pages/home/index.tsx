import { View, Text, Button } from 'react-native'
import React from 'react'
import { createStyleSheet, UnistylesRuntime, useStyles } from 'react-native-unistyles'
import useThemeStore from '@data/useThemeStore'
import Screen from '@components/common/ui/screen'
import useTranslation from '@hooks/useTranslation'

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

function Home() {
  const { styles } = useStyles(stylesSheet)
  const { setTheme } = useThemeStore()
  const { t } = useTranslation()
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.text}>{t('common:welcome')}</Text>
        <Button
          title={t('common:change_theme', {
            theme: UnistylesRuntime.themeName === 'light' ? 'dark' : 'light',
          })}
          onPress={() => {
            setTheme(UnistylesRuntime.themeName === 'light' ? 'dark' : 'light')
            UnistylesRuntime.setTheme(UnistylesRuntime.themeName === 'light' ? 'dark' : 'light')
          }}
        />
      </View>
    </Screen>
  )
}

export default Home
