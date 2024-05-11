'use client'

import useIsSmallScreen from "@/utils/useIsSmallScreen";
import styles from "./Footer.module.css";
import FacebookIcon from "../icons/FacebookIcon";
import MessengerIcon from "../icons/MessengerIcon";
import ShitterIcon from "../icons/ShitterIcon";
import TwitterIcon from "../icons/TwitterIcon";
import WhatsappIcon from "../icons/WhatsappIcon";
import classNames from "classnames";

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
        <TwitterIcon />
        <ShitterIcon />
        <WhatsappIcon />
        <FacebookIcon />
        <MessengerIcon />
      </div>
      2024
    </div>
  );
};

export default Footer;
