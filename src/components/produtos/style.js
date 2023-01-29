import styled from "styled-components"

export const ProductsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 100px;
    width: 100%;

    .item {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        font-family: raleway,sans-serif;
        align-items: center;
        justify-content: center;
        width: 400px;
        gap: 10px;

        img {
            width: 350px;
            cursor: pointer;
        }

        .title{
            font-size: 16px;
        }

        .description {
            font-size: 14px;
            color: #a9abac;
            text-align: center;
        }

        .priceItems {
            align-items: center;
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            width: 85%;
            .price{
                color: blue;
            }

            ion-icon {
                cursor: pointer;
                color: #a9abac;
                font-size: 25px;

                &:hover {
                color: #000;
                transition: 0.3s;
            }
        }

    }

`