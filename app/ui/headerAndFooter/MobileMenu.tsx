"use client";
import scrollToSegment from "@/app/helpers/scrollToSegment";
import styles from "./MobileMenu.module.css";
import classNames from "classnames";
import CrossIcon from "../icons/CrossIcon";
import { Dispatch, SetStateAction, useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  folders: string[];
}
const MobileMenu = (props: MobileMenuProps) => {
  const [isClosing, setIsClosing] = useState(false);
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    scrollToSegment(event);
    handleClose();
  }

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsClosing(false)
      props.setIsOpen(false)
    }, 750);
  }

  const mobileMenuWrapper = classNames(
    styles.mobileMenuWrapper,
    props.isOpen ? styles.visible : "",
    isClosing ? styles.closing : ""
  );

  return (
    <div className={mobileMenuWrapper}>
      <div className={styles.innerWrapper}>
        <a href="#" onClick={handleClick} style={{ fontSize: "24px" }}>
          OGRODOWY CHILLOUT
        </a>
        <a href="#O nas" onClick={handleClick}>
          O NAS
        </a>
        {props.folders.map((folder, i) => {
          const folderName = folder.replaceAll(/\d+/gi, "");
          return (
            <a href={`#${folder}`} onClick={handleClick} key={i}>
              {folderName.toUpperCase()}
            </a>
          );
        })}
        <a href="#Kontakt" onClick={handleClick}>
          KONTAKT
        </a>
      </div>
      <button onClick={handleClose}>
        <CrossIcon />
      </button>
    </div>
  );
};

export default MobileMenu;
