import styled from "styled-components"

const Container = styled.div`
    background: var(--red-1);
    box-shadow: 0px 4px 30px -10px var(--box-shadow);

    header {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
        max-width: 1200px;
        min-height: 60px;
        margin: 0 auto;
        margin-bottom: 20px;
        padding: 1.5rem;
        text-align: center;
        color: var(--white);
    }

    h1 {
        font: var(--title-1);
    }

    div {
        font: var(--headline-shorter);
        display: flex;
        gap: 5px;
        align-items: center;
    }

    input {
        border-radius: 10px;
        padding: 3px 5px;
        background: var(--grey-0);
    }

    svg {
        font: var(--title-3);
        cursor: pointer;
    }

    @media (min-width: 410px) {
        header {
            justify-content: space-between;
        }

        svg {
            font: var(--title-1)
        }
    }
`

export default Container