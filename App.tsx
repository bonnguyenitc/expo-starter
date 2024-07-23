import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import Routes from '@routes/index'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Routes />
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  )
}
