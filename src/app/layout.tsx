import "./globals.css";

export const metadata = {
  title: "GSAP animations",
  description: "Practicing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
