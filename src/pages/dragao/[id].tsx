import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { api } from '../../services/api'
import styles from './style.module.scss'

export default function ViewDragon( { dragon } ) {    

    return (
        <>
            <Head>
                <title> {dragon.name} | Covil de Dragões</title>
            </Head>
                <main style={{backgroundImage:`url(/images/bg.jpg)`}} className={styles.backgroundImage}>
                    <h1 className={styles.title}> Covil de Dragões </h1>
                        <div className={styles.container}>
                            <div className={styles.content}>    
                                <Link href="/lista" prefetch>
                                    <a className={styles.link} >
                                        Ir para lista de Dragões
                                    </a>
                                </Link>  
                                <h4>Criado em 
                                    <span>
                                        {new Intl.DateTimeFormat('pt-BR').format (
                                            new Date(dragon.createdAt)
                                        )}
                                    </span>
                                </h4>   
                            </div>  
                            <div className={styles.content}>    
                                <div key={dragon.id} className={styles.containerItem}>
                                    <img src="../images/dragon.svg" alt="símbolo do dragão" />
                                    <h3>Nome</h3>
                                    <h1>{dragon.name}</h1>
                                    <h3>Tipo</h3>
                                    <h2>{dragon.type}</h2>
                                </div>  
                            </div>
                        </div>
                </main>
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { id } = params;

    try {
    const response = await api.get(`dragon/${id}`);
      return {
        props: {
          dragon: response.data,
        },
      };
    } catch (error) {
    }
};
