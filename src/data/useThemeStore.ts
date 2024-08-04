import { getThemeLocal, saveThemeLocal } from '@utils/storage'
import { UnistylesThemes } from 'react-native-unistyles'
import { create } from 'zustand'

type State = {
  theme: keyof UnistylesThemes
}

type Action = {
  setTheme: (theme: keyof UnistylesThemes) => void
}

const useThemeStore = create<State & Action>((set) => ({
  theme: getThemeLocal() as keyof UnistylesThemes,
  setTheme: (theme: keyof UnistylesThemes) => {
    set({ theme })
    saveThemeLocal(theme)
  },
}))

export default useThemeStore
