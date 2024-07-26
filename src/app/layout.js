import { Manrope } from "next/font/google";
import "./globals.css";
import CommonLayout from "./components/CommonLayout";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Food Delivery",
  description: "A demo app on food delivery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <CommonLayout>
          {children}
        </CommonLayout>
      </body>
    </html>
  );
}
