import cls from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";

const headerMenu = [
  {
    name: "Women",
    link: "/",
    innerLinks: [
      {
        name: "New Arrivals",
        items: [
          {
            name: "View All",
            link: "/"
          },
          {
            name: "Clothes",
            link: "/"
          },
          {
            name: "Shoes & Accessories",
            link: "/"
          }
        ]
      },
      {
        name: "The essentials",
        items: [
          {
            name: "The Collection",
            link: "/"
          },
          {
            name: "About",
            link: "/"
          },
        ]
      },
    ]
  },
  {
    name: "Men",
    link: "/",
  },
  {
    name: "Divided",
    link: "/"
  },
  {
    name: "Baby",
    link: "/"
  },
  {
    name: "Kids",
    link: "/"
  },
  {
    name: "H&M HOME",
    link: "/"
  },
  {
    name: "Beauty",
    link: "/"
  },
  {
    name: "Sport",
    link: "/"
  },
  {
    name: "Sale",
    link: "/"
  },
  {
    name: "Sustainability",
    link: "/"
  },
]






const Header = () => {
  return (
    <div className={cls.header}>
      <div className={cls.up}>
        <div className={`${cls.box} ${cls.box1}`}>
          <Link href={""}>Customer Service</Link>
          <Link href={""}>Student Discount</Link>
          <Link href={""}>Find a store</Link>
          <Link href={""}>
            <Image src={"/dots.png"} alt="dots" width={50} height={50} />
          </Link>
        </div>
        <div className={`${cls.box} ${cls.box2}`}>
          <Image
            src={"hm-logo-vector-1.svg"}
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div className={`${cls.box} ${cls.box3}`}>
          <ul>
            <li className={cls.inloggen}>
              <Link  href={""}>
                <Image src={"/man.png"} alt="man" width={30} height={30} />
                Inloggen
              </Link>
              <div className={cls.inloggendesk}>
                <div className={cls.top}>
                  <button className={cls.button}>Inloggen</button>
                </div>
                <div className={`${cls.down} ${cls.box}`} >
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
      <div className={cls.bottom}>
        <div className={cls.menu}>
          {
            headerMenu.map(({
                link,
                name,
                innerLinks
            }) => {
              return (
                  <div className={cls.headerLink}>
                    <Link href={link}>{name}</Link>
                    <div className={cls.innerMenu}>{
                      (innerLinks ?? []).map(({
                          name,
                          items
                      }) => {
                        return (
                            <div>
                              <span>{name}</span>
                              {
                                items.map(({
                                  name,
                                  link
                                }) => {
                                  return (
                                      <Link href={link}>{name}</Link>
                                  )
                                })
                              }
                            </div>
                        )
                      })
                    }</div>
                  </div>
              )
            })
          }
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
