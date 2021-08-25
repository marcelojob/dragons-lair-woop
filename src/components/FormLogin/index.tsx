import Link from 'next/link'
import styles from './style.module.scss'

export function FormLogin() {
    return (
        <>
            <div className={styles.card}>
                <h4 className={styles.subtitle}>
                    Realizar login no
                </h4>
                <h1 className={styles.title}>
                    Covil de Dragões
                </h1>

                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        <div className={styles.formDiv}>
                            <input 
                                type="text" 
                                className={styles.formInput} 
                                name="user"
                                placeholder=" "
                            />
                            <label htmlFor="user" className={styles.formLabel}>Usuário</label>
                        </div>

                        <div className={styles.formDiv}>
                            <input 
                                type="password" 
                                className={styles.formInput} 
                                name="password"
                                placeholder=" "
                            />
                            <label htmlFor="password" className={styles.formLabel}>Senha</label>
                        </div>

                        { /* <input 
                        type="submit" 
                         value="Entrar"
                         className={styles.submit}
                        />*/ }

                        <Link href="/lista">
                            <a>Entrar</a>
                        </Link>
                    </form>
                </div>
            </div>
        </>
        
    )
}