import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { api } from '../../services/api'
import styles from './style.module.scss'
import { FormUpdate } from '../../components/FormUpdate'

export default function SelectDragon({ dragon }) {    

    return (
        <>
            <Head>
                <title> Editar {dragon.name} | Covil de Dragões</title>
            </Head>
                <main style={{backgroundImage:`url(/images/bg-login.jpg)`}} className={styles.backgroundImage}>
                    <h1 className={styles.title}> Covil de Dragões </h1>
                        <div className={styles.card}>    
                            <FormUpdate id={dragon.id} name={dragon.name} type={dragon.type} />
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
