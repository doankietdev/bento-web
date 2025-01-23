import { ServerErrorView } from '@/sections/error/view';
import Head from 'next/head';

export default function Custom500() {
  return (
    <>
      <Head>
        <title>Server Error</title>
      </Head>
      <ServerErrorView />;
    </>
  )
}
