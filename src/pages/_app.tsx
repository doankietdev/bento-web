import '@/app/globals.css'
import globalRouter from '@/global-router'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
 
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    globalRouter.setRouter(router)
  }, [router])

  return <Component {...pageProps} />
}
