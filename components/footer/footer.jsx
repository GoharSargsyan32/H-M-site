import cls from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";

const innerLinks = [
  {
    name: "Shop",
    items: [
      {
        name: "Women",
        link: "/",
      },
      {
        name: "Divided",
        link: "/",
      },
      {
        name: "Men",
        link: "/",
      },
      {
        name: "Baby",
        link: "/",
      },
      {
        name: "Kids",
        link: "/",
      },
      {
        name: "H&M HOME",
        link: "/",
      },
      {
        name: "Beauty",
        link: "/",
      },
      {
        name: "Student Discount",
        link: "/",
      },
      {
        name: "Sport",
        link: "/",
      },
      {
        name: "Gift Card",
        link: "/",
      },
    ],
  },

  {
    name: "Corporate info",
    items: [
      {
        name: "Career at H&M",
        link: "/",
      },
      {
        name: "About H&M group",
        link: "/",
      },
      {
        name: "Sustainability H&M group",
        link: "/",
      },
      {
        name: "Press",
        link: "/",
      },
      {
        name: "Investor relation",
        link: "/",
      },
      {
        name: "Corporate Governance",
        link: "/",
      },
    ],
  },

  {
    name: "Help",
    items: [
      {
        name: "Customer service",
        link: "/",
      },
      {
        name: "My account",
        link: "/",
      },
      {
        name: "Find a store",
        link: "/",
      },
      {
        name: "Legal & Privacy",
        link: "/",
      },
      {
        name: "Contact",
        link: "/",
      },
      {
        name: "Gift card terma & condition",
        link: "/",
      },
      {
        name: "CA supply Chains Act",
        link: "/",
      },
      {
        name: "California, Colorado and Verginia Privacy Right",
        link: "/",
      },
      {
        name: "Do not sell or share My Personal Data",
        link: "/",
      },
      {
        name: "Our Commitment to Accesibility",
        link: "/",
      },
      {
        name: "Report a scam",
        link: "/",
      },
      {
        name: "Cookie Notice",
        link: "/",
      },
      {
        name: "Cookie Settings",
        link: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className={cls.footer}>
      <div className={cls.top}>
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
        <div>
          <h3>Become a member</h3>
          <p>Join now and get 10% off your next <br /> purchase!</p>
          <Link href={""}>READ MORE</Link>
        </div>
      </div>

      <div className={cls.bottom}>
        <div className={cls.up}>
          <Image src={"/facebook.png"} alt="facebook" width={40} height={40} />
          <Image
            src={"/twitter-squared.png"}
            alt="twitter"
            width={40}
            height={40}
          />
          <Image
            src={"/instagram-new.png"}
            alt="instagram"
            width={40}
            height={40}
          />
          <Image src={"/youtube.png"} alt="youtube" width={40} height={40} />
          <Image
            src={"/pinterest.png"}
            alt="pinterest"
            width={40}
            height={40}
          />
        </div>
        <div className={cls.down}>
          <p>
            The content of this site is copyright-protected and is the property
            of H&M Hennes & Mauritz AB. H&M is <br /> committed to
            accessibility. That commitment means H&M embraces WCAG guidelines
            and supports assistive <br />
            technologies such as screen readers. If you are using a screen
            reader, magnifier, or other assistive technologies and <br /> are
            experiencing difficulties using this website, please call our
            TOLL-FREE support line (855-466-7467) for <br /> assistance. H&M
          </p>
          <div>
            <Image
              src={"/blacklogo.webp"}
              alt="youtube"
              width={60}
              height={60}
            />
            <Link href={""}>United States | $ </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
