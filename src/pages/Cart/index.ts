import styled  from "styled-components"

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 30px;

    h2 {
        font: var(--title-4);
        margin-bottom: 50px;
    }

    h3 {
        font: var(--title-2);
        margin-bottom: 10px;
    }

    img {
        max-width: 100%;
        width: 70px;
        height: 70px;
        object-fit: cover;
    }

    .startShopping a, .continueShopping a {
        font: var(--title-3);
        margin-top: 30px;
        display: flex;
        align-items: center;
        gap: 5px;
        height: max-content;
        color: var(--red-1);
    }

    .startShopping a:hover, .continueShopping a {
        text-decoration: underline;
    } 

    .titles {
        min-width: 60%;
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }

    .cartItems {
        min-width: 70%;
        height: 200px;
        overflow-y: scroll;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 1.5rem;
    }

    .cartItems li {
        min-width: 60%;
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 30px;
    }

    .cartProduct, .cartProduct div {
        display: flex;
        flex-direction: column;
        gap: 5px;
        justify-content: center;
        align-items: center;
    }

    .cartItems h4 {
        font: var(--headline-bold);
        text-align: center;
        width: 80px;
    }

    .cartItems button {
        background: transparent;
        cursor: pointer;
    }

    .cartQuantity .cartQuantityBtns {
        display: flex;
        justify-content: center;
        gap: 5px;
    }

    .cartPrice, .cartQuantity, .cartTotal {
        font: var(--headline-bold);
    }

    .cartSummary button {
        cursor: pointer;
        background: transparent;
    }

    .cartCheckout {
        font: var(--headline-bold);
        margin-top: 5px;
    }

    .subtotal {
        display: flex;
        justify-content: center;
        gap: 5px;
    }

    .continueShopping a {
        justify-content: center;
    }

    @media (min-width: 800px) {
        .cartItems li {
            width: 900px;
        }
    }
`

export default Container