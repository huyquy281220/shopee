import styles from "../../styles/Auth/Auth.module.scss";
import images from "../../assets/img";
import { userSelector, login } from "../../redux/slices/user";
import EmptyLayout from "../../layouts/EmptyLayout";

import { signIn } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
    const router = useRouter();
    const [isToggle, setIsToggle] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const { success } = useSelector(userSelector);

    const hanldeTogglePassword = () => {
        setIsToggle(!isToggle);
    };

    const handleLogin = async () => {
        dispatch(login({ email, password }));
        if (success === true) {
            router.push("/");
        }
    };

    const handleGgLogin = () => {
        signIn("google");
    };

    const handleFbLogin = () => {
        signIn("facebook");
    };

    return (
        <div className={styles.wrapper}>
            <header>
                <div className={styles.header_left}>
                    <Link href="/">
                        <Image src={images.auth_logo} alt="logo" className={styles.logo} />
                    </Link>
                    <div className={styles.title}>Đăng nhập</div>
                </div>
                <a href="https://help.shopee.vn/portal" className={styles.help}>
                    Bạn cần giúp đỡ ?
                </a>
            </header>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div></div>
                    {/* <form> */}
                    <div className={styles.form}>
                        <div className={styles.form_header}>
                            <p>Đăng nhập</p>
                        </div>
                        <div className={styles.form_content}>
                            <div className={styles.email}>
                                <input type="email" name="email" value={email} placeholder="Email/Số điện thoại/Tên đăng nhập" autoComplete="on" maxLength={128} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className={styles.password}>
                                <input type={isToggle ? "text" : "password"} value={password} name="password" placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)} />
                                <FontAwesomeIcon icon={isToggle ? faEyeSlash : faEye} className={styles.eye} onClick={hanldeTogglePassword} />
                            </div>
                            <button className={styles.btn_login} onClick={handleLogin}>
                                Đăng nhập
                            </button>
                            <div className={styles.other_login}>
                                <Link href="#" legacyBehavior>
                                    <a className={styles.other_login_item}>Quên mật khẩu</a>
                                </Link>
                                <span className={styles.other_login_item}>Đăng nhập với SMS</span>
                            </div>
                            <div className={styles.social_login}>
                                <div className={styles.social_login_top}>
                                    <div className={styles.line}></div>
                                    <span>Hoặc</span>
                                    <div className={styles.line}></div>
                                </div>
                                <div className={styles.social_login_bottom}>
                                    <a href="#" className={styles.social_link} onClick={handleFbLogin}>
                                        <Image src={images.logo_fb} alt="logo" className={styles.social_logo} />
                                        <span>Facebook</span>
                                    </a>
                                    <a href="#" className={styles.social_link} onClick={handleGgLogin}>
                                        <Image src={images.logo_gg} alt="logo" className={styles.social_logo} />
                                        <span>Google</span>
                                    </a>
                                    <a href="#" className={styles.social_link}>
                                        <Image src={images.logo_apple} alt="logo" className={styles.social_logo} />
                                        <span>Apple</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.form_footer}>
                            <span className={styles.form_footer_question}>Bạn mới biết đến Shopee?</span>
                            <Link href="/auth/register" legacyBehavior>
                                <a className={styles.form_footer_link}>Đăng ký</a>
                            </Link>
                        </div>
                    </div>
                    {/* </form> */}
                </div>
            </div>
        </div>
    );
}

Login.Layout = EmptyLayout;
