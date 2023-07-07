import {useRouter} from "next/router";
import {useEffect, useMemo, useState} from "react";
import cls from "./[id].module.scss";
import Image from "next/image";
import FavoriteIcon from "@/components/icons/FavoriteIcon/favoriteIcon";

const products = [{
    id: '1',
    name: "Product 1",
    price: '$29.99',
    favorite: true,
    images: ["id1.jfif", "id2.jfif"]
}, {
    id: '2',
    name: "Product 2",
    price: '$49.99',
    favorite: false,
    images: ["id1.jfif", "id2.jfif"]
},
    {
        id: '3',
        name: "Product 3",
        price: '$79.99',
        favorite: true,
        images: ["https://example.com/product3/image1.jpg"]
    },];

const Product = () => {
    const router = useRouter()
    const [id, setId] = useState("")
    useEffect(() => {
        setId(router.query.id)
    }, [router])

    const product = useMemo(() => {
        return products.find(item => item.id === id) || {}
    }, [id])

    console.log(product)


    return (<div className={cls.main}>
            <div className={cls.left}>
                <div className={cls.image_section}>
                    <div className={cls.image_wrapper}>
                        <img src={"/id1.jfif"} alt={"dress"} width="100%"/>
                    </div>
                    <div className={cls.image_wrapper}>
                        <img src={"/id2.webp"} alt={"dress"} width="100%"/>
                    </div>
                </div>

                <div>

                </div>
                <div className={cls.list}>

                </div>


            </div>


            <div className={cls.right}>
                <div className={cls.product_details}>
                    <div className={cls.product_title}>
                        <span>{product.name}</span>
                        <FavoriteIcon isFavorite={product.favorite}/>
                    </div>
                    <div className={cls.product_price}>
                        <span>{product.price}</span>
                    </div>
                </div>
            </div>
        </div>
        // <h1>This is product page {state}</h1>
    )
}

export default Product