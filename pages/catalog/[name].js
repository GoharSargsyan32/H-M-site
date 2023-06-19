import Link from "next/link";
import { useRouter } from "next/router";
import cls from "./[name].module.scss";
import Image from "next/image";
import Product from "@/components/product/product";
import {useEffect, useState} from "react";

const innerLinks = [
  {
    name: "New Arrivals",
    items: [
      {
        name: "View All",
        link: "http://localhost:3000/catalog/women",
      },
      {
        name: "Clothes",
        link: "/",
      },
      {
        name: "Shoes & Accessories",
        link: "/",
      },
      {
        name: "Beauty",
        link: "/",
      },
      {
        name: "Underwear&Nightwear",
        link: "/",
      },
    ],
  },
  {
    name: "Trending Now",
    items: [
      {
        name: "The Occasion Edit",
        link: "/",
      },
      {
        name: "Beachwear Destination",
        link: "/",
      },
      {
        name: "Linen layers",
        link: "/",
      },
      {
        name: "H&M Edition",
        link: "/",
      },
      {
        name: "The Crochet Shop",
        link: "/",
      },
      {
        name: "Tik Tok Made Me Do It",
        link: "/",
      },
      {
        name: "H&M Willamsburg: The Galary",
        link: "/",
      },
    ],
  },

  {
    name: "Shop by Occasion",
    items: [
      {
        name: "Wedding",
        link: "/",
      },
      {
        name: "Party Wear",
        link: "/",
      },
      {
        name: "Office Wear",
        link: "/",
      },
    ],
  },

  {
    name: "Offers",
    items: [
      {
        name: "Student Discount",
        link: "/",
      },
      {
        name: "Sale up to 60% off",
        link: "/",
      },
    ],
  },

  {
    name: "Shop by Products",
    items: [
      {
        name: "View All",
        link: "/",
      },
      {
        name: "Plus Sizes",
        link: "/",
      },
      {
        name: "Dresses",
        link: "/",
      },
      {
        name: "Tops",
        link: "/",
      },
      {
        name: "Shirts & Blouses",
        link: "/",
      },
      {
        name: "Pants",
        link: "/",
      },
      {
        name: "Blazers & Vests",
        link: "/",
      },
      {
        name: "Jeans",
        link: "/",
      },
      {
        name: "Jumpsuits, Rompers & Overalls",
        link: "/",
      },
      {
        name: "Skirts",
        link: "/",
      },
      {
        name: "Shoes",
        link: "/",
      },
      {
        name: "Accesories",
        link: "/",
      },
      {
        name: "Swimwear & Beachwear",
        link: "/",
      },
      {
        name: "Shorts",
        link: "/",
      },
      {
        name: "Basics",
        link: "/",
      },
      {
        name: "Cardigans & Sweaters",
        link: "/",
      },
      {
        name: "Jackets & Coats",
        link: "/",
      },
      {
        name: "Hoodies & Sweatshirts",
        link: "/",
      },
      {
        name: "Lingerie",
        link: "/",
      },
      {
        name: "Loungewear",
        link: "/",
      },
      {
        name: "Sleepwear",
        link: "/",
      },
      {
        name: "Socks & Tights",
        link: "/",
      },
      {
        name: "Sportswear",
        link: "/",
      },
      {
        name: "Maternity Wear",
        link: "/",
      },
      {
        name: "Premium Selection",
        link: "/",
      },
      {
        name: "Beauty",
        link: "/",
      },
      {
        name: "Care Products",
        link: "/",
      },
    ],
  },

  {
    name: "Second Hand",
    items: [
      {
        name: "H&M x thredUP",
        link: "/",
      },
    ],
  },
  {
    name: "Gifting",
    items: [
      {
        name: "Gift Card",
        link: "/",
      },
    ],
  },
  {
    name: "Sustainability",
    items: [
      {
        name: "H&M Take Care",
        link: "/",
      },
      {
        name: "Learn More",
        link: "/",
      },
    ],
  },
  {
    name: "Magazine",
    items: [
      {
        name: "Magazine",
        link: "/",
      },
    ],
  },
];

const Catalog = ({}) => {
  const router = useRouter();
  const [products, setProducts] = useState([])
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:4200/products")
      const data = await response.json()
      setProducts(data.woman.newArrivals[router.query.name] ?? [])
    })()
  },[router])
  return (
    <div className={cls.catalog}>
      <div className={cls.up}>Catalog/{router.query.name}</div>
      <div className={cls.down}>
        <div className={cls.left}>
          {(innerLinks ?? []).map(({ name, items }) => {
            return (
              <div>
                <span>{name}</span>
                {items.map(({ name, link }) => {
                  return <Link href={link}>{name}</Link>;
                })}
              </div>
            );
          })}
        </div>
        <div className={cls.right}>
          <div className={cls.sale}>
            <p>20% off $60 + free shipping</p>
          </div>
          <div className={cls.items}>
            <h1>View All</h1>
            <Product products={products}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
