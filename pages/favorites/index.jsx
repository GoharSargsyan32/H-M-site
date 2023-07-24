import {useDispatch, useSelector} from "react-redux";
import fetchFavorites from "@/store/reducers/favorites/favorites.api";
import {useEffect} from "react";
import {favoritesSelector} from "@/store/reducers/favorites/favorites.slice";

const Favorites = () => {
    const dispatch = useDispatch();
    const favoritesState = useSelector(favoritesSelector)

    useEffect(() => {
        dispatch(fetchFavorites())
    }, [])

    return <div style={{ display: 'flex', gap: 16 }}>
        {favoritesState.loading ? <>Loading...</> : (
            favoritesState.favorites.map(item => {
                return <div key={item.id}>
                    <img src={item.image} width={300}/>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                </div>
            })

        )}

    </div>
}

export default Favorites;