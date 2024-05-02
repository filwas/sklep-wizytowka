"use client";

import styles from "./Header.module.css";
import { Folder } from "../types/types";

interface HeaderProps {
  folders: Folder[];
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
      <a href="#" onClick={scrollToSegment}>
        SAUNY
      </a>
      <div className={styles.rightSideWrap}>
        <a href="#O nas" onClick={scrollToSegment}>
          O NAS
        </a>
        {props.folders.map((folder, i) => {
          return (
            <a href={`#${folder.name}`} onClick={scrollToSegment} key={i}>
              {folder.name.toUpperCase()}
            </a>
          );
        })}
        <a href="#Kontakt" onClick={scrollToSegment}>
          KONTAKT
        </a>
      </div>
    </div>
  );
};

export default Header;
