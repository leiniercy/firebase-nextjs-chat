import React from "react";
import "@styles/globals.css";
import { LanguageProvider } from "@context/LenguageContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
