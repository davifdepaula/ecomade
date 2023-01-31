import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart";

import CartContainer from "./style";

export default function Order() {
    const { cart, price, handleChange} =
        useContext(CartContext);
    const navigate = useNavigate();

    return (
        <CartContainer>
            {cart.map((item) => (
                <div className="cartBox" key={item._id}>
                    <div className="cartImg">
                        <img src={item.image} alt="" />
                        <p>{item.title}</p>
                    </div>
                    <div className="item-control">
                            <span>{item.quantity} x </span>
                            <span>
                                R$ {item.price.toFixed(2).replace(".", ",")}
                            </span>
                    </div>
                </div>
            ))}
            <div className="total">
                <span>Valor total:</span>
                <span>R$ {price.toFixed(2).replace(".", ",")}</span>
            </div>
        </CartContainer>
    );
}
