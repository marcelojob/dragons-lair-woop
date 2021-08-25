import Head from 'next/head'
import Link from 'next/link'
import { ListDragons } from '../components/ListDragons' 
import styles from './list.module.scss'

export default function List() {    

    return (
        <>
            <Head>
                <title>Lista de Dragões | Covil de Dragões</title>
            </Head>
                <main style={{backgroundImage:`url(/images/bg.jpg)`}} className={styles.background}>
                    <h1 className={styles.title}> Covil de Dragões </h1>
                    <div className={styles.containerBtn}>
                        <Link href="/cadastrar" prefetch >
                            <a>
                                Cadastrar novo dragão
                            </a>
                        </Link>
                    </div>
                    <div className={styles.container}>
                        <ListDragons />
                    </div>
                </main>
        </>
    )
}
