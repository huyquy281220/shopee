import Images from "../../assets/img";
import styles from "../../styles/Header/Header.module.scss";
import Navbar from "./Navbar";
import Search from "./Search";

export default function Header() {
    return (
        <div className={styles.wrapper}>
            <Navbar />
            <Search />
        </div>
    );
}
