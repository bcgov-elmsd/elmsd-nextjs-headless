import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import Header from '../components/Header'

export default function App({ Component, pageProps:{ session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Header/>
      <div className='pt-16'>
        <Component {...pageProps}/>
      </div>
      
    </SessionProvider>
)}
