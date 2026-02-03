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
    <div className="p-2 rounded-lg bg-white dark:bg-white transition-all duration-300">
      <QRCodeSVG
        value="https://www.youmake.dev/"
        size={60}
        bgColor={isDarkMode ? "#FFFFFF" : "#FFFFFF"}
        fgColor={isDarkMode ? "#000000" : "#000000"}
        level="M"
        includeMargin={false}
      />
    </div>
  );
}
