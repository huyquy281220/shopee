import Head from "next/head";
import styles from "../styles/Home.module.scss";

import Home from "../components/Home";

export default function App(props) {
    // console.log(props)
    return (
        <div className={styles.container}>
            <Head>
                <meta name="viewport" content="width=1240,shrink-to-fit=no" />
                <title>Shopee</title>
            </Head>
            <Home homeData={props} />
        </div>
    );
}

export async function getServerSideProps() {
    const [productsRes,categoriesRes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_API}/product/get-all`),
        fetch(`${process.env.NEXT_PUBLIC_API}/category/get-all`)
    ])

    const [products, categories] = await Promise.all([
        productsRes.json(),
        categoriesRes.json()
    ])

    return {
        props: {
            products,
            categories,
        },
    };
}
