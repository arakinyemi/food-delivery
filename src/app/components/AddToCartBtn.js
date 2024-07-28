"use client"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Button } from "@/components/ui/button";

export default function AddToCartBtn({productDetails}) {
    const { cartItems, setCartItems } = useContext(CartContext);
    console.log(cartItems);

    function addToCart() {
        setCartItems([...cartItems, productDetails]);
    }

    function removeFromCart() {
        let cpyCart = [...cartItems]
        cpyCart  = cpyCart.filter((item) => item.id != productDetails.id)
        setCartItems(cpyCart);
    }

    return (
        <Button
            onClick={cartItems.some(item => item.id == productDetails.id) ? removeFromCart : addToCart}
        >{cartItems.some(item => item.id == productDetails.id) ? 'Remove From Cart' : 'Add To Cart'}</Button>
    )
}