import cls from "./women.module.scss";
import Image from "next/image";

const Women = () => {
  return (
    <div className={cls.women}>
      <div className={cls.paragraph}>
        <p>Categories you might like</p>
      </div>
      <div className={cls.catalog}>
        <div>
          <div className={cls.up}>
            <Image src={"/blouse.avif"} alt="blouse" width={150} height={150} />
          </div>
          <div className={cls.down}>
            <p>Women Tops</p>
          </div>
        </div>
        <div>
          <div className={cls.up}>
            <Image
              src={"/trousers.avif"}
              alt="blouse"
              width={150}
              height={150}
            />
          </div>
          <div className={cls.down}>
            <p>Women Pants</p>
          </div>
        </div>
        <div>
          <div className={cls.up}>
            <Image src={"/dress.avif"} alt="blouse" width={150} height={150} />
          </div>
          <div className={cls.down}>
            <p>Women Dresses</p>
          </div>
        </div>
        <div>
          <div className={cls.up}>
            <Image src={"/shirt.avif"} alt="blouse" width={150} height={150} />
          </div>
          <div className={cls.down}>
            <p>Women Shirts&Blouses</p>
          </div>
        </div>
        <div>
          <div className={cls.up}>
            <Image src={"/bag.avif"} alt="blouse" width={150} height={150} />
          </div>
          <div className={cls.down}>
            <p>Women Accsessories</p>
          </div>
        </div>
        <div>
          <div className={cls.up}>
            <Image src={"/dress2.avif"} alt="blouse" width={150} height={150} />
          </div>
          <div className={cls.down}>
            <p>Women Premium Selection</p>
          </div>
        </div>
        <div>
          <div className={cls.up}>
            <Image src={"/shoes.avif"} alt="blouse" width={150} height={150} />
          </div>
          <div className={cls.down}>
            <p>Women Shoes</p>
          </div>
        </div>
        <div>
          <div className={cls.up}>
            <Image src={"/jacket.avif"} alt="blouse" width={150} height={150} />
          </div>
          <div className={cls.down}>
            <p>Women Jackets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Women;
