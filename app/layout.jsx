import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400"],
  display: "swap",
});

const sans = {
  fontFamily: "Arial, Helvetica, sans-serif",
  weight: ["100", "300", "400", "700"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.className} font-sans`}>
      <body>{children}</body>
    </html>
  );
}
