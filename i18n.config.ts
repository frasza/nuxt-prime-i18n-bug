import en from '@/locales/en.json'
import sl from '@/locales/sl.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'sl',
  messages: {
    sl,
    en,
  },
}))
