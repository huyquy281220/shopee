import Head from "next/head";
import styles from "../styles/Home.module.scss";

import Header from "../components/Header";
import Banner from "../components/Home/Banner.js";
import SubCategory from "../components/Home/SubCategory";
import Category from "../components/Home/Category";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <meta name="viewport" content="width=1240,shrink-to-fit=no" />
                <title>Shopee</title>
            </Head>
            <Header />
            <Banner />
            <SubCategory />
            <Category />
        </div>
    );
}
