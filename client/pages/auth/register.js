import styles from "../../styles/Auth/Auth.module.scss";
import images from "../../assets/img";
import EmptyLayout from "../../layouts/EmptyLayout";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

export default function Register() {
    const [isToggle, setIsToggle] = useState(false);

    const hanldeTogglePassword = () => {
        setIsToggle(!isToggle);
    };

    return (
        <div className={styles.wrapper}>
            <header>
                <div className={styles.header_left}>
                    <Link href="/">
                        <Image src={images.auth_logo} alt="logo" className={styles.logo} />
                    </Link>
                    <div className={styles.title}>Đăng ký</div>
                </div>
                <a href="https://help.shopee.vn/portal" className={styles.help}>
                    Bạn cần giúp đỡ ?
                </a>
            </header>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div></div>
                    <form action="">
                        <div className={styles.form}>
                            <div className={styles.form_header}>
                                <p>Đăng ký</p>
                            </div>
                            <div className={styles.form_content}>
                                <div className={styles.email}>
                                    <input type="email" placeholder="Email/Số điện thoại/Tên đăng nhập" autoComplete="on" maxLength={128} />
                                </div>
                                <div className={styles.password}>
                                    <input type={isToggle ? "text" : "password"} placeholder="Mật khẩu" maxLength={128} />
                                    <FontAwesomeIcon icon={isToggle ? faEyeSlash : faEye} className={styles.eye} onClick={hanldeTogglePassword} />
                                </div>
                                <button className={styles.btn_register} disabled>
                                    Đăng ký
                                </button>
                                <div className={styles.social_login}>
                                    <div className={styles.social_login_top}>
                                        <div className={styles.line}></div>
                                        <span>Hoặc</span>
                                        <div className={styles.line}></div>
                                    </div>
                                    <div className={styles.social_login_bottom}>
                                        <a href="#" className={styles.social_link}>
                                            <Image src={images.logo_fb} alt="logo" className={styles.social_logo} />
                                            <span>Facebook</span>
                                        </a>
                                        <a href="#" className={styles.social_link}>
                                            <Image src={images.logo_gg} alt="logo" className={styles.social_logo} />
                                            <span>Google</span>
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.note}>
                                    <span>
                                        Bằng việc đăng kí, bạn đã đồng ý với Shopee về <br />
                                        <a href="https://shopee.vn/legaldoc/termsOfService/?__classic__=1">Điều khoản sử dụng</a>&<a href="https://shopee.vn/legaldoc/privacy/?__classic__=1">Chính sách bảo mật</a>
                                    </span>
                                </div>
                            </div>
                            <div className={styles.form_footer}>
                                <span className={styles.form_footer_question}>Bạn đã có tài khoản?</span>
                                <Link href="/auth/login" legacyBehavior>
                                    <a className={styles.form_footer_link}>Đăng nhập</a>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

Register.Layout = EmptyLayout;
