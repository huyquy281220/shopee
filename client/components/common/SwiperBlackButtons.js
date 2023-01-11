import styles from "../../styles/common/SwiperButtons.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function SwiperButtons(props) {
    const { swiperRef } = props;

    const handlePrev = () => {
        swiperRef.current.swiper.slidePrev();
    };

    const handleNext = () => {
        swiperRef.current.swiper.slideNext();
    };

    return (
        <>
            <button className={styles.cus_prev} onClick={handlePrev}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className={styles.cus_next} onClick={handleNext}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </>
    );
}
