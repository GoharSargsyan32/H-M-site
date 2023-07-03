import cls from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import {useSelector} from "react-redux";
import {categoriesSelector} from "@/store/reducers/categories/categories.slice";

const menuItemKeys = {
  women: "women",
  men: "men",
  divided: "divided",
  baby: "baby",
  kids: "kids",
  hmHome: "hmHome",
  sport: "sport",
  beauty: "beauty",
  sale: "sale",
  sustainability: "Sustainability",
};

const leftMenu = [
  {
    name: "Customer Sevice",
    link: "/",
  },

  {
    name: "Student Discount",
    link: "/",
  },
  {
    name: "Find a Store",
    link: "/",
  },
];

const Header = () => {
  const [menuVisibility, setMenuVisibility] = useState("hidden");
  const [selectedLink, setSelectedLink] = useState("");
  const categoriesState = useSelector(categoriesSelector)

  const onLinkMouseEnter = (key) => {
    setSelectedLink(key);
    setMenuVisibility("visible");
  };

  const menuItems = useMemo(() => {
    if (selectedLink) {
      return categoriesState.categories.find((item) =>
        item.key === selectedLink
      )?.innerLinks || []
    } 
    return []
  }, [selectedLink]);

  const onMouseLeave = () => {
    setMenuVisibility("hidden");
  };

  return (
    <div className={cls.header}>
      <div className={cls.up}>
        <div className={`${cls.box} ${cls.box1}`}>
          {leftMenu.map(({ name, link }) => {
            return (
              <div>
                <Link href={link}>{name}</Link>
              </div>
            );
          })}
          <Link href={""}>
            <Image src={"/dots.png"} alt="dots" width={50} height={50} />
          </Link>
        </div>
        <div className={`${cls.box} ${cls.box2}`}>
          <Image
            src={"/hm-logo-vector-1.svg"}
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div className={`${cls.box} ${cls.box3}`}>
          <ul>
            <li className={cls.inloggen}>
              <Link href={""}>
                <Image src={"/man.png"} alt="man" width={30} height={30} />
                Inloggen
              </Link>
              <div className={cls.inloggendesk}>
                <div className={cls.top}>
                  <button className={cls.button}>Inloggen</button>
                </div>
                <div className={`${cls.down} ${cls.box}`}>
                  <Link href={""}>My account</Link>
                  <Link href={""}>Membership info</Link>
                  <Link href={""}>Nag geen member?Meld je hier aan!</Link>
                </div>
              </div>
            </li>
            <li>
              <Link href={""}>
                <Image src={"/heart.png"} alt="heart" width={30} height={30} />
                Favourites
              </Link>
            </li>
            <li className={cls.shoppingbag}>
              <Link href={""}>
                <Image
                  src={"/shoppingbag.png"}
                  alt="bag"
                  width={30}
                  height={30}
                />
                Shopping bag (0)
              </Link>
              <div className={cls.shoppingdesk}>
                <div>
                  <p>
                    <strong>Your shopping bag is empty</strong>
                  </p>
                </div>
                <div className={cls.line}></div>
                <div>
                  <p>Order value</p>
                  <p>$0.00</p>
                </div>
                <div className={cls.line}></div>
                <div>
                  <p>
                    <strong>Total</strong>
                  </p>
                  <p>$0.00</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div onMouseLeave={onMouseLeave} className={cls.bottom}>
        <div className={cls.menu}>
          {categoriesState.categories.length > 0 && categoriesState.categories.map(({ link, name, key, innerLinks }) => {
            return (
              <div key={key} className={cls.headerLink}>
                <Link
                  onMouseEnter={() => {
                    onLinkMouseEnter(key);
                  }}
                  href={link}
                >
                  {name}
                </Link>
              </div>
            );
          })}
        </div>
        <div
          style={{ visibility: menuVisibility }}
          className={cls.innerMenu}
        >
          {(menuItems).map(({ name, items }) => {
            return (
              <div>
                <span>{name}</span>
                {items.map(({ name, link }) => {
                  return (
                    <Link onClick={() => setMenuVisibility("hidden")} href={link}>
                      {name}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className={cls.search}>
          <Image src={"/search.png"} alt="search" width={30} height={30} />
          <input type="text" placeholder="Search products" />
        </div>
      </div>
    </div>
  );
};

export default Header;
