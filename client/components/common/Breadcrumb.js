import styles from "../../styles/common/Breadcrumb.module.scss";

import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Breadcrumbs(props) {
    const { listBreadcrumbs } = props;
    const { query } = useRouter();

    return (
        <nav className={styles.wrapper}>
            <ol className={styles.items}>
                {listBreadcrumbs.length > 0 &&
                    listBreadcrumbs.map((item, index) => {
                        return (
                            <li className={styles.item} key={item}>
                                <Link href="/" className={styles.name}>
                                    {item}
                                </Link>
                                <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
                            </li>
                        );
                    })}
            </ol>
        </nav>
    );
}
