import Link from "next/link";
import { useRouter } from "next/router";
import cls from "./[name].module.scss";
import Image from "next/image";
import Product from "@/components/product/product";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {productsSelector} from "@/store/reducers/products/products.slice";
import {categoriesSelector} from "@/store/reducers/categories/categories.slice";
import {favoritesSelector} from "@/store/reducers/favorites/favorites.slice";



const Catalog = ({}) => {
  const favorites = useSelector(favoritesSelector).favorites
  const router = useRouter();
  const [products, setProducts] = useState([])
  const [link, setLink] = useState("")
  const productsState = useSelector(productsSelector)
  const categoriesState = useSelector(categoriesSelector)
  const [selectedCategory, setSelectedCategory] = useState([])
  useEffect(() => {
    const routername = router.query.name ?? []
    if (Object.values(categoriesState.categories).length > 0 && Object.values(routername).length > 0 && Object.keys(productsState.products).length > 0) {
      const category = routername[1].split("_")[0]
      const innerCategory = routername[0]
      const name = routername[1]
      setLink(`${innerCategory}/${name}`)
      setSelectedCategory(categoriesState.categories.find(item => {
        return item.name.toUpperCase() === category.toUpperCase()
      }).innerLinks)
      if (name.split("_")[1] === "all") {
          setProducts(Object.values(productsState.products[category][innerCategory]).flat(Infinity))
      } else {
        setProducts(productsState.products[category][innerCategory][name])
      }
    }
  },[productsState, categoriesState, router.query])

  return (
    <div className={cls.catalog}>
      <div className={cls.up}>Catalog/{router.query.name}</div>
      <div className={cls.down}>
        <div className={cls.left}>
          {selectedCategory.length > 0 && selectedCategory.map(({ name, items }) => {
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
            <Product products={products} link={link} favorites={favorites}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
