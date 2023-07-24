import cls from "./product.module.scss";
import Image from "next/image";
import {useEffect, useState} from "react";
import Link from "next/link";
import FavoriteIcon from "@/components/icons/FavoriteIcon/favoriteIcon";
import addToFavorites from "@/utils/addToFavorites";

const colors = {
    white: {
        value: "#F0EEED",
        title: "White",
    },
    black: {
        value: "#272628",
        title: "Black",
    },
    darkBeige: {
        value: "#93826D",
        title: "Dark Beige",
    },
};

// const products = [
//   {
//     id: 1,
//     image: "/1.jfif",
//     title: "Ribbed one-shoulder top",
//     price: "$12.99",
//     newArrival: true,
//     colors: [colors.white, colors.black, colors.darkBeige],
//   },
//   {
//     id: 2,
//     image: "/2.jfif",
//     title: "Oversize Resort Shirt",
//     price: "$17.99",
//     newArrival: true,
//     colors: [colors.white, colors.black, colors.darkBeige],
//   },
//   {
//     id: 3,
//     image: "/3.jfif",
//     title: "Asymetric-hem Slip Dress",
//     price: "$64.99",
//     newArrival: true,
//     colors: [colors.white, colors.black, colors.darkBeige],
//   },
//   {
//     id: 4,
//     image: "/4.jfif",
//     title: "Creped Slip Dress",
//     price: "$24.99",
//     newArrival: true,
//     colors: [colors.white, colors.black, colors.darkBeige],
//   },
// ];

const Product = ({products, link}) => {
        const addToFavoritesHandler = async (e, product) => {
            e.preventDefault();

            try {
                await addToFavorites(product);

            } catch (error) {
                console.error(error)
            }
        }

        return (
            <div className={cls.items}>
                {products.length > 0 ? (
                    products.map(({id, image, title, price, colors, newArrival, isFavorite}) => {


                        return (
                            <Link href={`/product/${link}/${id}`}>
                                <div className={cls.divs} key={id}>
                                    <div className={cls.up}>
                                        <Image src={image} alt={title} width={300} height={400}/>
                                        <div className={cls.favorites_wrapper}>
                                        <span onClick={(e) => addToFavoritesHandler(e, {
                                            id,
                                            image,
                                            title,
                                            price,
                                        })}>
                                            <FavoriteIcon isFavorite={isFavorite}/>
                                        </span>
                                        </div>
                                    </div>
                                    <div className={cls.down}>
                                        <p>{title}</p>
                                        <div style={{display: "flex", gap: "2px"}}>
                                            {colors.map(({value, title}, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        style={{
                                                            backgroundColor: value,
                                                            borderRadius: "50%",
                                                            width: "8px",
                                                            height: "8px",
                                                            cursor: "pointer",
                                                        }}
                                                        title={title}
                                                    />
                                                );
                                            })}
                                        </div>
                                        <p>{price}</p>
                                        {newArrival && <p>New Arrival</p>}
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                ) : (
                    <h2>Loading...</h2>
                )}
            </div>
        );
    }
;

export default Product;
