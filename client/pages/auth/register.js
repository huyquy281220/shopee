import styles from "../../styles/Auth/Auth.module.scss";
import images from "../../assets/img";
import EmptyLayout from "../../layouts/EmptyLayout";

import { useState, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

export default function Register() {
    const router = useRouter();
    const [isToggle, setIsToggle] = useState(false);
    const [error, setError] = useState("");
    const emailRef = useRef("");
    const pwdRef = useRef("");

    const hanldeTogglePassword = () => {
        setIsToggle(!isToggle);
    };

    const handleSetError = () => {
        setError("");
    };

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`http://localhost:4000/user/register`, {
                email: emailRef.current.value,
                password: pwdRef.current.value,
            });
            router.push("/auth/login");
        } catch (error) {
            setError(error.response?.data);
        }
    };

    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Đăng Ký</title>
            </Head>
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
                    <div className={styles.form}>
                        <form onSubmit={(e) => handleSignUp(e)}>
                            <div className={styles.form_header}>
                                <p>Đăng ký</p>
                            </div>
                            <div className={styles.form_content}>
                                <div className={styles.email}>
                                    <input type="email" ref={emailRef} placeholder="Email" autoComplete="on" maxLength={128} required onChange={handleSetError} />
                                </div>
                                <div className={styles.password}>
                                    <input type={isToggle ? "text" : "password"} ref={pwdRef} placeholder="Mật khẩu" maxLength={128} required pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$" title="Mật khẩu phải chứa ít nhất 1 chữ số, 1 chữ thường, 1 chữ hoa và không chứa ký tự đặc biệt. Độ dài từ 8 đến 20 ký tự." onChange={handleSetError} />
                                    <FontAwesomeIcon icon={isToggle ? faEyeSlash : faEye} className={styles.eye} onClick={hanldeTogglePassword} />
                                </div>
                                <p className={styles.error}>{error}</p>
                                <button type="submit" className={styles.btn_register}>
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

Register.Layout = EmptyLayout;
