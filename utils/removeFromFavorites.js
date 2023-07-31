import axios from "axios";
import {api} from "@/database/databaseUtils";

const removeFromFavorites = async (product) => {
    return await axios.delete(`${api}/favorites/${product.id}`)
}

export default removeFromFavorites