import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const theme = {
  breakpoints: ["480px", "760px", "1280px", "1440px"],
  colors: {
    white: "#fff",
    lightBlue: "#5cadff",
    blue: "#409FFF",
    blueOnHover: "#2C8BEA",
    green: "#42C468",
    purple: "#7A69E6",
    pink: "#FA5E92",
    yellow: "#FFCF56",
    orange: "#F98D5E",
    red: "#E83A3A",
    black: "#41566B",

    grey: {
      100: "#EEF2F4",
      200: "#E7EDF3",
      300: "#B3C0CE",
      400: "#6A7B89",
      500: "#60717F",
      600: "#5B6C7C",
    },
  },
  //TODO: check if we will need roboto font
  font: {
    sans: "Open Sans, Verdana, sans-serif",
    openSans: "Open Sans, Verdana, sans-serif",
  },
  fontSize: {
    //12px
    xs: "0.75rem",
    //14px
    sm: "0.875rem",
    //16px
    base: "1rem",
    //18px
    lg: "1.125rem",
    //20px
    xl: "1.25rem",
    //24px
    "2xl": "1.5rem",
    //30px
    "3xl": "2.125rem",
    //34px
    "4xl": "2.125rem",
  },
  fontWeight: {
    hairline: "100",
    thin: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },

  spacing: {
    px: "1px",
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
    40: "10rem",
    48: "12rem",
    56: "14rem",
    64: "16rem",
  },
  lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
}

//global style
export const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *:before, *:after {
      box-sizing: border-box;
  }
  html {
      box-sizing: border-box;
      scroll-behaviour: smooth;
  }
  body {
    line-height: ${({ theme }) => theme.lineHeight.normal};
    letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
    background-color: ${({ theme }) => theme.colors.white};
    font-family: 'Open Sans', Verdana, sans-serif;
    font-size: ${({ theme }) => theme.font.lg};
    color: ${({ theme }) => theme.colors.grey[900]};
  }
  a {
   text-decoration: none;
  }
`
