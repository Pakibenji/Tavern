import { Lato, Raleway, Roboto, Bebas_Neue} from "next/font/google";


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

export const dateFont = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap"
})

