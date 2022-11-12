import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
}
