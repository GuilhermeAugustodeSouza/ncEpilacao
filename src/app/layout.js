
import "./globals.css";


export const metadata = {
  title: "NC epiladora",
  description: "Depilação/epilação",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={''}>
        {children}
      </body>
    </html>
  );
}
