import cls from "./product.module.scss";
import Image from "next/image";

const colors = {
  white: {
    value: "#F0EEED",
    title: "White",
  },
  black: {
    value: "#272628",
    title: "Black",
  },
  darkBeige: {
    value: "#93826D",
    title: "Dark Beige",
  },
};

const products = [
  {
    id: 1,
    image: "/1.jfif",
    title: "Ribbed one-shoulder top",
    price: "$12.99",
    newArrival: true,
    colors: [colors.white, colors.black, colors.darkBeige],
  },
  {
    id: 2,
    image: "/2.jfif",
    title: "Oversize Resort Shirt",
    price: "$17.99",
    newArrival: true,
    colors: [colors.white, colors.black, colors.darkBeige],
  },
  {
    id: 3,
    image: "/3.jfif",
    title: "Asymetric-hem Slip Dress",
    price: "$64.99",
    newArrival: true,
    colors: [colors.white, colors.black, colors.darkBeige],
  },
  {
    id: 4,
    image: "/4.jfif",
    title: "Creped Slip Dress",
    price: "$24.99",
    newArrival: true,
    colors: [colors.white, colors.black, colors.darkBeige],
  },
];

const Product = ({}) => {
  return (
    <div className={cls.items}>
      {products.map(({ id, image, title, price, colors, newArrival }) => {
        return (
          <div className={cls.divs} key={id}>
            <div className={cls.up}>
              <Image src={image} alt={title} width={300} height={400} />
            </div>
            <div className={cls.down}>
              <p>{title}</p>
              <div style={{ display: "flex", gap: "2px" }}>
                {colors.map(({ value, title }, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        backgroundColor: value,
                        borderRadius: "50%",
                        width: "8px",
                        height: "8px",
                        cursor:"pointer"
                      }}
                      title={title}
                    />
                  );
                })}
              </div>
              <p>{price}</p>
              {newArrival && <p>New Arrival</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
