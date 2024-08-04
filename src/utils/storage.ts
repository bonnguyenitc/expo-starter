import { MMKV } from 'react-native-mmkv'
import { UnistylesRuntime } from 'react-native-unistyles'

const mmkv = new MMKV() // Create a new instance of MMKV

export const saveThemeLocal = (theme: string) => {
  mmkv.set('theme', theme)
}

export const getThemeLocal = () => mmkv.getString('theme') || UnistylesRuntime.colorScheme
