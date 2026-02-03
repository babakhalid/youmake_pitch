"use client";

import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";

export function QRCode() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check initial mode
    const checkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkMode();

    // Watch for class changes on html element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkMode();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <QRCodeSVG
      value="https://pitch.youmake.dev/"
      size={80}
      bgColor="transparent"
      fgColor={isDarkMode ? "#FFFFFF" : "#000000"}
      level="M"
      includeMargin={false}
    />
  );
}
