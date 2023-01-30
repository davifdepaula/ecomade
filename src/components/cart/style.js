import styled from 'styled-components';

const CartContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    width: 100%;
    padding: 15px 200px;
    box-sizing: border-box;

    .cartBox {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
        border-bottom: 2px solid #000;
        padding-bottom: 5px;
        gap: 15px;

        .buttons {
            display: flex;
            gap: 15px;
        }
    }

    .cartBox ion-icon {
        font-size: 25px;
    }

    .cartImg {
    display: flex;
    align-items: center;
    width: 400px;
    }

    .cartImg img {
    width: 50px;
    height: 50px;
    }

    .cartImg p {
    font-weight: 500;
    margin-left: 10px;
    }

    .cartButton {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .plusButton:hover, .minusButton:hover, .trashButton{
        cursor: pointer;
    }

    .cartRemoveButton {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .total {
        display: flex;
        align-items: flex-end;
        margin-top: 15px;
        gap: 20px;
    }

    .total span:nth-child(1) {
    font-size: 20px;
    color: black;
    font-weight: 500;
    letter-spacing: 2px;
    }

    .total span:nth-child(2) {
    font-size: 20px;
    color: black;
    font-weight: 500;
    }


    .emptyCart {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: 500;
        height: 100vh;
        gap: 15px;

        .icon {
            font-size: 60px;
        }
    }

    .makeOrder {
        display: flex;
        margin: 20px auto;
        background: none;
        gap: 10px;
    }
`;

export default CartContainer;
