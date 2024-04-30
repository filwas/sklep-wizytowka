import { raleway } from "./ui/fonts";
import styles from "./layout.module.css";
import Header from "./ui/Header";
import { Providers } from "./providers";

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
      <body className={`${raleway.className} antialised`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
