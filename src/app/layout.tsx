import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter, Sora } from "next/font/google";
import { Nunito, Roboto, Montserrat, Raleway } from "next/font/google";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import ReduxWrapper from "@/components/_app";
// const nunito = Nunito({
//   subsets: ["latin"],
// });

// const mont = Montserrat({
//   weight: ["100", "200",'300', "400", "500",'600', "700", "900"],
//   subsets: ["latin", "latin-ext"],
//   variable: "--font-mont",
// });

// const openSans = Raleway({
//   weight: ["100", "200",'300', "400", "500",'600', "700", "900"],
//   subsets: ["latin", "latin-ext"],
//   variable: "--font-opensans",
// });

// const roboto = Roboto({
//   variable: "--roboto-font",
//   weight: ["100", "300", "400", "500", "700", "900"],
//   subsets: ["latin"],
// });

const sora = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin", "latin-ext"],
});

export const metadata = {
  title: "HackathonONE",
  description: "A Project assignment of PIAIC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <ReduxWrapper>
        <Navbar />
        {children}
        <Footer />
        </ReduxWrapper>
        </body>
    </html>
  );
}
