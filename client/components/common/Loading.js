import styles from "../../styles/common/Loading.module.scss";

export default function Loading() {
    return <div className={styles.wrapper}>
        <div className={styles.dot_elastic}></div>
    </div>;
}
