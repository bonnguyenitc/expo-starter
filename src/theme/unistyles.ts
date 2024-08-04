// eslint-disable-next-line import/no-extraneous-dependencies
import { UnistylesRegistry } from 'react-native-unistyles'
import { getThemeLocal } from '@utils/storage'
import breakpoints from './breakpoints'
import { darkTheme, lightTheme } from './themes'

// if you defined breakpoints
type AppBreakpoints = typeof breakpoints

// if you defined themes
type AppThemes = {
  light: typeof lightTheme
  dark: typeof darkTheme
}

// override library types
declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
    dark: darkTheme,
    // register other themes with unique names
  })
  .addConfig({
    // you can pass here optional config described below
    adaptiveThemes: false,
    initialTheme: getThemeLocal() as keyof AppThemes,
  })
