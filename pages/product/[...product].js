import {useRouter} from "next/router";
import {useEffect, useMemo, useState,} from "react";
import cls from "./[id].module.scss";
import Image from "next/image";
import FavoriteIcon from "@/components/icons/FavoriteIcon/favoriteIcon";
import {useSelector} from "react-redux";
import {productsSelector} from "@/store/reducers/products/products.slice";
import addToShoppingBag from "@/utils/addToShoppingBag";
import Link from "next/link";

const products = [
    {
        name: "Dress",
        id: "1",
        price: "$49.99",
        favorite: true,
    },
    {
        name: "Dress",
        id: "2",
        price: "$49.99",
        favorite: true,
    },
    {
        name: "Dress",
        id: "3",
        price: "$49.99",
        favorite: true,
    }

]



const Product = () => {
    const router = useRouter()
    const [product, setProduct] = useState({})
    const productsState = useSelector(productsSelector)
    useEffect(() => {
        if (Object.keys(router.query).length > 0 && Object.keys(productsState.products).length > 0) {
            const category = router.query.product[0]
            const name = router.query.product[1]
            const id = router.query.product[2]
            if (name.split("_")[1] === "all") {
                setProduct(Object.values(productsState.products[name.split("_")[0]][category]).flat(Infinity).find(item => item.id === +id))
            } else {
                setProduct(productsState.products[name.split("_")[0]][category][name].find(item => item.id === +id))
            }
        }
    }, [router,productsState])

    const [options, setOptions] = useState({
        color: "",
        size: "",
    })

    const addToShoppingBagHandler = async (e, product) => {
        e.preventDefault()
        await addToShoppingBag(product)
    }



    return Object.keys(product).length > 0 && (
        <div className={cls.main}>
            <div className={cls.left}>
                <div className={cls.image_section}>
                    <div className={cls.image_wrapper}>
                        <img src={product.image} alt={"dress"} width="100%"/>
                    </div>
                    <div className={cls.image_wrapper}>
                        <img src={product.image} alt={"dress"} width="100%"/>
                    </div>
                </div>

                <div>

                </div>
                <div className={cls.list}>
                    <select>
                        <option>Description</option>
                    </select>
                    <select>
                        <option>Materials & Suppliers</option>
                    </select>
                    <select>
                        <option>Care Guide</option>
                    </select>
                </div>

                <div className={cls.image_section}>
                    <div className={cls.image_wrapper}>
                        <img src={product.image} alt={"dress"} width="100%"/>
                    </div>
                    <div className={cls.image_wrapper}>
                        <img src={product.image} alt={"dress"} width="100%"/>
                    </div>
                </div>

            </div>
            <div className={cls.right}>
                <div className={cls.product_details}>
                    <div className={cls.product_title}>
                        <span>{product.title}</span>
                        <FavoriteIcon isFavorite={product.favorite}/>
                    </div>
                    <div className={cls.product_price}>
                        <span>{product.price}</span>
                    </div>
                    <div className={cls.items}>
                        <p>Colors</p>
                        <div className={cls.images}>
                            {
                                product.colors.length > 0 && product.colors.map(item => {
                                    return <div onClick={() => {setOptions({...options, color: item.title})}} className={cls.color} style={{
                                        backgroundColor: item.value,
                                        border: item.title === options.color && "2px solid black"
                                    }}></div>
                                })
                            }
                        </div>
                        <div className={cls.select}>
                            <select onChange={(e) => {
                                setOptions({
                                    ...options,
                                    size: e.target.value
                                })
                            }}>
                                <option disabled={true} selected={true} hidden={true}>Select size</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>
                        {/*<Link href="/shoppingBag">*/}
                            <button className={cls.btn} onClick={(e) => {
                                addToShoppingBagHandler(e, {
                                    ...product,
                                    ...options
                                })
                            }}>Add To Bag</button>
                        {/*</Link>*/}

                        <div className={cls.text}>
                            <div className={cls.paragraphs}>
                                <p>Find in store</p>
                                <p>Members get free online returns</p>
                                <p>Delivery and Payment</p>
                            </div>
                            <div className={cls.stars}>
                                <img src={"/star.svg"} alt={"star"} width="15px"/>
                                <img src={"/star.svg"} alt={"star"} width="15px"/>
                                <img src={"/star.svg"} alt={"star"} width="15px"/>
                                <img src={"/star.svg"} alt={"star"} width="15px"/>
                                <img src={"/star.svg"} alt={"star"} width="15px"/>
                                <p>(36 reviews)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product