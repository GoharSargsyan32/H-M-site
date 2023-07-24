import axios from 'axios';
import {api} from "@/database/databaseUtils";

const addToFavorites = async (product) => {
    return await axios.post(`${api}/favorites`, {
            ...product
        },
    )
}

export default addToFavorites;