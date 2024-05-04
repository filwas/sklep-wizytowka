import { raleway } from "./ui/fonts";
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/public/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/public/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="/public/apple-touch-icon.png"
          type="image/png"
          sizes="any"
        />
      </head>
      <body className={`${raleway.className} antialised`} style={{ margin: 0 }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
