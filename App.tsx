import '@theme/unistyles'
import '@i18n/i18n'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import Routes from '@routes/index'
import useThemeStore from '@data/useThemeStore'
import { useInitialTheme } from 'react-native-unistyles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default function App() {
  const { theme } = useThemeStore()
  useInitialTheme(theme)
  return (
    <GestureHandlerRootView style={styles.container}>
      <Routes />
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
    </GestureHandlerRootView>
  )
}
