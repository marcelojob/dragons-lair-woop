import Link from 'next/link'
import { useEffect, useState } from 'react';
import { read, Dragon } from '../../services/Dragon/index'
import styles from './style.module.scss'
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { api } from '../../services/api';
import Swal from 'sweetalert2';

export function ListDragons() {

    const [dragons, setDragons] = useState<Dragon[]>([]);

    useEffect(() => {
        search();
    }, []);

    const search = async() =>  {
        const response = await read();
        setDragons(response)
    }

    const deleteDragon = async (id) => {
        const response = await api.delete(`dragon/${id}`)
            Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Dragão deletado com sucesso!',
            showConfirmButton: false,
            background: '#12110F',
            timer: 3000
        }).then(function() {
            window.location.href = '/lista';
        })
        
    }

    return (
        <> 
            {dragons.sort(function (a, b) { return ('' + a.name).localeCompare(b.name);}).map ( dragon => (
                <div key={dragon.id} className={styles.container}>
                    <div className={styles.containerIcons}>
                        <Link href={`editar/${dragon.id}`} prefetch >
                            <a className={styles.icon}>
                                <FaRegEdit />
                            </a>
                        </Link>
                        <Link  href={`dragao/${dragon.id}`} prefetch >
                            <a className={styles.icon}>
                                <FaEye />
                            </a>
                        </Link>  
                        <a onClick={() => deleteDragon(dragon.id)} className={styles.icon}>
                            <FaTrashAlt />
                        </a>
                    </div> 
                    <div key={dragon.id} className={styles.containerItem}>
                        <img src="images/dragon.svg" alt="símbolo do dragão" />
                        <h3>Nome <br/>
                        <span>{dragon.name}</span></h3>
                    </div> 
                </div>              
            ))}
        </>
    )  
}