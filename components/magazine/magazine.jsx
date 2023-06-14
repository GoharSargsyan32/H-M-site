import cls from "./magazine.module.scss";
import Link from "next/link";
import Image from "next/image";

const Magazine = () => {
  return (
    <div className={cls.magazine}>
      <div className={cls.up}>
        <h1>Magazine</h1>
        <p>A world of inspiration</p>
        <Link href={""}>Read H&M Magazine</Link>
      </div>
      <div className={cls.down}>
        <div>
          <div className={cls.up}>
            <Image src={"/magazine1.avif"} alt="" width={430} height={350} />
          </div>
          <div className={cls.down}>
            <div>
              <p>Inside H&M</p>
              <h1>SELECTED BY NADIA</h1>
            </div>

            <Link href={""}>Read The Story</Link>
          </div>
        </div>
        <div>
          <div className={cls.up}>
            <Image src={"/magazine2.avif"} alt="" width={430} height={350} />
          </div>
          <div className={cls.down}>
            <div>
              <p>Inside H&M</p>
              <h1>Celebrating Pride at H&M</h1>
            </div>

            <Link href={""}>Read The Story</Link>
          </div>
        </div>
        <div>
          <div className={cls.up}>
            <Image src={"/magazine3.avif"} alt="" width={430} height={350} />
          </div>
          <div className={cls.down}>
            <div>
              <p>Inside H&M</p>
              <h1>GCA 2023: Ten game-changing <br></br>innovations to know now</h1>
            </div>
            <Link href={""}>Read The Story</Link>
          </div>
        </div>      
        
      </div>
    </div>
  );
};

export default Magazine;
