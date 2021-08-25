import Head from 'next/head'
import { FormRegister } from '../components/FormRegister'
import styles from './register.module.scss'

export default function Register() {
  return (
    <>
      <Head>
        <title>Cadastrar novo Dragão | Covil de Dragões</title>
      </Head>

      <main style={{backgroundImage:`url(/images/bg-sign.jpg)`}} className={styles.backgroundImage}>
          <FormRegister />
      </main>
      
    </>
  )
}
