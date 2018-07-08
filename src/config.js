import dev from '@/config/dev'
import prod from '@/config/prod'

export default {
  API_URL: (process.env.NODE_ENV === 'production') ? prod.API_URL : dev.API_URL,
  BACK_URL: (process.env.NODE_ENV === 'production') ? prod.BACK_URL : dev.BACK_URL
}
