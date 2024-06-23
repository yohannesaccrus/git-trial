import Head from "next/head";

import "milligram/dist/milligram.min.css";
import "../public/style/index.scss";

export const metadata = {
  title: "Git Trial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
