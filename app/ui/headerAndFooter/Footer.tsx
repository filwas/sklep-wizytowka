"use client";

import useIsSmallScreen from "@/utils/useIsSmallScreen";
import styles from "./Footer.module.css";
import FacebookIcon from "../icons/FacebookIcon";
import MessengerIcon from "../icons/MessengerIcon";
import ShitterIcon from "../icons/ShitterIcon";
import TwitterIcon from "../icons/TwitterIcon";
import WhatsappIcon from "../icons/WhatsappIcon";
import classNames from "classnames";
import InstaIcon from "../icons/InstaIcon";

interface FooterProps {}

const Footer = (props: FooterProps) => {
  const isSmallScreen = useIsSmallScreen(768);

  const footerWrapperStyle = classNames(
    styles.footerWrapper,
    isSmallScreen ? styles.smallFooterWrapper : ""
  );
  return (
    <div className={footerWrapperStyle}>
      <div className={styles.iconsWrapper}>
        <a href="https://www.instagram.com/ogrodowy.chillout/" target="_blank">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/ogrodowy.chillout/" target="_blank">
          <InstaIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
