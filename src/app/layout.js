import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DSE Esports",
  description:
    "DarkSide eSports is dedicated to promoting diversity and inclusion in the gaming industry. We actively seek out underrepresented groups and provide them with opportunities to showcase their talents. We believe that diversity brings new perspectives, ideas, and innovation to the gaming community, and we strive to create a space where everyone feels welcome and valued.",
  icons: {
    icon: "/dse-logo.png", // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
