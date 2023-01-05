import "../styles/globals.css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { SessionProvider } from "next-auth/react";

import store from "../redux/store";
import MainLayout from "../layouts";

function MyApp({ Component, pageProps, session }) {
    // let persistor = persistStore(store);
    const Layout = Component.Layout ?? MainLayout;

    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                {/* <PersistGate loading={null} persistor={persistor}> */}
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                {/* </PersistGate> */}
            </Provider>
        </SessionProvider>
    );
}

export default MyApp;
