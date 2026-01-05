import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HangQuiz - Hangman Quiz Game",
  description: "Game quiz Hangman dengan kategori, 10 level, dan 5 kesempatan salah per level",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
