import Link from "next/link";
import cls from "./women.module.scss";
import Image from "next/image";
import Slider from "../slider/slider";

const Women = ({ categories }) => {
  return (
    <div className={cls.women}>
      <div className={cls.paragraph}>
        <p>Categories you might like</p>
      </div>
      <div className={cls.catalog}>
        <Slider 
        categories={categories}
        Image={Image}
        />
        {/* {categories.map(({ image, name, link }) => {
          return (
            <Link href={link}>
              <div>
                <div className={cls.up}>
                  <Image
                    src={image}
                    alt={`${name} category`}
                    width={150}
                    height={150}
                  />
                </div>
                <div className={cls.down}>
                  <p>{name}</p>
                </div>
              </div>
            </Link>
          );
        })} */}
      </div>
    </div>
  );
};

export default Women;
