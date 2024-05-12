"use client";
import useIsSmallScreen from "@/utils/useIsSmallScreen";
import styles from "./UpButton.module.css";
import useGetScrollY from "@/utils/useGetScrollY";
import classNames from "classnames";
import UpButtonIcon from "../icons/UpButtonIcon";
import { useEffect, useState } from "react";

interface UpButtonProps {}

export default function UpButton(props: UpButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const isSmallScreen = useIsSmallScreen(768);
  const isHeaderVisible = useGetScrollY() <= 30;

  const upButtonWrapperStyles = classNames(
    styles.upButtonWrapper,
    isSmallScreen && !isHeaderVisible && isVisible ? styles.visibilityStyle : ""
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    function handleTouch() {
      setIsVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsVisible(false), 2000); // Hide after 2 seconds
    }

    window.addEventListener("touchstart", handleTouch);

    return () => {
      window.removeEventListener("touchstart", handleTouch);

      clearTimeout(timeout);
    };
  }, []);

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
