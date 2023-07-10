import {useRouter} from "next/router";
import {useEffect, useMemo, useState,} from "react";
import cls from "./[id].module.scss";
import Image from "next/image";
import FavoriteIcon from "@/components/icons/FavoriteIcon/favoriteIcon";
import {useSelector} from "react-redux";
import {productsSelector} from "@/store/reducers/products/products.slice";

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
    const [id, setId] = useState("")
    useEffect(() => {
        setId(router.query.id)
    }, [router])

    const product = useMemo(() => {
        return products.find(item => item.id === id) || {}
    }, [id])

    console.log(product)

    // const products = useSelector(productsSelector).products
    //
    // console.log(products,"hhh")


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
                        <img src={"/id3.webp"} alt={"dress"} width="100%"/>
                    </div>
                    <div className={cls.image_wrapper}>
                        <img src={"/id4.webp"} alt={"dress"} width="100%"/>
                    </div>
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
                    <div className={cls.items}>
                        <p>Colors</p>
                        <div className={cls.images}>
                            <img src={"/id1.jfif"} alt={"dress"} width="70px"/>
                            <img src={"/id2.webp"} alt={"dress"} width="70px"/>
                        </div>
                        <div className={cls.select}>
                            <select>
                                <option>Select size</option>
                                <option value="1">S</option>
                                <option value="2">M</option>
                                <option value="3">L</option>
                                <option value="4">XL</option>
                            </select>
                        </div>
                        <button className={cls.btn}>Add To Bag</button>
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