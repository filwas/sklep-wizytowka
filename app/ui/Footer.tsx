import styles from "./Footer.module.css";
import FacebookIcon from "./icons/FacebookIcon";
import MessengerIcon from "./icons/MessengerIcon";
import ShitterIcon from "./icons/ShitterIcon";
import TwitterIcon from "./icons/TwitterIcon";
import WhatsappIcon from "./icons/WhatsappIcon";

interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
    <div className={styles.footerWrapper}>
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
