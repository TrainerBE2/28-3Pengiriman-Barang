import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ThemeChanger from "./ThemeChanger/ThemeChanger";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import classNames from "classnames";
import layout from "@/styles/Layout.module.scss";
import style from "./Header.module.scss";
import Link from "next/link";

function Header() {
  const [toggle, setToggle] = useState(false);
  const { width } = useWindowDimensions();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (header) {
        if (window.scrollY >= 80) {
          header.classList.add(style["scroll-header"]);
        } else {
          header.classList.remove(style["scroll-header"]);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navMenu = document.querySelector(`.${style.nav__menu}`);
      if (navMenu) {
        const sectionList = document.querySelectorAll("section[id]");
        sectionList.forEach((section) => {
          const sectionId = section.getAttribute("id");
          const querySelector = `.${style.nav__menu} a[href*='${sectionId}']`;
          const menuItem = document.querySelector(querySelector);
          if (menuItem) {
            const scrollY = window.scrollY;
            const sectionTop = section.offsetTop - 50;
            if (
              scrollY > sectionTop &&
              scrollY <= sectionTop + section.offsetHeight
            ) {
              menuItem.classList.add(style["nav__link--active"]);
            } else {
              menuItem.classList.remove(style["nav__link--active"]);
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const clickHandler = (e) => {
    if (e.target.tagName === "A") {
      setToggle(!toggle);
    }
  };

  return (
    <header className={style.header} id="header">
      <nav className={classNames([style.nav], [layout.container])}>
        <a href="#" className={style.nav__logo} title={t("header.logo")}>
          {t("header.logo")}
        </a>
        <div
          className={classNames({
            [style.nav__menu]: true,
            [style["menu-show"]]: toggle || width >= 767,
          })}
        >
          <ul className={style.nav__list} onClick={clickHandler}>
            <li className={style.nav__item}>
              <a
                href="#home"
                title={t("header.nav.home")}
                className={style.nav__link}
              >
                {t("header.nav.home")}
              </a>
            </li>
            <li className={style.nav__item}>
              <a
                href="#about"
                title={t("header.nav.about")}
                className={style.nav__link}
              >
                {t("header.nav.about")}
              </a>
            </li>
            <li className={style.nav__item}>
              <a
                href="#services"
                title={t("header.nav.services")}
                className={style.nav__link}
              >
                {t("header.nav.services")}
              </a>
            </li>
            <li className={style.nav__item}>
              <a
                href="#contact"
                title={t("header.nav.contact")}
                className={style.nav__link}
              >
                {t("header.nav.contact")}
              </a>
            </li>
            <ThemeChanger />
          </ul>
        </div>
        <div className={style.nav__toggle} onClick={() => setToggle(!toggle)}>
          <i className="bx bx-grid-alt" />
        </div>
        <Link href="/login">
          <a
            className={classNames([layout.button], {
              [layout.hidden]: width < 960,
            })}
            title={t("header.order")}
          >
            {t("header.order")}
          </a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
