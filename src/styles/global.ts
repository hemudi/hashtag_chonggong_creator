import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import theme from "@styles/theme";

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    html {
        height: 100%;
        font-size: 62.5%; // rem sizing
    }

    body {
        height: 100%;
        color: ${theme.palette.black};
        font-size: 1.6rem;
        font-weight: 400;
        font-family: 'Noto Sans KR', sans-serif;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: -0.4px;
      }

    a {
        text-decoration: none;
        color: inherit;
    }

    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }

    input:focus {
      outline: none;
    }

    input, button {
      padding: 0;
      background: none;
      border: none;
      outline: none;
   }

    button {
      margin: 0;
      border: none;
      cursor: pointer;
    }
`;

export default GlobalStyles;
