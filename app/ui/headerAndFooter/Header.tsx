"use client";

import styles from "./Header.module.css";
import classNames from "classnames";
import useGetScreenWidth from "@/utils/useGetScreenWidth";
import { useEffect, useState } from "react";
import MobileMenuIcon from "../icons/MobileMenuIcon";
import MobileMenu from "./MobileMenu";
import scrollToSegment from "@/app/helpers/scrollToSegment";

interface HeaderProps {
  folders: string[];
}
const Header = (props: HeaderProps) => {
  const screenWidth = useGetScreenWidth();
  const isSmallScreen = screenWidth <= 768;
  const [isSmallMenuOpen, setIsSmallMenuOpen] = useState(false);


  const headerWrapper = classNames(
    styles.headerWrapper,
    isSmallScreen ? styles.smallHeaderWrapper : ""
  );

  useEffect(() => {
    if (isSmallMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSmallMenuOpen]);

  return (
    <>
      <div className={headerWrapper}>
        <a href="#" onClick={scrollToSegment}>
          OGRODOWY CHILLOUT
        </a>
        {isSmallScreen ? (
          <div className={styles.mobileMenuIcon} onClick={()=>{setIsSmallMenuOpen(true)}}>
            <MobileMenuIcon />
          </div>
        ) : (
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
        )}
      </div>
      <MobileMenu
        isOpen={isSmallMenuOpen}
        folders={props.folders}
        setIsOpen={setIsSmallMenuOpen}
      />
    </>
  );
};

export default Header;
