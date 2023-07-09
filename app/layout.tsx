import "./globals.css";
import { Roboto_Serif } from "next/font/google";

const robotoerif = Roboto_Serif({ subsets: ["latin"] });

export const metadata = {
  title: "O Universo Witcher",
  description: "Saiba tudo sobre o mundo de The Witcher",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${robotoerif.className} bg-kaer bg-cover bg-fixed bg-no-repeat`}>
        {children}
      </body>
    </html>
  );
}
