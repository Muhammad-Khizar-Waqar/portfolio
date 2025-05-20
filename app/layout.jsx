import "../public/assets/css/vendors/bootstrap.min.css";
import "../public/assets/css/vendors/swiper-bundle.min.css";
import "../public/assets/css/vendors/carouselTicker.css";
import "../public/assets/css/vendors/magnific-popup.css";
import "../public/assets/fonts/remixicon/remixicon.css";
import "../public/assets/css/main.css";
import { Urbanist, Playfair_Display, DM_Mono } from "next/font/google";

const urbanist = Urbanist({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--urbanist",
  display: "swap",
});

export const metadata = {
  title: "Muhammad Khizar Waqar",
  description: "Software Engineer, Full Stack Developer, Web Developer",
  keywords: "Software Engineer, Full Stack Developer, Web Developer, ",
  authors: [{ name: "Muhammad Khizar Waqar" }],
  creator: "Muhammad Khizar Waqar",
  publisher: "Muhammad Khizar Waqar",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' data-bs-theme='dark' className='khizar'>
      <body className={`${urbanist.variable}`}>{children}</body>
    </html>
  );
}
