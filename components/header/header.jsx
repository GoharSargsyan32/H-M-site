import cls from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";

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

const headerMenu = [
  {
    name: "Women",
    key: menuItemKeys.women,
    link: "/",
    innerLinks: [
      {
        name: "New Arrivals",
        items: [
          {
            name: "View All",
            link: "/catalog/women",
          },
          {
            name: "Clothes",
            link: "/catalog/newArrivals/women_clothes",
          },
          {
            name: "Shoes & Accessories",
            link: "/catalog/newArrivals/women_shoesAccessories",
          },
          {
            name: "Beauty",
            link: "/catalog/newArrivals/women_beauty",
          },
          {
            name: "Underwear&Nightwear",
            link: "/",
          },
        ],
      },
      {
        name: "Trending Now",
        items: [
          {
            name: "The Occasion Edit",
            link: "/",
          },
          {
            name: "Beachwear Destination",
            link: "/",
          },
          {
            name: "Linen layers",
            link: "/",
          },
          {
            name: "H&M Edition",
            link: "/",
          },
          {
            name: "The Crochet Shop",
            link: "/",
          },
          {
            name: "Tik Tok Made Me Do It",
            link: "/",
          },
          {
            name: "H&M Willamsburg: The Galary",
            link: "/",
          },
        ],
      },

      {
        name: "Shop by Occasion",
        items: [
          {
            name: "Wedding",
            link: "/",
          },
          {
            name: "Party Wear",
            link: "/",
          },
          {
            name: "Office Wear",
            link: "/",
          },
        ],
      },

      {
        name: "Offers",
        items: [
          {
            name: "Student Discount",
            link: "/",
          },
          {
            name: "Sale up to 60% off",
            link: "/",
          },
        ],
      },

      {
        name: "Shop by Products",
        items: [
          {
            name: "View All",
            link: "/",
          },
          {
            name: "Plus Sizes",
            link: "/",
          },
          {
            name: "Dresses",
            link: "/",
          },
          {
            name: "Tops",
            link: "/",
          },
          {
            name: "Shirts & Blouses",
            link: "/",
          },
          {
            name: "Pants",
            link: "/",
          },
          {
            name: "Blazers & Vests",
            link: "/",
          },
          {
            name: "Jeans",
            link: "/",
          },
          {
            name: "Jumpsuits, Rompers & Overalls",
            link: "/",
          },
          {
            name: "Skirts",
            link: "/",
          },
          {
            name: "Shoes",
            link: "/",
          },
          {
            name: "Accesories",
            link: "/",
          },
          {
            name: "Swimwear & Beachwear",
            link: "/",
          },
          {
            name: "Shorts",
            link: "/",
          },
          {
            name: "Basics",
            link: "/",
          },
          {
            name: "Cardigans & Sweaters",
            link: "/",
          },
          {
            name: "Jackets & Coats",
            link: "/",
          },
          {
            name: "Hoodies & Sweatshirts",
            link: "/",
          },
          {
            name: "Lingerie",
            link: "/",
          },
          {
            name: "Loungewear",
            link: "/",
          },
          {
            name: "Sleepwear",
            link: "/",
          },
          {
            name: "Socks & Tights",
            link: "/",
          },
          {
            name: "Sportswear",
            link: "/",
          },
          {
            name: "Maternity Wear",
            link: "/",
          },
          {
            name: "Premium Selection",
            link: "/",
          },
          {
            name: "Beauty",
            link: "/",
          },
          {
            name: "Care Products",
            link: "/",
          },
        ],
      },

      {
        name: "Second Hand",
        items: [
          {
            name: "H&M x thredUP",
            link: "/",
          },
        ],
      },
      {
        name: "Gifting",
        items: [
          {
            name: "Gift Card",
            link: "/",
          },
        ],
      },
      {
        name: "Sustainability",
        items: [
          {
            name: "H&M Take Care",
            link: "/",
          },
          {
            name: "Learn More",
            link: "/",
          },
        ],
      },
      {
        name: "Magazine",
        items: [
          {
            name: "Magazine",
            link: "/",
          },
        ],
      },
    ],
  },

  {
    name: "Men",
    key: menuItemKeys.men,
    link: "/",
    innerLinks: [
      {
        name: "New Arrivals",
        items: [
          {
            name: "View All",
            link: "/catalog/newArrivals",
          },
          {
            name: "Clothes",
            link: "/catalog/newArrivals/men_clothes",
          },
          {
            name: "Shoes & Accessories",
            link: "/catalog/newArrivals/men_shoesAccessories",
          },
          {
            name: "Sport Wear",
            link: "/catalog/newArrivals/men_sportwear",
          },
        ],
      },
      {
        name: "The essentlals",
        items: [
          {
            name: "The Collection",
            link: "/",
          },
          {
            name: "About",
            link: "/",
          },
        ],
      },

      {
        name: "Summer lookbook",
        items: [
          {
            name: "Casual looks",
            link: "/",
          },
          {
            name: "Smart looks",
            link: "/",
          },
          {
            name: "Street looks",
            link: "/",
          },
        ],
      },

      {
        name: "Offers and Deals",
        items: [
          {
            name: "Sale up to 60% off",
            link: "/",
          },
          {
            name: "Socks: B2G1",
            link: "/",
          },
          {
            name: "Student Discount",
            link: "/",
          },
        ],
      },

      {
        name: "Trending Now",
        items: [
          {
            name: "The Summer Shop",
            link: "/",
          },
          {
            name: "Tailored looks",
            link: "/",
          },
          {
            name: "The Linen Shop",
            link: "/",
          },
          {
            name: "Top sellers from %6.99",
            link: "/",
          },
          {
            name: "The Graphic Shops",
            link: "/",
          },
        ],
      },

      {
        name: "Shop by Products",
        items: [
          {
            name: "View All",
            link: "/",
          },
          {
            name: "Shirts & Blouses",
            link: "/",
          },
          {
            name: "Pants",
            link: "/",
          },
          {
            name: "Blazers & Vests",
            link: "/",
          },
          {
            name: "Jeans",
            link: "/",
          },
          {
            name: "Shoes",
            link: "/",
          },
          {
            name: "Accesories",
            link: "/",
          },
          {
            name: "Swimwear & Beachwear",
            link: "/",
          },
          {
            name: "Shorts",
            link: "/",
          },
          {
            name: "Basics",
            link: "/",
          },
          {
            name: "Cardigans & Sweaters",
            link: "/",
          },
          {
            name: "Jackets & Coats",
            link: "/",
          },
          {
            name: "Hoodies & Sweatshirts",
            link: "/",
          },

          {
            name: "Sleepwear",
            link: "/",
          },
          {
            name: "Socks & Tights",
            link: "/",
          },
          {
            name: "Sportswear",
            link: "/",
          },

          {
            name: "Premium Selection",
            link: "/",
          },
          {
            name: "Beauty",
            link: "/",
          },
          {
            name: "Care Products",
            link: "/",
          },
        ],
      },

      {
        name: "Gifting",
        items: [
          {
            name: "Gift Card",
            link: "/",
          },
        ],
      },
      {
        name: "Sustainability",
        items: [
          {
            name: "H&M Take Care",
            link: "/",
          },
          {
            name: "Learn More",
            link: "/",
          },
        ],
      },
    ],
  },

  {
    name: "Divided",
    key: menuItemKeys.divided,
    link: "/",
    innerLinks: [
      {
        name: "New Arrivals",
        items: [
          {
            name: "Clothes",
            link: "/",
          },
          {
            name: "Shoes & Accessories",
            link: "/",
          },
        ],
      },

      {
        name: "Offers and Deals",
        items: [
          {
            name: "Student Discount",
            link: "/",
          },
          {
            name: "Sale up to 60% off",
            link: "/",
          },
          {
            name: "Sale: Dresses from $3.99",
            link: "/",
          },
        ],
      },
      {
        name: "Trending Now",
        items: [
          {
            name: "Grad, Prom & More",
            link: "/",
          },
          {
            name: "Summer Concert Fits",
            link: "/",
          },
          {
            name: "Music, Movies & Logos",
            link: "/",
          },
          {
            name: "#coastalcowgirl",
            link: "/",
          },
          {
            name: "#hyperfemininie",
            link: "/",
          },
          {
            name: "#scandistyle",
            link: "/",
          },
          {
            name: "#mermaidcore",
            link: "/",
          },
          {
            name: "Tik Tok Made Me Do It",
            link: "/",
          },
        ],
      },

      {
        name: "Shop by Products",
        items: [
          {
            name: "View All",
            link: "/",
          },
          {
            name: "Tops",
            link: "/",
          },
          {
            name: "Dresses",
            link: "/",
          },
          {
            name: "Pants & Leggings",
            link: "/",
          },
          {
            name: "Shirts & Blouses",
            link: "/",
          },

          {
            name: "Blazers & Vests",
            link: "/",
          },
          {
            name: "Jeans",
            link: "/",
          },
          {
            name: "Jumpsuits, Rompers",
            link: "/",
          },
          {
            name: "Skirts",
            link: "/",
          },
          {
            name: "Shoes",
            link: "/",
          },
          {
            name: "Accesories",
            link: "/",
          },
          {
            name: "Swimwear & Beachwear",
            link: "/",
          },
          {
            name: "Shorts",
            link: "/",
          },
          {
            name: "Basics",
            link: "/",
          },
          {
            name: "Cardigans & Sweaters",
            link: "/",
          },
          {
            name: "Jackets & Coats",
            link: "/",
          },
          {
            name: "Hoodies & Sweatshirts",
            link: "/",
          },
          {
            name: "Sleepwear",
            link: "/",
          },
          {
            name: "Socks & Tights",
            link: "/",
          },
          {
            name: "Sportswear",
            link: "/",
          },

          {
            name: "Beauty",
            link: "/",
          },
          {
            name: "Care Products",
            link: "/",
          },
        ],
      },

      {
        name: "Second Hand",
        items: [
          {
            name: "H&M x thredUP",
            link: "/",
          },
        ],
      },
      {
        name: "Gifting",
        items: [
          {
            name: "Gift Card",
            link: "/",
          },
        ],
      },
      {
        name: "Sustainability",
        items: [
          {
            name: "H&M Take Care",
            link: "/",
          },
          {
            name: "Learn More",
            link: "/",
          },
        ],
      },
    ],
  },

  {
    name: "Baby",
    key: menuItemKeys.baby,
    link: "/",
    innerLinks: [
      {
        name: "Offers and Deals",
        items: [
          {
            name: "Student Discount",
            link: "/",
          },
          {
            name: "Sale up to 60% off",
            link: "/",
          },
        ],
      },
      {
        name: "Popular Now",
        items: [
          {
            name: "Baby shower gifts",
            link: "/",
          },
          {
            name: "Red, White & Blue from $6.99",
            link: "/",
          },
          {
            name: "Disney Clothes for Baby",
            link: "/",
          },
          {
            name: "Hospital Bag",
            link: "/",
          },
          {
            name: "Summer Essentials from $4.99",
            link: "/",
          },
          {
            name: "Basics & Multipacks from $6.99",
            link: "/",
          },
        ],
      },

      {
        name: "Newborn",
        items: [
          {
            name: "View All",
            link: "/",
          },
          {
            name: "New arrivals",
            link: "/",
          },
          {
            name: "Clothing",
            link: "/",
          },
        ],
      },

      {
        name: "Baby Girl",
        items: [
          {
            name: "Student Discount",
            link: "/",
          },
          {
            name: "Sale up to 60% off",
            link: "/",
          },
        ],
      },

      {
        name: "Baby Boy",
        items: [
          {
            name: "View All",
            link: "/",
          },
          {
            name: "Plus Sizes",
            link: "/",
          },
          {
            name: "Dresses",
            link: "/",
          },
          {
            name: "Tops",
            link: "/",
          },

          {
            name: "Jumpsuits, Rompers & Overalls",
            link: "/",
          },

          {
            name: "Swimwear & Beachwear",
            link: "/",
          },

          {
            name: "Maternity Wear",
            link: "/",
          },
        ],
      },

      {
        name: "Second Hand",
        items: [
          {
            name: "H&M x thredUP",
            link: "/",
          },
        ],
      },

      {
        name: "Sustainability",
        items: [
          {
            name: "H&M Take Care",
            link: "/",
          },
          {
            name: "Learn More",
            link: "/",
          },
        ],
      },
    ],
  },

  {
    name: "Kids",
    key: menuItemKeys.kids,
    link: "/",
    innerLinks: [
      {
        name: "New Arrivals",
        items: [
          {
            name: "View All",
            link: "/",
          },
          {
            name: "Clothes",
            link: "/",
          },
          {
            name: "Shoes & Accessories",
            link: "/",
          },
          {
            name: "Beauty",
            link: "/",
          },
          {
            name: "Underwear&Nightwear",
            link: "/",
          },
        ],
      },
      {
        name: "Trending Now",
        items: [
          {
            name: "The Occasion Edit",
            link: "/",
          },
          {
            name: "Beachwear Destination",
            link: "/",
          },
          {
            name: "Linen layers",
            link: "/",
          },
          {
            name: "H&M Edition",
            link: "/",
          },
          {
            name: "The Crochet Shop",
            link: "/",
          },
          {
            name: "Tik Tok Made Me Do It",
            link: "/",
          },
          {
            name: "H&M Willamsburg: The Galary",
            link: "/",
          },
        ],
      },

      {
        name: "Shop by Occasion",
        items: [
          {
            name: "Wedding",
            link: "/",
          },
          {
            name: "Party Wear",
            link: "/",
          },
          {
            name: "Office Wear",
            link: "/",
          },
        ],
      },

      {
        name: "Offers",
        items: [
          {
            name: "Student Discount",
            link: "/",
          },
          {
            name: "Sale up to 60% off",
            link: "/",
          },
        ],
      },

      {
        name: "Shop by Products",
        items: [
          {
            name: "View All",
            link: "/",
          },
          {
            name: "Plus Sizes",
            link: "/",
          },
          {
            name: "Dresses",
            link: "/",
          },
          {
            name: "Tops",
            link: "/",
          },
          {
            name: "Shirts & Blouses",
            link: "/",
          },
          {
            name: "Pants",
            link: "/",
          },
          {
            name: "Blazers & Vests",
            link: "/",
          },
          {
            name: "Jeans",
            link: "/",
          },
          {
            name: "Jumpsuits, Rompers & Overalls",
            link: "/",
          },
          {
            name: "Skirts",
            link: "/",
          },
          {
            name: "Shoes",
            link: "/",
          },
          {
            name: "Accesories",
            link: "/",
          },
          {
            name: "Swimwear & Beachwear",
            link: "/",
          },
          {
            name: "Shorts",
            link: "/",
          },
          {
            name: "Basics",
            link: "/",
          },
          {
            name: "Cardigans & Sweaters",
            link: "/",
          },
          {
            name: "Jackets & Coats",
            link: "/",
          },
          {
            name: "Hoodies & Sweatshirts",
            link: "/",
          },
          {
            name: "Lingerie",
            link: "/",
          },
          {
            name: "Loungewear",
            link: "/",
          },
          {
            name: "Sleepwear",
            link: "/",
          },
          {
            name: "Socks & Tights",
            link: "/",
          },
          {
            name: "Sportswear",
            link: "/",
          },
          {
            name: "Maternity Wear",
            link: "/",
          },
          {
            name: "Premium Selection",
            link: "/",
          },
          {
            name: "Beauty",
            link: "/",
          },
          {
            name: "Care Products",
            link: "/",
          },
        ],
      },

      {
        name: "Second Hand",
        items: [
          {
            name: "H&M x thredUP",
            link: "/",
          },
        ],
      },
      {
        name: "Gifting",
        items: [
          {
            name: "Gift Card",
            link: "/",
          },
        ],
      },
      {
        name: "Sustainability",
        items: [
          {
            name: "H&M Take Care",
            link: "/",
          },
          {
            name: "Learn More",
            link: "/",
          },
        ],
      },
      {
        name: "Magazine",
        items: [
          {
            name: "Magazine",
            link: "/",
          },
        ],
      },
    ],
  },

  {
    name: "H&M HOME",
    key: menuItemKeys.hmHome,
    link: "/",
    innerLinks: [
      {
        name: "New Arrivals",
        items: [
          {
            name: "View All",
            link: "/",
          },
          {
            name: "Clothes",
            link: "/",
          },
          {
            name: "Shoes & Accessories",
            link: "/",
          },
          {
            name: "Beauty",
            link: "/",
          },
          {
            name: "Underwear&Nightwear",
            link: "/",
          },
        ],
      },
      {
        name: "Trending Now",
        items: [
          {
            name: "The Occasion Edit",
            link: "/",
          },
          {
            name: "Beachwear Destination",
            link: "/",
          },
          {
            name: "Linen layers",
            link: "/",
          },
          {
            name: "H&M Edition",
            link: "/",
          },
          {
            name: "The Crochet Shop",
            link: "/",
          },
          {
            name: "Tik Tok Made Me Do It",
            link: "/",
          },
          {
            name: "H&M Willamsburg: The Galary",
            link: "/",
          },
        ],
      },

      {
        name: "Shop by Occasion",
        items: [
          {
            name: "Wedding",
            link: "/",
          },
          {
            name: "Party Wear",
            link: "/",
          },
          {
            name: "Office Wear",
            link: "/",
          },
        ],
      },

      {
        name: "Offers",
        items: [
          {
            name: "Student Discount",
            link: "/",
          },
          {
            name: "Sale up to 60% off",
            link: "/",
          },
        ],
      },

      {
        name: "Shop by Products",
        items: [
          {
            name: "View All",
            link: "/",
          },
          {
            name: "Plus Sizes",
            link: "/",
          },
          {
            name: "Dresses",
            link: "/",
          },
          {
            name: "Tops",
            link: "/",
          },
          {
            name: "Shirts & Blouses",
            link: "/",
          },
          {
            name: "Pants",
            link: "/",
          },
          {
            name: "Blazers & Vests",
            link: "/",
          },
          {
            name: "Jeans",
            link: "/",
          },
          {
            name: "Jumpsuits, Rompers & Overalls",
            link: "/",
          },
          {
            name: "Skirts",
            link: "/",
          },
          {
            name: "Shoes",
            link: "/",
          },
          {
            name: "Accesories",
            link: "/",
          },
          {
            name: "Swimwear & Beachwear",
            link: "/",
          },
          {
            name: "Shorts",
            link: "/",
          },
          {
            name: "Basics",
            link: "/",
          },
          {
            name: "Cardigans & Sweaters",
            link: "/",
          },
          {
            name: "Jackets & Coats",
            link: "/",
          },
          {
            name: "Hoodies & Sweatshirts",
            link: "/",
          },
          {
            name: "Lingerie",
            link: "/",
          },
          {
            name: "Loungewear",
            link: "/",
          },
          {
            name: "Sleepwear",
            link: "/",
          },
          {
            name: "Socks & Tights",
            link: "/",
          },
          {
            name: "Sportswear",
            link: "/",
          },
          {
            name: "Maternity Wear",
            link: "/",
          },
          {
            name: "Premium Selection",
            link: "/",
          },
          {
            name: "Beauty",
            link: "/",
          },
          {
            name: "Care Products",
            link: "/",
          },
        ],
      },

      {
        name: "Second Hand",
        items: [
          {
            name: "H&M x thredUP",
            link: "/",
          },
        ],
      },
      {
        name: "Gifting",
        items: [
          {
            name: "Gift Card",
            link: "/",
          },
        ],
      },
      {
        name: "Sustainability",
        items: [
          {
            name: "H&M Take Care",
            link: "/",
          },
          {
            name: "Learn More",
            link: "/",
          },
        ],
      },
      {
        name: "Magazine",
        items: [
          {
            name: "Magazine",
            link: "/",
          },
        ],
      },
    ],
  },

  {
    name: "Sport",
    key: menuItemKeys.sport,
    link: "/",
    innerLinks: [
      {
        name: "New Arrivals",
        items: [
          {
            name: "View All",
            link: "/",
          },
        ],
      },
      {
        name: "Trending Now",
        items: [
          {
            name: "The Occasion Edit",
            link: "/",
          },

          {
            name: "The Crochet Shop",
            link: "/",
          },
          {
            name: "Tik Tok Made Me Do It",
            link: "/",
          },
          {
            name: "H&M Willamsburg: The Galary",
            link: "/",
          },
        ],
      },

      {
        name: "Shop by Occasion",
        items: [
          {
            name: "Wedding",
            link: "/",
          },
          {
            name: "Party Wear",
            link: "/",
          },
          {
            name: "Office Wear",
            link: "/",
          },
        ],
      },

      {
        name: "Offers",
        items: [
          {
            name: "Student Discount",
            link: "/",
          },
          {
            name: "Sale up to 60% off",
            link: "/",
          },
        ],
      },

      {
        name: "Second Hand",
        items: [
          {
            name: "H&M x thredUP",
            link: "/",
          },
        ],
      },
      {
        name: "Gifting",
        items: [
          {
            name: "Gift Card",
            link: "/",
          },
        ],
      },
      {
        name: "Sustainability",
        items: [
          {
            name: "H&M Take Care",
            link: "/",
          },
          {
            name: "Learn More",
            link: "/",
          },
        ],
      },
      {
        name: "Magazine",
        items: [
          {
            name: "Magazine",
            link: "/",
          },
        ],
      },
    ],
  },

  {
    name: "Beauty",
    key: menuItemKeys.beauty,
    link: "/",
    innerLinks: [
      {
        name: "New Arrivals",
        items: [
          {
            name: "View All",
            link: "/",
          },
        ],
      },
      {
        name: "Trending Now",
        items: [
          {
            name: "The Occasion Edit",
            link: "/",
          },

          {
            name: "The Crochet Shop",
            link: "/",
          },
          {
            name: "Tik Tok Made Me Do It",
            link: "/",
          },
          {
            name: "H&M Willamsburg: The Galary",
            link: "/",
          },
        ],
      },

      {
        name: "Offers",
        items: [
          {
            name: "Student Discount",
            link: "/",
          },
          {
            name: "Sale up to 60% off",
            link: "/",
          },
        ],
      },

      {
        name: "Shop by Products",
        items: [
          {
            name: "View All",
            link: "/",
          },

          {
            name: "Shirts & Blouses",
            link: "/",
          },
          {
            name: "Pants",
            link: "/",
          },
          {
            name: "Blazers & Vests",
            link: "/",
          },
          {
            name: "Jeans",
            link: "/",
          },
          {
            name: "Jumpsuits, Rompers & Overalls",
            link: "/",
          },
          {
            name: "Swimwear & Beachwear",
            link: "/",
          },
          {
            name: "Shorts",
            link: "/",
          },
          {
            name: "Basics",
            link: "/",
          },

          {
            name: "Loungewear",
            link: "/",
          },
          {
            name: "Sleepwear",
            link: "/",
          },
          {
            name: "Socks & Tights",
            link: "/",
          },

          {
            name: "Care Products",
            link: "/",
          },
        ],
      },

      {
        name: "Second Hand",
        items: [
          {
            name: "H&M x thredUP",
            link: "/",
          },
        ],
      },
      {
        name: "Gifting",
        items: [
          {
            name: "Gift Card",
            link: "/",
          },
        ],
      },
      {
        name: "Sustainability",
        items: [
          {
            name: "H&M Take Care",
            link: "/",
          },
          {
            name: "Learn More",
            link: "/",
          },
        ],
      },
      {
        name: "Magazine",
        items: [
          {
            name: "Magazine",
            link: "/",
          },
        ],
      },
    ],
  },

  {
    name: "Sale",
    key: menuItemKeys.sale,
    link: "/",
    innerLinks: [
      {
        name: "New Arrivals",
        items: [
          {
            name: "View All",
            link: "/",
          },
        ],
      },
      {
        name: "Trending Now",
        items: [
          {
            name: "The Occasion Edit",
            link: "/",
          },

          {
            name: "The Crochet Shop",
            link: "/",
          },
          {
            name: "Tik Tok Made Me Do It",
            link: "/",
          },
          {
            name: "H&M Willamsburg: The Galary",
            link: "/",
          },
        ],
      },

      {
        name: "Shop by Occasion",
        items: [
          {
            name: "Wedding",
            link: "/",
          },
          {
            name: "Party Wear",
            link: "/",
          },
          {
            name: "Office Wear",
            link: "/",
          },
        ],
      },

      {
        name: "Offers",
        items: [
          {
            name: "Student Discount",
            link: "/",
          },
          {
            name: "Sale up to 60% off",
            link: "/",
          },
        ],
      },

      {
        name: "Shop by Products",
        items: [
          {
            name: "View All",
            link: "/",
          },

          {
            name: "Shirts & Blouses",
            link: "/",
          },
          {
            name: "Pants",
            link: "/",
          },
          {
            name: "Blazers & Vests",
            link: "/",
          },
          {
            name: "Jeans",
            link: "/",
          },
          {
            name: "Jumpsuits, Rompers & Overalls",
            link: "/",
          },
          {
            name: "Swimwear & Beachwear",
            link: "/",
          },
          {
            name: "Shorts",
            link: "/",
          },
          {
            name: "Basics",
            link: "/",
          },

          {
            name: "Loungewear",
            link: "/",
          },
          {
            name: "Sleepwear",
            link: "/",
          },
          {
            name: "Socks & Tights",
            link: "/",
          },

          {
            name: "Care Products",
            link: "/",
          },
        ],
      },

      {
        name: "Second Hand",
        items: [
          {
            name: "H&M x thredUP",
            link: "/",
          },
        ],
      },
      {
        name: "Gifting",
        items: [
          {
            name: "Gift Card",
            link: "/",
          },
        ],
      },
      {
        name: "Sustainability",
        items: [
          {
            name: "H&M Take Care",
            link: "/",
          },
          {
            name: "Learn More",
            link: "/",
          },
        ],
      },
      {
        name: "Magazine",
        items: [
          {
            name: "Magazine",
            link: "/",
          },
        ],
      },
    ],
  },

  {
    name: "Sustainability",
    key: menuItemKeys.sustainability,
    link: "/",
    innerLinks: [
      {
        name: "New Arrivals",
        items: [
          {
            name: "View All",
            link: "/",
          },
        ],
      },
      {
        name: "Trending Now",
        items: [
          {
            name: "The Occasion Edit",
            link: "/",
          },

          {
            name: "The Crochet Shop",
            link: "/",
          },
          {
            name: "Tik Tok Made Me Do It",
            link: "/",
          },
          {
            name: "H&M Willamsburg: The Galary",
            link: "/",
          },
        ],
      },

      {
        name: "Shop by Occasion",
        items: [
          {
            name: "Wedding",
            link: "/",
          },
          {
            name: "Party Wear",
            link: "/",
          },
          {
            name: "Office Wear",
            link: "/",
          },
        ],
      },

      {
        name: "Offers",
        items: [
          {
            name: "Student Discount",
            link: "/",
          },
          {
            name: "Sale up to 60% off",
            link: "/",
          },
        ],
      },

      {
        name: "Shop by Products",
        items: [
          {
            name: "View All",
            link: "/",
          },

          {
            name: "Shirts & Blouses",
            link: "/",
          },
          {
            name: "Pants",
            link: "/",
          },
          {
            name: "Blazers & Vests",
            link: "/",
          },
          {
            name: "Jeans",
            link: "/",
          },
          {
            name: "Jumpsuits, Rompers & Overalls",
            link: "/",
          },
          {
            name: "Swimwear & Beachwear",
            link: "/",
          },
          {
            name: "Shorts",
            link: "/",
          },
          {
            name: "Basics",
            link: "/",
          },

          {
            name: "Loungewear",
            link: "/",
          },
          {
            name: "Sleepwear",
            link: "/",
          },
          {
            name: "Socks & Tights",
            link: "/",
          },

          {
            name: "Care Products",
            link: "/",
          },
        ],
      },

      {
        name: "Second Hand",
        items: [
          {
            name: "H&M x thredUP",
            link: "/",
          },
        ],
      },
      {
        name: "Gifting",
        items: [
          {
            name: "Gift Card",
            link: "/",
          },
        ],
      },
      {
        name: "Sustainability",
        items: [
          {
            name: "H&M Take Care",
            link: "/",
          },
          {
            name: "Learn More",
            link: "/",
          },
        ],
      },
      {
        name: "Magazine",
        items: [
          {
            name: "Magazine",
            link: "/",
          },
        ],
      },
    ],
  },
];

const Header = () => {
  const [menuVisibility, setMenuVisibility] = useState("hidden");
  const [selectedLink, setSelectedLink] = useState("");


  const onLinkMouseEnter = (key) => {
    setSelectedLink(key);
    setMenuVisibility("visible");
  };

  const menuItems = useMemo(() => {
    if (selectedLink) {
      return headerMenu.find((item) => 
        item.key === selectedLink
      )?.innerLinks || []
    } 
    return []
  }, [selectedLink]);
  console.log(selectedLink)

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
          {headerMenu.map(({ link, name, key, innerLinks }) => {
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
                  console.log(name);
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
