"use client";

import { useState, useEffect } from "react";

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
  return <p>{fileContents}</p>;
};

export default TextElement;
