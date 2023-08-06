import {useDispatch, useSelector} from "react-redux";
import fetchFavorites from "@/store/reducers/favorites/favorites.api";
import {useEffect} from "react";
import {favoritesActions, favoritesSelector} from "@/store/reducers/favorites/favorites.slice";
import {removeFromFavoritesHandler} from "@/components/product/product";
import removeFromFavorites from "@/utils/removeFromFavorites";

const Favorites = () => {
    const favoritesState = useSelector(favoritesSelector)
    const dispatch = useDispatch()
    const removeFromFavoritesHandler = async (e, product) => {
        e.preventDefault()
        try {
            dispatch(favoritesActions.removeFavorite(product))
            await removeFromFavorites(product);
        } catch (error) {
            console.error(error)
        }
    }

    return <div style={{display: 'flex', gap: 16}}>
        {favoritesState.loading ? <>Loading...</> : (
            favoritesState.favorites.map(item => {
                return <div key={item.id}>
                    <img src={item.image} width={300}/>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <button onClick={(e) => {
                        removeFromFavoritesHandler(e, {id: item.id})
                    }}>delete
                    </button>
                </div>
            })

        )}

    </div>
}

export default Favorites;