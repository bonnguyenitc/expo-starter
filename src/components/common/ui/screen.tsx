import React from 'react'
import { View, ViewStyle } from 'react-native'
import { createStyleSheet, useStyles } from 'react-native-unistyles'

type SafeType = 'top' | 'bottom' | 'none' | 'both'

const stylesSheet = createStyleSheet((theme, rt) => ({
  // eslint-disable-next-line consistent-return
  container: (safeType: SafeType) => {
    // eslint-disable-next-line default-case
    switch (safeType) {
      case 'top':
        return {
          flex: 1,
          paddingTop: rt.insets.top,
        }
      case 'bottom':
        return {
          flex: 1,
          paddingBottom: rt.insets.bottom,
        }
      case 'none':
        return {
          flex: 1,
        }
      case 'both':
        return {
          flex: 1,
          paddingTop: rt.insets.top,
          paddingBottom: rt.insets.bottom,
        }
    }
  },
  bgDefault: {
    backgroundColor: theme.colors.background,
  },
}))

type Props = {
  children: React.ReactNode
  safeType?: SafeType | undefined
  style?: ViewStyle
}

function Screen({ children, safeType = 'none', style = {} }: Props) {
  const { styles } = useStyles(stylesSheet)
  return <View style={[styles.container(safeType), styles.bgDefault, style]}>{children}</View>
}

export default Screen
