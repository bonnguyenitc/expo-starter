import { useTranslation as useTranslationLib } from 'react-i18next'

const useTranslation = () => {
  const { t, i18n } = useTranslationLib()
  return { i18n, t }
}

export default useTranslation
