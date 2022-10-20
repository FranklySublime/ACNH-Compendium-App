import { createGlobalStyle } from "styled-components";

export const breakpoints = { tablet: "600px" };

export default createGlobalStyle`
    :root {
      --primary-color: #2EC4B6;
      --accent-color: #CBF3F0;
      --just-white: #FFFFFF;
      --faded-color: #FFBF69;
      --background-fade: rgba(255, 191, 105, 0.6);
      --secondary-color: #FF9F1C;
      --page-horizontal-padding: 20px;
      --header-height: 50px;
      --max-content-width: 1200px;
      --font-heading: 'Teko', sans-serif;
    }

    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        width: 100%;
        height: 100%;
        background-color: var(---accent-color);
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }

    /* universal button */
    button {
        color: var(--just-white);
        background: var(--primary-color);
        border-radius: 20px;
        border: none;
        cursor: pointer;
        padding: 10px;
        margin: 15px;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    } 
`;
