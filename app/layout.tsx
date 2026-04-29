import type { Metadata } from "next";
import { Anton, Poppins } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tovar Landscape LLC | Nashville's Premier Landscaping Company",
  description:
    "Tovar Landscape LLC — Nashville's most trusted landscaping company. Landscaping, Hardscape, Excavation, Tree Services & more. Family owned. Fully insured. Free estimates. Call 615-919-4742.",
  keywords:
    "landscaping Nashville, hardscape Nashville, lawn care Nashville, excavation Nashville, tree services Nashville, Gallatin landscaping, Brentwood landscaping, Franklin landscaping",
  openGraph: {
    title: "Tovar Landscape LLC | Built to Last. Done Right.",
    description:
      "8+ years serving Nashville, Gallatin, Brentwood & Franklin. Family owned. Fully insured. Free estimates.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${poppins.variable}`}>
      <body className="font-poppins text-white antialiased">
        {children}
      </body>
    </html>
  );
}
