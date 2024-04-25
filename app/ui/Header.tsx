"use client";

import { MouseEventHandler } from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  folderLinks: string[];
}

const Header = (props: HeaderProps) => {
  function scrollToSegment(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")?.substring(1); // Extract the target segment ID
    const targetElement = document.getElementById(targetId || ""); // Get the target segment element

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className={styles.headerWrapper}>
      <p>SAUNY</p>
      <div className={styles.rightSideWrap}>
        <a href="#O nas" onClick={scrollToSegment}>O NAS</a>
        {props.folderLinks.map((link) => {
          return (
            <a href={`#${link}`} onClick={scrollToSegment}>
              {link.split("/")[1].toUpperCase()}
            </a>
          );
        })}
        <a>KONTAKT</a>
      </div>
    </div>
  );
};

export default Header;
