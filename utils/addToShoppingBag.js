import axios from 'axios';
import {api} from "@/database/databaseUtils";

const addToShoppingBag = async (product) => {
    const prod = Object.assign({resid: product.id},product)
    delete prod.id
    return await axios.post(`${api}/shoppingBag`, {
            ...prod,
        },
    )
}

export default addToShoppingBag;