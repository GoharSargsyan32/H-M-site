import cls from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";

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
          <Link href={""}>Women</Link>
          <Link href={""}>Men</Link>
          <Link href={""}>Divided</Link>
          <Link href={""}>Baby</Link>
          <Link href={""}>Kids</Link>
          <Link href={""}>H&M HOME</Link>
          <Link href={""}>Beauty</Link>
          <Link href={""}>Sport</Link>
          <Link href={""}>Sale</Link>
          <Link href={""}>Sustainability</Link>
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
