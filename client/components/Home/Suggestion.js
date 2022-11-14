import styles from "../../styles/Home/Suggestion.module.scss";

export default function Suggestion(){
    return (
        <div className={styles.wrapper}>
            <div className={styles.suggestion}>
                <div className={styles.header}>
                    <div className={styles.title}>Gợi ý hôm nay</div>
                </div>
                <div className={styles.content}></div>
            </div>
        </div>
    )
}