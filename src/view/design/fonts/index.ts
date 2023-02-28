import { Next } from '~/src/libs/packages'

export const roboto = Next.fonts_google.Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})
