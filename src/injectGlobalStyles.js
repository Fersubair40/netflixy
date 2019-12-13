import { createGlobalStyle } from "styled-components";

export default () => createGlobalStyle`
    a::before,
    *::after,
    * {
        box-sizing: border-box;
    }
    html,
    body {
        height: 100%;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
    }
    #root{
        min-height: 100vh;
    }
`;
