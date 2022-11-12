import Head from "next/head";
import styles from "../styles/Home.module.scss";

import Layout from "../layouts";
import Home from "../components/Home";

export default function App() {
    return (
        <div className={styles.container}>
            <Head>
                <meta name="viewport" content="width=1240,shrink-to-fit=no" />
                <title>Shopee</title>
            </Head>
            <Layout>
                <Home />
            </Layout>
        </div>
    );
}
