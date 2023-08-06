import axios from 'axios';
import {api} from "@/database/databaseUtils";

const addToShoppingBag = async (product) => {
    return await axios.post(`${api}/shoppingBag`, {
            ...product
        },
    )
}

export default addToShoppingBag;