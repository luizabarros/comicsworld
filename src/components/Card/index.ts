import styled from "styled-components"

const List = styled.ul`
    max-width: 1200px;
    display: flex;
    gap: 10px;
    padding: 1.5rem;
    margin: 0 auto;
    overflow-x: auto;

    li {
        width: 207px;
        height: 300px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        border-radius: 10px;
    }

    img, h2, p:nth-of-type(2) {
        cursor: pointer;
    }

    div {
        background: var(--red-1);
        width: 100%;
        height: 180px;
        padding: 1.5rem 0;
        text-align: center;
        border-radius: 8px 8px 0px 0px;
    }

    img {
        width: 90px;
        height: 141px;
        object-fit: cover;
        transition: .5s;
    }

    img:hover {
        transform: scale(105%);
    }

    h2 {
        font: var(--title-2);
        width: 200px;
        height: 50px;
        text-align: center;
    }
    
    h2:hover, p:nth-of-type(2):hover {
        text-decoration: underline;
    }

    p {
        font: var(--headline);
    }

    @media (min-width: 800px) {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
`

export default List