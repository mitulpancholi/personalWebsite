import { Oswald, Poppins } from "next/font/google";

export const oswald = Oswald({ subsets: ["latin"] });
export const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  style: ["normal"],
});
