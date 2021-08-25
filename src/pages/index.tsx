import Head from 'next/head'
import { FormLogin } from '../components/FormLogin'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Login | Covil de Dragões</title>
      </Head>

      <main style={{backgroundImage:`url(/images/bg-login.jpg)`}} className={styles.background}>
        <FormLogin />
      </main>
      
    </>
  )
}
