import styled from 'styled-components';

const ProductsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 15px 50px;
    box-sizing: border-box;
    gap: 15px;

    @media (max-width: 768px) {
      padding: 0;
      padding-top: 70px;
      justify-content: center;
    }

    .item {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        font-family: raleway,sans-serif;
        align-items: center;
        justify-content: center;
        width: 400px;
        box-sizing: border-box;
        gap: 10px;

        @media (max-width: 768px) {
          width: 300px;
        }

        img {
            width: 100%;
            cursor: pointer;
        }

        .title{
            font-size: 16px;
            font-weight: 500;
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
            width: 84%;

            .price{
                text-align: center;
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

`;

export default ProductsContainer;
