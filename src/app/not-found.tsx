import { NotFoundView } from '@/sections/error/view'
import Head from 'next/head'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <NotFoundView />;
    </>
  )
}
