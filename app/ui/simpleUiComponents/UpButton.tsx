"use client";
import useIsSmallScreen from "@/utils/useIsSmallScreen";
import styles from "./UpButton.module.css";
import useGetScrollY from "@/utils/useGetScrollY";
import classNames from "classnames";
import UpButtonIcon from "../icons/UpButtonIcon";

interface UpButtonProps {}

export default function UpButton(props: UpButtonProps) {
  const isSmallScreen = useIsSmallScreen(768);
  const isHeaderVisible = useGetScrollY() <= 30;

  const upButtonWrapperStyles = classNames(
    styles.upButtonWrapper,
    isSmallScreen && !isHeaderVisible ? styles.visibilityStyle : ""
  );

  function scrollToTop(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className={upButtonWrapperStyles} onClick={scrollToTop}>
      <UpButtonIcon />
    </div>
  );
}
