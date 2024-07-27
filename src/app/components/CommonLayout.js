"use client"

import CartState from "../context/CartContext"
import Footer from "./Footer"
import Header from "./Header"

export default function CommonLayout({children}) {
    return <CartState>
        <Header />
        <div className="px-[30px] md:px-[50px] lg:px-[100px] py-10">
            {children}
        </div>
        <Footer />
    </CartState>
}