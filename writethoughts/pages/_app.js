import '../styles/globals.css'
import { MediumProvider } from '../context/WriteCon'

function MyApp({ Component, pageProps }) {
  return (
    <MediumProvider>
      <Component {...pageProps} />
    </MediumProvider>
  )
}

export default MyApp
