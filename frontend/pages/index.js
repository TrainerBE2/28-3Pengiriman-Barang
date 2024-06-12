import React, { useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import Footer from "@/components/Footer/Footer";
import ScrollUp from "@/components/ScrollUp/ScrollUp";
import styles from "@/components/Main/Home/Home.module.scss";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (header) {
        if (window.scrollY >= 80) {
          header.classList.add(styles["scroll-header"]);
        } else {
          header.classList.remove(styles["scroll-header"]);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>React Responsive Delivery Landing Page</title>
        <meta
          name="description"
          content="React Responsive Delivery Landing Page"
        />
        <link rel="icon" href="/images/favicon.png" />
        <link
          href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <Header id="header" />
      <Main />
      <Footer />
      <ScrollUp />
    </div>
  );
}
