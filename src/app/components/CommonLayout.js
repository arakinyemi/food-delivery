"use client"

import CartState from "../context/CartContext"
import Footer from "./Footer"
import Header from "./Header"

export default function CommonLayout({children}) {
    return <CartState>
        <Header />
        {children}
        <Footer />
    </CartState>
}