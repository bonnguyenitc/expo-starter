import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'
import vi from './vi'
import en from './en'

const resources = {
  en,
  vi,
}

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
