import axios from "axios";
import {api} from "@/database/databaseUtils";

const removeFromShoppingBag = async (product) => {
    return await axios.delete(`${api}/shoppingBag/${product.id}`)
}

export default removeFromShoppingBag