import { api } from '../api'

export interface Dragon {
    id: number;
    name: string;
    type: string;
    createdAt: string;
}

export const create = async (name, type) => {
    const route = `dragon`;

    const body = {
        name: name,
        type: type,
    }

    try {
        const response = await api.post(route, body);
        return response.data;

    } catch (error) {
        throw (
            error.response ||

            "Ocorreu um erro ao registrar o Dragão, tente novamente."
        );
    }
};

export const read = async () => {
    const route = `dragon`;

    try {
        const response = await api.get(route);

        return response.data;
    } catch (error) {
        throw (
            error.response ||

            "Ocorreu um erro ao buscar as informações dos Dragões."
        );
    }
};

export const update = async (id, name, type) => {

    const route = `dragon/${id}`;

    const body = {
        id: id,
        name: name,
        type: type,
    }

    try {
        const response = await api.put(route, body);
        return response.data;

    } catch (error) {
        throw (
            error.response ||

            "Ocorreu um erro ao buscar as informações dos Dragões."
        );
    }
};






