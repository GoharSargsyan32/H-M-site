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
          },
          {
            name: "Beauty",
            link: "/"
          },
          {
            name: "Underwear&Nightwear",
            link: "/"
          }
        ]
      },
      {
        name: "Trending Now",
        items: [
          {
            name: "The Occasion Edit",
            link: "/"
          },
          {
            name: "Beachwear Destination",
            link: "/"
          },
          {
            name: "Linen layers",
            link: "/"
          }, 
          {
            name: "H&M Edition",
            link: "/"
          },
          {
            name: "The Crochet Shop",
            link: "/"
          },
          {
            name: "Tik Tok Made Me Do It",
            link: "/"
          },
          {
            name: "H&M Willamsburg: The Galary",
            link: "/"
          }
        ]
      },

      {
        name: "Shop by Occasion",
        items: [
          {
            name: "Wedding",
            link: "/"
          },
          {
            name: "Party Wear",
            link: "/"
          },
          {
            name: "Office Wear",
            link: "/"
          },
          
        ]
      },

      {
        name: "Offers",
        items: [
          {
            name: "Student Discount",
            link: "/"
          },
          {
            name: "Sale up to 60% off",
            link: "/"
          },
          
        ]
      },

      {
        name: "Shop by Products",
        items: [
          {
            name: "View All",
            link: "/"
          },
          {
            name: "Plus Sizes",
            link: "/"
          },
          {
            name: "Dresses",
            link: "/"
          }, 
          {
            name: "Tops",
            link: "/"
          },
          {
            name: "Shirts & Blouses",
            link: "/"
          },
          {
            name: "Pants",
            link: "/"
          },
          {
            name: "Blazers & Vests",
            link: "/"
          },
          {
            name: "Jeans",
            link: "/"
          },
          {
            name: "Jumpsuits, Rompers & Overalls",
            link: "/"
          },
          {
            name: "Skirts",
            link: "/"
          },
          {
            name: "Shoes",
            link: "/"
          },
          {
            name: "Accesories",
            link: "/"
          },
          {
            name: "Swimwear & Beachwear",
            link: "/"
          },
          {
            name: "Shorts",
            link: "/"
          },
          {
            name: "Basics",
            link: "/"
          },
          {
            name: "Cardigans & Sweaters",
            link: "/"
          },
          {
            name: "Jackets & Coats",
            link: "/"
          },
          {
            name: "Hoodies & Sweatshirts",
            link: "/"
          },
          {
            name: "Lingerie",
            link: "/"
          },
          {
            name: "Loungewear",
            link: "/"
          },
          {
            name: "Sleepwear",
            link: "/"
          },
          {
            name: "Socks & Tights",
            link: "/"
          },
          {
            name: "Sportswear",
            link: "/"
          },
          {
            name: "Maternity Wear",
            link: "/"
          },
          {
            name: "Premium Selection",
            link: "/"
          },
          {
            name: "Beauty",
            link: "/"
          },
          {
            name: "Care Products",
            link: "/"
          }
        ]
      },

      {
        name: "Second Hand",
        items: [
          {
            name: "H&M x thredUP",
            link: "/"
          },
                    
        ]
      },
      {
        name: "Gifting",
        items: [
          {
            name: "Gift Card",
            link: "/"
          },
                  
        ]
      },
      {
        name: "Sustainability",
        items: [
          {
            name: "H&M Take Care",
            link: "/"
          },
          {
            name: "Learn More",
            link: "/"
          },
          
        ]
      },
      {
        name: "Magazine",
        items: [
          {
            name: "Magazine",
            link: "/"
          },     
          
        ]
      },

    ]
  },



  {
    name: "Men",
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
          },
          {
            name: "Beauty",
            link: "/"
          },
          {
            name: "Underwear&Nightwear",
            link: "/"
          }
        ]
      },
      {
        name: "Trending Now",
        items: [
          {
            name: "The Occasion Edit",
            link: "/"
          },
          {
            name: "Beachwear Destination",
            link: "/"
          },
          {
            name: "Linen layers",
            link: "/"
          }, 
          {
            name: "H&M Edition",
            link: "/"
          },
          {
            name: "The Crochet Shop",
            link: "/"
          },
          {
            name: "Tik Tok Made Me Do It",
            link: "/"
          },
          {
            name: "H&M Willamsburg: The Galary",
            link: "/"
          }
        ]
      },

      {
        name: "Shop by Occasion",
        items: [
          {
            name: "Wedding",
            link: "/"
          },
          {
            name: "Party Wear",
            link: "/"
          },
          {
            name: "Office Wear",
            link: "/"
          },
          
        ]
      },

      {
        name: "Offers",
        items: [
          {
            name: "Student Discount",
            link: "/"
          },
          {
            name: "Sale up to 60% off",
            link: "/"
          },
          
        ]
      },

      {
        name: "Shop by Products",
        items: [
          {
            name: "View All",
            link: "/"
          },
          {
            name: "Plus Sizes",
            link: "/"
          },
          {
            name: "Dresses",
            link: "/"
          }, 
          {
            name: "Tops",
            link: "/"
          },
          {
            name: "Shirts & Blouses",
            link: "/"
          },
          {
            name: "Pants",
            link: "/"
          },
          {
            name: "Blazers & Vests",
            link: "/"
          },
          {
            name: "Jeans",
            link: "/"
          },
          {
            name: "Jumpsuits, Rompers & Overalls",
            link: "/"
          },
          {
            name: "Skirts",
            link: "/"
          },
          {
            name: "Shoes",
            link: "/"
          },
          {
            name: "Accesories",
            link: "/"
          },
          {
            name: "Swimwear & Beachwear",
            link: "/"
          },
          {
            name: "Shorts",
            link: "/"
          },
          {
            name: "Basics",
            link: "/"
          },
          {
            name: "Cardigans & Sweaters",
            link: "/"
          },
          {
            name: "Jackets & Coats",
            link: "/"
          },
          {
            name: "Hoodies & Sweatshirts",
            link: "/"
          },
          {
            name: "Lingerie",
            link: "/"
          },
          {
            name: "Loungewear",
            link: "/"
          },
          {
            name: "Sleepwear",
            link: "/"
          },
          {
            name: "Socks & Tights",
            link: "/"
          },
          {
            name: "Sportswear",
            link: "/"
          },
          {
            name: "Maternity Wear",
            link: "/"
          },
          {
            name: "Premium Selection",
            link: "/"
          },
          {
            name: "Beauty",
            link: "/"
          },
          {
            name: "Care Products",
            link: "/"
          }
        ]
      },

      {
        name: "Second Hand",
        items: [
          {
            name: "H&M x thredUP",
            link: "/"
          },
                    
        ]
      },
      {
        name: "Gifting",
        items: [
          {
            name: "Gift Card",
            link: "/"
          },
                  
        ]
      },
      {
        name: "Sustainability",
        items: [
          {
            name: "H&M Take Care",
            link: "/"
          },
          {
            name: "Learn More",
            link: "/"
          },
          
        ]
      },
      {
        name: "Magazine",
        items: [
          {
            name: "Magazine",
            link: "/"
          },     
          
        ]
      },

    ]
  },



  {
    name: "Divided",
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
          },
          {
            name: "Beauty",
            link: "/"
          },
          {
            name: "Underwear&Nightwear",
            link: "/"
          }
        ]
      },
      {
        name: "Trending Now",
        items: [
          {
            name: "The Occasion Edit",
            link: "/"
          },
          {
            name: "Beachwear Destination",
            link: "/"
          },
          {
            name: "Linen layers",
            link: "/"
          }, 
          {
            name: "H&M Edition",
            link: "/"
          },
          {
            name: "The Crochet Shop",
            link: "/"
          },
          {
            name: "Tik Tok Made Me Do It",
            link: "/"
          },
          {
            name: "H&M Willamsburg: The Galary",
            link: "/"
          }
        ]
      },

      {
        name: "Shop by Occasion",
        items: [
          {
            name: "Wedding",
            link: "/"
          },
          {
            name: "Party Wear",
            link: "/"
          },
          {
            name: "Office Wear",
            link: "/"
          },
          
        ]
      },

      {
        name: "Offers",
        items: [
          {
            name: "Student Discount",
            link: "/"
          },
          {
            name: "Sale up to 60% off",
            link: "/"
          },
          
        ]
      },

      {
        name: "Shop by Products",
        items: [
          {
            name: "View All",
            link: "/"
          },
          {
            name: "Plus Sizes",
            link: "/"
          },
          {
            name: "Dresses",
            link: "/"
          }, 
          {
            name: "Tops",
            link: "/"
          },
          {
            name: "Shirts & Blouses",
            link: "/"
          },
          {
            name: "Pants",
            link: "/"
          },
          {
            name: "Blazers & Vests",
            link: "/"
          },
          {
            name: "Jeans",
            link: "/"
          },
          {
            name: "Jumpsuits, Rompers & Overalls",
            link: "/"
          },
          {
            name: "Skirts",
            link: "/"
          },
          {
            name: "Shoes",
            link: "/"
          },
          {
            name: "Accesories",
            link: "/"
          },
          {
            name: "Swimwear & Beachwear",
            link: "/"
          },
          {
            name: "Shorts",
            link: "/"
          },
          {
            name: "Basics",
            link: "/"
          },
          {
            name: "Cardigans & Sweaters",
            link: "/"
          },
          {
            name: "Jackets & Coats",
            link: "/"
          },
          {
            name: "Hoodies & Sweatshirts",
            link: "/"
          },
          {
            name: "Lingerie",
            link: "/"
          },
          {
            name: "Loungewear",
            link: "/"
          },
          {
            name: "Sleepwear",
            link: "/"
          },
          {
            name: "Socks & Tights",
            link: "/"
          },
          {
            name: "Sportswear",
            link: "/"
          },
          {
            name: "Maternity Wear",
            link: "/"
          },
          {
            name: "Premium Selection",
            link: "/"
          },
          {
            name: "Beauty",
            link: "/"
          },
          {
            name: "Care Products",
            link: "/"
          }
        ]
      },

      {
        name: "Second Hand",
        items: [
          {
            name: "H&M x thredUP",
            link: "/"
          },
                    
        ]
      },
      {
        name: "Gifting",
        items: [
          {
            name: "Gift Card",
            link: "/"
          },
                  
        ]
      },
      {
        name: "Sustainability",
        items: [
          {
            name: "H&M Take Care",
            link: "/"
          },
          {
            name: "Learn More",
            link: "/"
          },
          
        ]
      },
      {
        name: "Magazine",
        items: [
          {
            name: "Magazine",
            link: "/"
          },     
          
        ]
      },

    ]
  },




 
  {
    name: "Baby",
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
          },
          {
            name: "Beauty",
            link: "/"
          },
          {
            name: "Underwear&Nightwear",
            link: "/"
          }
        ]
      },
      {
        name: "Trending Now",
        items: [
          {
            name: "The Occasion Edit",
            link: "/"
          },
          {
            name: "Beachwear Destination",
            link: "/"
          },
          {
            name: "Linen layers",
            link: "/"
          }, 
          {
            name: "H&M Edition",
            link: "/"
          },
          {
            name: "The Crochet Shop",
            link: "/"
          },
          {
            name: "Tik Tok Made Me Do It",
            link: "/"
          },
          {
            name: "H&M Willamsburg: The Galary",
            link: "/"
          }
        ]
      },

      {
        name: "Shop by Occasion",
        items: [
          {
            name: "Wedding",
            link: "/"
          },
          {
            name: "Party Wear",
            link: "/"
          },
          {
            name: "Office Wear",
            link: "/"
          },
          
        ]
      },

      {
        name: "Offers",
        items: [
          {
            name: "Student Discount",
            link: "/"
          },
          {
            name: "Sale up to 60% off",
            link: "/"
          },
          
        ]
      },

      {
        name: "Shop by Products",
        items: [
          {
            name: "View All",
            link: "/"
          },
          {
            name: "Plus Sizes",
            link: "/"
          },
          {
            name: "Dresses",
            link: "/"
          }, 
          {
            name: "Tops",
            link: "/"
          },
          {
            name: "Shirts & Blouses",
            link: "/"
          },
          {
            name: "Pants",
            link: "/"
          },
          {
            name: "Blazers & Vests",
            link: "/"
          },
          {
            name: "Jeans",
            link: "/"
          },
          {
            name: "Jumpsuits, Rompers & Overalls",
            link: "/"
          },
          {
            name: "Skirts",
            link: "/"
          },
          {
            name: "Shoes",
            link: "/"
          },
          {
            name: "Accesories",
            link: "/"
          },
          {
            name: "Swimwear & Beachwear",
            link: "/"
          },
          {
            name: "Shorts",
            link: "/"
          },
          {
            name: "Basics",
            link: "/"
          },
          {
            name: "Cardigans & Sweaters",
            link: "/"
          },
          {
            name: "Jackets & Coats",
            link: "/"
          },
          {
            name: "Hoodies & Sweatshirts",
            link: "/"
          },
          {
            name: "Lingerie",
            link: "/"
          },
          {
            name: "Loungewear",
            link: "/"
          },
          {
            name: "Sleepwear",
            link: "/"
          },
          {
            name: "Socks & Tights",
            link: "/"
          },
          {
            name: "Sportswear",
            link: "/"
          },
          {
            name: "Maternity Wear",
            link: "/"
          },
          {
            name: "Premium Selection",
            link: "/"
          },
          {
            name: "Beauty",
            link: "/"
          },
          {
            name: "Care Products",
            link: "/"
          }
        ]
      },

      {
        name: "Second Hand",
        items: [
          {
            name: "H&M x thredUP",
            link: "/"
          },
                    
        ]
      },
      {
        name: "Gifting",
        items: [
          {
            name: "Gift Card",
            link: "/"
          },
                  
        ]
      },
      {
        name: "Sustainability",
        items: [
          {
            name: "H&M Take Care",
            link: "/"
          },
          {
            name: "Learn More",
            link: "/"
          },
          
        ]
      },
      {
        name: "Magazine",
        items: [
          {
            name: "Magazine",
            link: "/"
          },     
          
        ]
      },

    ]
  },


  {
    name: "Kids",
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
          },
          {
            name: "Beauty",
            link: "/"
          },
          {
            name: "Underwear&Nightwear",
            link: "/"
          }
        ]
      },
      {
        name: "Trending Now",
        items: [
          {
            name: "The Occasion Edit",
            link: "/"
          },
          {
            name: "Beachwear Destination",
            link: "/"
          },
          {
            name: "Linen layers",
            link: "/"
          }, 
          {
            name: "H&M Edition",
            link: "/"
          },
          {
            name: "The Crochet Shop",
            link: "/"
          },
          {
            name: "Tik Tok Made Me Do It",
            link: "/"
          },
          {
            name: "H&M Willamsburg: The Galary",
            link: "/"
          }
        ]
      },

      {
        name: "Shop by Occasion",
        items: [
          {
            name: "Wedding",
            link: "/"
          },
          {
            name: "Party Wear",
            link: "/"
          },
          {
            name: "Office Wear",
            link: "/"
          },
          
        ]
      },

      {
        name: "Offers",
        items: [
          {
            name: "Student Discount",
            link: "/"
          },
          {
            name: "Sale up to 60% off",
            link: "/"
          },
          
        ]
      },

      {
        name: "Shop by Products",
        items: [
          {
            name: "View All",
            link: "/"
          },
          {
            name: "Plus Sizes",
            link: "/"
          },
          {
            name: "Dresses",
            link: "/"
          }, 
          {
            name: "Tops",
            link: "/"
          },
          {
            name: "Shirts & Blouses",
            link: "/"
          },
          {
            name: "Pants",
            link: "/"
          },
          {
            name: "Blazers & Vests",
            link: "/"
          },
          {
            name: "Jeans",
            link: "/"
          },
          {
            name: "Jumpsuits, Rompers & Overalls",
            link: "/"
          },
          {
            name: "Skirts",
            link: "/"
          },
          {
            name: "Shoes",
            link: "/"
          },
          {
            name: "Accesories",
            link: "/"
          },
          {
            name: "Swimwear & Beachwear",
            link: "/"
          },
          {
            name: "Shorts",
            link: "/"
          },
          {
            name: "Basics",
            link: "/"
          },
          {
            name: "Cardigans & Sweaters",
            link: "/"
          },
          {
            name: "Jackets & Coats",
            link: "/"
          },
          {
            name: "Hoodies & Sweatshirts",
            link: "/"
          },
          {
            name: "Lingerie",
            link: "/"
          },
          {
            name: "Loungewear",
            link: "/"
          },
          {
            name: "Sleepwear",
            link: "/"
          },
          {
            name: "Socks & Tights",
            link: "/"
          },
          {
            name: "Sportswear",
            link: "/"
          },
          {
            name: "Maternity Wear",
            link: "/"
          },
          {
            name: "Premium Selection",
            link: "/"
          },
          {
            name: "Beauty",
            link: "/"
          },
          {
            name: "Care Products",
            link: "/"
          }
        ]
      },

      {
        name: "Second Hand",
        items: [
          {
            name: "H&M x thredUP",
            link: "/"
          },
                    
        ]
      },
      {
        name: "Gifting",
        items: [
          {
            name: "Gift Card",
            link: "/"
          },
                  
        ]
      },
      {
        name: "Sustainability",
        items: [
          {
            name: "H&M Take Care",
            link: "/"
          },
          {
            name: "Learn More",
            link: "/"
          },
          
        ]
      },
      {
        name: "Magazine",
        items: [
          {
            name: "Magazine",
            link: "/"
          },     
          
        ]
      },

    ]
  },



  {
    name: "H&M HOME",
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
          },
          {
            name: "Beauty",
            link: "/"
          },
          {
            name: "Underwear&Nightwear",
            link: "/"
          }
        ]
      },
      {
        name: "Trending Now",
        items: [
          {
            name: "The Occasion Edit",
            link: "/"
          },
          {
            name: "Beachwear Destination",
            link: "/"
          },
          {
            name: "Linen layers",
            link: "/"
          }, 
          {
            name: "H&M Edition",
            link: "/"
          },
          {
            name: "The Crochet Shop",
            link: "/"
          },
          {
            name: "Tik Tok Made Me Do It",
            link: "/"
          },
          {
            name: "H&M Willamsburg: The Galary",
            link: "/"
          }
        ]
      },

      {
        name: "Shop by Occasion",
        items: [
          {
            name: "Wedding",
            link: "/"
          },
          {
            name: "Party Wear",
            link: "/"
          },
          {
            name: "Office Wear",
            link: "/"
          },
          
        ]
      },

      {
        name: "Offers",
        items: [
          {
            name: "Student Discount",
            link: "/"
          },
          {
            name: "Sale up to 60% off",
            link: "/"
          },
          
        ]
      },

      {
        name: "Shop by Products",
        items: [
          {
            name: "View All",
            link: "/"
          },
          {
            name: "Plus Sizes",
            link: "/"
          },
          {
            name: "Dresses",
            link: "/"
          }, 
          {
            name: "Tops",
            link: "/"
          },
          {
            name: "Shirts & Blouses",
            link: "/"
          },
          {
            name: "Pants",
            link: "/"
          },
          {
            name: "Blazers & Vests",
            link: "/"
          },
          {
            name: "Jeans",
            link: "/"
          },
          {
            name: "Jumpsuits, Rompers & Overalls",
            link: "/"
          },
          {
            name: "Skirts",
            link: "/"
          },
          {
            name: "Shoes",
            link: "/"
          },
          {
            name: "Accesories",
            link: "/"
          },
          {
            name: "Swimwear & Beachwear",
            link: "/"
          },
          {
            name: "Shorts",
            link: "/"
          },
          {
            name: "Basics",
            link: "/"
          },
          {
            name: "Cardigans & Sweaters",
            link: "/"
          },
          {
            name: "Jackets & Coats",
            link: "/"
          },
          {
            name: "Hoodies & Sweatshirts",
            link: "/"
          },
          {
            name: "Lingerie",
            link: "/"
          },
          {
            name: "Loungewear",
            link: "/"
          },
          {
            name: "Sleepwear",
            link: "/"
          },
          {
            name: "Socks & Tights",
            link: "/"
          },
          {
            name: "Sportswear",
            link: "/"
          },
          {
            name: "Maternity Wear",
            link: "/"
          },
          {
            name: "Premium Selection",
            link: "/"
          },
          {
            name: "Beauty",
            link: "/"
          },
          {
            name: "Care Products",
            link: "/"
          }
        ]
      },

      {
        name: "Second Hand",
        items: [
          {
            name: "H&M x thredUP",
            link: "/"
          },
                    
        ]
      },
      {
        name: "Gifting",
        items: [
          {
            name: "Gift Card",
            link: "/"
          },
                  
        ]
      },
      {
        name: "Sustainability",
        items: [
          {
            name: "H&M Take Care",
            link: "/"
          },
          {
            name: "Learn More",
            link: "/"
          },
          
        ]
      },
      {
        name: "Magazine",
        items: [
          {
            name: "Magazine",
            link: "/"
          },     
          
        ]
      },

    ]
  },



  {
    name: "Sport",
    link: "/",
    innerLinks: [
      {
        name: "New Arrivals",
        items: [
          {
            name: "View All",
            link: "/"
          },
          
        ]
      },
      {
        name: "Trending Now",
        items: [
          {
            name: "The Occasion Edit",
            link: "/"
          },
          
          {
            name: "The Crochet Shop",
            link: "/"
          },
          {
            name: "Tik Tok Made Me Do It",
            link: "/"
          },
          {
            name: "H&M Willamsburg: The Galary",
            link: "/"
          }
        ]
      },

      {
        name: "Shop by Occasion",
        items: [
          {
            name: "Wedding",
            link: "/"
          },
          {
            name: "Party Wear",
            link: "/"
          },
          {
            name: "Office Wear",
            link: "/"
          },
          
        ]
      },

      {
        name: "Offers",
        items: [
          {
            name: "Student Discount",
            link: "/"
          },
          {
            name: "Sale up to 60% off",
            link: "/"
          },
          
        ]
      },

      

      {
        name: "Second Hand",
        items: [
          {
            name: "H&M x thredUP",
            link: "/"
          },
                    
        ]
      },
      {
        name: "Gifting",
        items: [
          {
            name: "Gift Card",
            link: "/"
          },
                  
        ]
      },
      {
        name: "Sustainability",
        items: [
          {
            name: "H&M Take Care",
            link: "/"
          },
          {
            name: "Learn More",
            link: "/"
          },
          
        ]
      },
      {
        name: "Magazine",
        items: [
          {
            name: "Magazine",
            link: "/"
          },     
          
        ]
      },

    ]
  },


  {
    name: "Beauty",
    link: "/",
    innerLinks: [
      {
        name: "New Arrivals",
        items: [
          {
            name: "View All",
            link: "/"
          },
          
        ]
      },
      {
        name: "Trending Now",
        items: [
          {
            name: "The Occasion Edit",
            link: "/"
          },
          
          {
            name: "The Crochet Shop",
            link: "/"
          },
          {
            name: "Tik Tok Made Me Do It",
            link: "/"
          },
          {
            name: "H&M Willamsburg: The Galary",
            link: "/"
          }
        ]
      },

      

      {
        name: "Offers",
        items: [
          {
            name: "Student Discount",
            link: "/"
          },
          {
            name: "Sale up to 60% off",
            link: "/"
          },
          
        ]
      },

      {
        name: "Shop by Products",
        items: [
          {
            name: "View All",
            link: "/"
          },
        
          {
            name: "Shirts & Blouses",
            link: "/"
          },
          {
            name: "Pants",
            link: "/"
          },
          {
            name: "Blazers & Vests",
            link: "/"
          },
          {
            name: "Jeans",
            link: "/"
          },
          {
            name: "Jumpsuits, Rompers & Overalls",
            link: "/"
          },
          {
            name: "Swimwear & Beachwear",
            link: "/"
          },
          {
            name: "Shorts",
            link: "/"
          },
          {
            name: "Basics",
            link: "/"
          },
         
          {
            name: "Loungewear",
            link: "/"
          },
          {
            name: "Sleepwear",
            link: "/"
          },
          {
            name: "Socks & Tights",
            link: "/"
          },
         
          {
            name: "Care Products",
            link: "/"
          }
        ]
      },

      {
        name: "Second Hand",
        items: [
          {
            name: "H&M x thredUP",
            link: "/"
          },
                    
        ]
      },
      {
        name: "Gifting",
        items: [
          {
            name: "Gift Card",
            link: "/"
          },
                  
        ]
      },
      {
        name: "Sustainability",
        items: [
          {
            name: "H&M Take Care",
            link: "/"
          },
          {
            name: "Learn More",
            link: "/"
          },
          
        ]
      },
      {
        name: "Magazine",
        items: [
          {
            name: "Magazine",
            link: "/"
          },     
          
        ]
      },

    ]
  },



  {
    name: "Sale",
    link: "/",
    innerLinks: [
      {
        name: "New Arrivals",
        items: [
          {
            name: "View All",
            link: "/"
          },
          
        ]
      },
      {
        name: "Trending Now",
        items: [
          {
            name: "The Occasion Edit",
            link: "/"
          },
          
          {
            name: "The Crochet Shop",
            link: "/"
          },
          {
            name: "Tik Tok Made Me Do It",
            link: "/"
          },
          {
            name: "H&M Willamsburg: The Galary",
            link: "/"
          }
        ]
      },

      {
        name: "Shop by Occasion",
        items: [
          {
            name: "Wedding",
            link: "/"
          },
          {
            name: "Party Wear",
            link: "/"
          },
          {
            name: "Office Wear",
            link: "/"
          },
          
        ]
      },

      {
        name: "Offers",
        items: [
          {
            name: "Student Discount",
            link: "/"
          },
          {
            name: "Sale up to 60% off",
            link: "/"
          },
          
        ]
      },

      {
        name: "Shop by Products",
        items: [
          {
            name: "View All",
            link: "/"
          },
        
          {
            name: "Shirts & Blouses",
            link: "/"
          },
          {
            name: "Pants",
            link: "/"
          },
          {
            name: "Blazers & Vests",
            link: "/"
          },
          {
            name: "Jeans",
            link: "/"
          },
          {
            name: "Jumpsuits, Rompers & Overalls",
            link: "/"
          },
          {
            name: "Swimwear & Beachwear",
            link: "/"
          },
          {
            name: "Shorts",
            link: "/"
          },
          {
            name: "Basics",
            link: "/"
          },
         
          {
            name: "Loungewear",
            link: "/"
          },
          {
            name: "Sleepwear",
            link: "/"
          },
          {
            name: "Socks & Tights",
            link: "/"
          },
         
          {
            name: "Care Products",
            link: "/"
          }
        ]
      },

      {
        name: "Second Hand",
        items: [
          {
            name: "H&M x thredUP",
            link: "/"
          },
                    
        ]
      },
      {
        name: "Gifting",
        items: [
          {
            name: "Gift Card",
            link: "/"
          },
                  
        ]
      },
      {
        name: "Sustainability",
        items: [
          {
            name: "H&M Take Care",
            link: "/"
          },
          {
            name: "Learn More",
            link: "/"
          },
          
        ]
      },
      {
        name: "Magazine",
        items: [
          {
            name: "Magazine",
            link: "/"
          },     
          
        ]
      },

    ]
  },



  {
    name: "Sustainability",
    link: "/",
    innerLinks: [
      {
        name: "New Arrivals",
        items: [
          {
            name: "View All",
            link: "/"
          },
          
        ]
      },
      {
        name: "Trending Now",
        items: [
          {
            name: "The Occasion Edit",
            link: "/"
          },
          
          {
            name: "The Crochet Shop",
            link: "/"
          },
          {
            name: "Tik Tok Made Me Do It",
            link: "/"
          },
          {
            name: "H&M Willamsburg: The Galary",
            link: "/"
          }
        ]
      },

      {
        name: "Shop by Occasion",
        items: [
          {
            name: "Wedding",
            link: "/"
          },
          {
            name: "Party Wear",
            link: "/"
          },
          {
            name: "Office Wear",
            link: "/"
          },
          
        ]
      },

      {
        name: "Offers",
        items: [
          {
            name: "Student Discount",
            link: "/"
          },
          {
            name: "Sale up to 60% off",
            link: "/"
          },
          
        ]
      },

      {
        name: "Shop by Products",
        items: [
          {
            name: "View All",
            link: "/"
          },
        
          {
            name: "Shirts & Blouses",
            link: "/"
          },
          {
            name: "Pants",
            link: "/"
          },
          {
            name: "Blazers & Vests",
            link: "/"
          },
          {
            name: "Jeans",
            link: "/"
          },
          {
            name: "Jumpsuits, Rompers & Overalls",
            link: "/"
          },
          {
            name: "Swimwear & Beachwear",
            link: "/"
          },
          {
            name: "Shorts",
            link: "/"
          },
          {
            name: "Basics",
            link: "/"
          },
         
          {
            name: "Loungewear",
            link: "/"
          },
          {
            name: "Sleepwear",
            link: "/"
          },
          {
            name: "Socks & Tights",
            link: "/"
          },
         
          {
            name: "Care Products",
            link: "/"
          }
        ]
      },

      {
        name: "Second Hand",
        items: [
          {
            name: "H&M x thredUP",
            link: "/"
          },
                    
        ]
      },
      {
        name: "Gifting",
        items: [
          {
            name: "Gift Card",
            link: "/"
          },
                  
        ]
      },
      {
        name: "Sustainability",
        items: [
          {
            name: "H&M Take Care",
            link: "/"
          },
          {
            name: "Learn More",
            link: "/"
          },
          
        ]
      },
      {
        name: "Magazine",
        items: [
          {
            name: "Magazine",
            link: "/"
          },     
          
        ]
      },

    ]
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
