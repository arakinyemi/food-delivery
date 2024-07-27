"use client"

import CartState from "../context/CartContext"
import Footer from "./Footer"
import Header from "./Header"

export default function CommonLayout({children}) {
    return <CartState>
        <Header />
        {/* px-[30px] md:px-[50px] lg:px-[100px] py-10" */}
        <div>
            {children}
        </div>
        <Footer />
    </CartState>
}