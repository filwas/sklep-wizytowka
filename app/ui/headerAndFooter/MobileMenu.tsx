"use client";
import scrollToSegment from "@/app/helpers/scrollToSegment";
import styles from "./MobileMenu.module.css";
import classNames from "classnames";
import CrossIcon from "../icons/CrossIcon";

interface MobileMenuProps {
  isOpen: boolean;
  closeHandler: () => void;
  folders: string[];
}
const MobileMenu = (props: MobileMenuProps) => {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    props.closeHandler();
    scrollToSegment(event);
  }

  const mobileMenuWrapper = classNames(
    styles.mobileMenuWrapper,
    props.isOpen ? styles.visible : ""
  );
  return (
    <div className={mobileMenuWrapper}>
      <a href="#" onClick={handleClick}>
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
      <button onClick={props.closeHandler}>
        <CrossIcon />
      </button>
    </div>
  );
};

export default MobileMenu;
