import styles from "../../styles/common/Toast.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Toast({ display }) {
    return (
        <div className={styles.wrapper} style={{ display: display }}>
            <div className={styles.content}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faCheck} />
                </div>
                <p className={styles.text}>Sản phẩm đã được thêm vào giỏ hàng</p>
            </div>
        </div>
    );
}
