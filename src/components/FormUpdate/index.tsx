import Link from 'next/link'
import { FormEvent, useState } from 'react'
import Swal from 'sweetalert2'
import { update } from '../../services/Dragon';
import styles from './style.module.scss'

interface dragonProps {
    id: number;
    name: string;
    type: string;
}

export function FormUpdate(props : dragonProps) {

    const [name, setName] = useState(props.name);
    const [type, setType] = useState(props.type);
    const [id, setId] = useState(props.id);

    async function handleUpdateDragon(event: FormEvent) {
        event.preventDefault();

        await update(id, name, type);

        setName(name);
        setType(type);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Dados do dragão alterados com sucesso!',
            showConfirmButton: false,
            background: '#12110F',
            timer: 3000
          })
    }

    return (
        <>
            <div className={styles.card}>
                <img src="../images/dragon.svg" alt="símbolo do dragão" />
                <h4 className={styles.subtitle}>
                    Alterar informações do dragão
                </h4>
                <h1 className={styles.title}>
                    Covil de Dragões
                </h1>

                <div className={styles.formContainer}>
                    <form 
                        className={styles.form}
                        onSubmit={handleUpdateDragon}
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

                        <input 
                            required
                            type="hidden" 
                            name="id"
                            value={props.id} 
                        />

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
                                value="Alterar dados"
                                className={styles.submit}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
        
    )
}