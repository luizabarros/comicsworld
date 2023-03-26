import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
    :root {
        font-size: 62.5%;
        --red-1: #9D0208;
        --red-2: #D00000;
        --red-3: #6A040F;
        --white: #fff;
        --black: #000;
        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2: #343B41;
        --grey-3: #212529;
        --grey-4: #121214;
        --box-shadow: #64646f33;
        --font-family: 'Inter', sans-serif;
        --title-1: 700 1.8rem var(--font-family);
        --title-2: 600 1.6rem var(--font-family);
        --title-3: 700 1.4rem var(--font-family);
        --headline: 400 1.2rem var(--font-family);
        --headline-bold: 600 1.2rem var(--font-family);
        --headline-shorter: 400 1rem var(--font-family);
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        list-style: none;
        text-decoration: none;
    }

    img {
        max-width: 100%;
    }
`

export default Global