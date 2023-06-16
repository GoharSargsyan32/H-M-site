import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Pool from '@/components/pool/pool'
import Women from '@/components/women/women'
import Members from '@/components/members/members'
import Magazine from '@/components/magazine/magazine'
import BigSale from '@/components/bigSale/bigSale'
import Footer from '@/components/footer/footer'

const categories = [
    {
        name: "Women Tops",
        image: "/blouse.avif",
        link: ""
    },
    {
        name: "Women Pants",
        image: "/trousers.avif",
        link: ""
    },
    {
        name: "Women Dresses",
        image: "/dress.avif",
        link: ""
    },
    {
        name: "Women Shirts & Blouses ",
        image: "/shirt.avif",
        link: ""
    },
    {
        name: "Women Accsessories",
        image: "/bag.avif",
        link: ""
    },
    {
        name: "Women Accsessories",
        image: "/bag.avif",
        link: ""
    },
    {
        name: "Women Accsessories",
        image: "/bag.avif",
        link: ""
    },
    {
        name: "Women Accsessories",
        image: "/bag.avif",
        link: ""
    },

    {
        name: "Women Premium Selection",
        image: "/dress2.avif",
        link: ""
    },
    {
        name: "Women Shoes",
        image: "/shoes.avif",
        link: ""
    }, {
        name: "Women Jacket",
        image: "/jacket.avif",
        link: ""
    },
]

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`${styles.main}`}>
                <BigSale
                    name={"Summer"}
                    sale={"60%"}
                    text={"100s of new styles added from $4.99"}
                    categories={["women", "Men", "Baby", "Kids", "H&M Home", "Sport"]}
                />
                <Pool
                    image={"/pool.avif"}
                    heading={"Welcome to the pool patry"}
                    button={"Shop now"}
                />
                <Women
                    categories={categories}
                />
                <Members/>
                <Pool
                    image={"/summer.jfif"}
                    heading={"Statement stripes"}
                    text={"Bold summer styles in striped patterns and lime hues"}
                    button={"Find a store"}
                />
                <Pool
                    image={"/divan.avif"}
                    heading={"Suraunded by nature"}
                    text={"Upgrade your outdoor space with earthy essentials."}
                    button={"Shop now"}
                />
                <Magazine/>
                <Footer/>
            </main>
        </>
    )
}


