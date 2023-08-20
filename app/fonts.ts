import { Lato, Raleway, Roboto} from "next/font/google";


export const bigTitle = Raleway({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
})

export const littleTitle = Lato({
  weight: ["900","700","400"],
  subsets: ["latin"],
  display: "swap",
});

export const paragraph = Roboto({
  weight: "300",
  subsets: ["latin"],
  display: "swap"
})

