import styles from "./Header.module.css";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <div className={styles.headerWrapper}>
      <p>Sauny</p>
      <div className={styles.rightSideWrap}>
        <a href="">linek1</a>
        <a href="">linek2</a>
        <a href="">linek3</a>
        <a href="">linek4</a>
      </div>
    </div>
  );
};

export default Header;
