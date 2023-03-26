import styled from "styled-components"

const Container = styled.div`
    min-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    text-align: center;
    padding: 1.5rem;

    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    h2 {
        font: var(--title-2);
    }

    p, button {
        font: var(--headline);
    }

    button {
        background: var(--grey-4);
        color: var(--white);
        min-width: 50px;
        min-height: 20px;
        border-radius: 10px;
        padding: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    img {
        width: 500px;
    }

    @media (min-width: 700px) {
        flex-direction: row;
        justify-content: space-evenly;

        h2 {
        font: var(--title-4);
        }

        p, button {
            font: var(--title-3);
            font-weight: 400;
        }

        div {
            gap: 15px;
        }
    }
`

export default Container