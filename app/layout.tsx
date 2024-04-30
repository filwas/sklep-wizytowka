import { raleway } from "./ui/fonts";
import styles from "./layout.module.css";
import Header from "./ui/Header";

export const metadata = {
  title: "Sauny",
  description: "budujemy sauny",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialised ${styles.bodyStyle}`}>
        {children}
      </body>
    </html>
  );
}
