"use client";

import { useState, useEffect } from "react";
import styles from "./TextElement.module.css";

interface TextElementProps {
  textSourceUrl: string;
}
const TextElement = (props: TextElementProps) => {
  const [fileContents, setFileContents] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(props.textSourceUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const text = await response.text();
        setFileContents(text);
      } catch (error) {
        console.error("Error fetching file:", error);
      }
    };

    fetchData();
  }, []);

  const parseLinksToClickable = (text: string) => {
    const emailRegex = /([\w.-]+)@([\w.-]+\.[a-zA-Z]{2,4})/g;
    const urlRegex =
      /(?:^|\s)((?:https?:\/\/)?(?:www\.)?[\w.-]+\.[a-zA-Z]{2,}(?:\/\S*)?)(?:\s|$)/gi;

    const textWithEmailLinks = text.replace(
      emailRegex,
      '<a href="mailto:$&">$&</a>'
    );

    const textWithClickableLinks = textWithEmailLinks.replace(
      urlRegex,
      '<a href="$&" target="_blank">$&</a>'
    );

    return textWithClickableLinks;
  };

  return (
    <div className={styles.textContainer}>
      <pre
        className={styles.textElement}
        dangerouslySetInnerHTML={{
          __html: parseLinksToClickable(fileContents),
        }}
      />
    </div>
  );
};

export default TextElement;
