import Head from "next/head";

import Home from "../components/Home";

export default function App(props) {
    return (
        <>
            <Head>
                <title>Shopee</title>
            </Head>
            <Home homeData={props} />
        </>
    );
}

export async function getServerSideProps() {
    const [productsRes, categoriesRes] = await Promise.all([fetch(`${process.env.NEXT_PUBLIC_API}/product/get-all?limit=12`), fetch(`${process.env.NEXT_PUBLIC_API}/category/get-all`)]);

    const [products, categories] = await Promise.all([productsRes.json(), categoriesRes.json()]);

    return {
        props: {
            products,
            categories,
        },
    };
}
