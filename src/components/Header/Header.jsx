import { useState } from "react";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  console.log(isOpen)

  return (
    <header className={`${styles.header} ${isOpen ? styles.open : ""}`}>
      <div className={`${styles.container} ${styles.header__container}`}>
        <div className={styles.header__logo}>
          <a href="/" className={styles.header__logo_link}>
            <img className={styles.header__logo_img} src={logo} alt="logo" />
          </a>
          <p className={styles.header__logo_text}>Logo</p>
        </div>

        <button className={styles.header__burger_btn} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={styles.menu}>
        <span className={styles.menu__separator}></span>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <a href="#" className={styles.menu__link}>
                Features
              </a>
            </li>
            <span className={styles.menu__separator}></span>
            <li className={styles.menu__item}>
              <a href="#" className={styles.menu__link}>
                About
              </a>
            </li>
            <span className={styles.menu__separator}></span>
            <li className={styles.menu__item}>
              <a href="#" className={styles.menu__link}>
                Blog
              </a>
            </li>
            <span className={styles.menu__separator}></span>
            <li className={styles.menu__item}>
              <a href="#" className={styles.menu__link}>
                Contacts
              </a>
            </li>
            <span className={styles.menu__separator}></span>
          </ul>

          <button className={styles.menu__button}>Button</button>
        </nav>
      </div>
    </header>
  );
};
