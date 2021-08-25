import Link from 'next/link'
import { FormEvent, useState } from 'react'
import Swal from 'sweetalert2'
import styles from './style.module.scss'
import { create } from '../../services/Dragon/index'

export function FormRegister() {

    const [name, setName] = useState('');
    const [type, setType] = useState('');


    async function handleCreateNewDragon(event: FormEvent) {
        event.preventDefault();

        await create(name, type);

        setName('');
        setType('');
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Dragão registrado com sucesso!',
            showConfirmButton: false,
            background: '#12110F',
            timer: 3000
          })
    }

    return (
        <>
            <div className={styles.card}>
                <h4 className={styles.subtitle}>
                    Cadastrar novo dragão no
                </h4>
                <h1 className={styles.title}>
                    Covil de Dragões
                </h1>

                <div className={styles.formContainer}>
                    <form 
                        className={styles.form}
                        onSubmit={handleCreateNewDragon}
                    >
                        <div className={styles.formDiv}>
                            <input 
                                required
                                type="text" 
                                className={styles.formInput} 
                                name="name"
                                placeholder=" "
                                value={name}
                                onChange={event => setName(event.target.value)}
                            />
                            <label htmlFor="name" className={styles.formLabel}>Nome</label>
                        </div>

                        <div className={styles.formDiv}>
                            <input 
                                required
                                type="text" 
                                className={styles.formInput} 
                                name="type"
                                placeholder=" "
                                value={type}
                                onChange={event => setType(event.target.value)}
                            />
                            <label htmlFor="type" className={styles.formLabel}>Tipo</label>
                        </div>

                        <div className={styles.container}>
                            <Link href="/lista" prefetch >
                                <a>Ir para lista de dragões</a>
                            </Link>
                            <input 
                                type="submit" 
                                value="Cadastrar"
                                className={styles.submit}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
        
    )
}