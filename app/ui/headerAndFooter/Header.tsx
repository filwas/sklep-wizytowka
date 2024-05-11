"use client";

import styles from "./Header.module.css";
import { Folder } from "../../types/types";
import classNames from "classnames";
import useIsSmallScreen from "@/utils/useIsSmallScreen";
import useGetScreenWidth from "@/utils/useGetScreenWidth";
import { useState } from "react";

interface HeaderProps {
  folders: string[];
}
const Header = (props: HeaderProps) => {
  function scrollToSegment(event: React.MouseEvent<HTMLAnchorElement>) {
    console.log(screenWidth);
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = document.getElementById(targetId || "");

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    } else if (targetId === "") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }
  const screenWidth = useGetScreenWidth()
  const isSmallScreen = screenWidth <= 768;
  const [isSmallMenuOpen, setIsSmallMenuOpen] = useState(false)
  


  const headerWrapper = classNames(
    styles.headerWrapper,
    isSmallScreen ? styles.smallHeaderWrapper : ""
  );

  return (
    <div className={headerWrapper}>
      <a href="#" onClick={scrollToSegment}>
        OGRODOWY CHILLOUT
      </a>
      <div className={styles.rightSideWrap}>
        <a href="#O nas" onClick={scrollToSegment}>
          O NAS
        </a>
        {props.folders.map((folder, i) => {
          const folderName = folder.replaceAll(/\d+/gi, "");
          return (
            <a href={`#${folder}`} onClick={scrollToSegment} key={i}>
              {folderName.toUpperCase()}
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
