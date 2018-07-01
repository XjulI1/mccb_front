import dev from '@/config/dev'
import prod from '@/config/prod'

export default {
  MIDDLEWARE_URL: (process.env.NODE_ENV === 'production') ? prod.MIDDLEWARE_URL : dev.MIDDLEWARE_URL,
  BACK_URL: (process.env.NODE_ENV === 'production') ? prod.BACK_URL : dev.BACK_URL
}
