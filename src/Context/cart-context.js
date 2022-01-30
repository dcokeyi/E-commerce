import React, { useState } from "react";


const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItems: (item) => {},
    removeItem: (id) => {},
    isShowing: false,
    onShow: () => {}
});


export default CartContext;