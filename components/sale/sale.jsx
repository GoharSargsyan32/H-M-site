import cls from "./sale.module.scss";
import Link from "next/link";

const Sale = () => {
  return (
    <div className={cls.sale}>
      <div className={cls.links}>
        <Link href={""}>Free Shipping over 40$</Link>
        <Link href={""}>Become a H&M Member</Link>
        <Link href={""}>Gift Card</Link>
      </div>
      <div className={cls.square}>
        <div className={cls.red}>
          <p>Summer Sale</p>
          <h1>Up to 60 % off</h1>
          <span>100s of new styles added from $4.99</span>
          <div className={cls.buttons}>
            <button>Woman</button>
            <button>Men</button>
            <button>Baby</button>
            <button>Kids</button>
            <button>H&M Home</button>
            <button>Sport</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
