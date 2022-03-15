import React, {useState, useEffect} from 'react';
import {commerce} from "./lib/commerce";
import {Products} from "./components/Products/Products";
import {Header} from "./components/Header/Header";
import {Cart} from "./components/Cart/Cart";

import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import {Checkout} from "./components/CheckoutForm/Checkout/Checkout";
import Login from "./components/Login/Login";
import {Contact} from "./components/Contact/Contact";
import {Footer} from "./components/Footer/Footer";


export function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart]  = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve();
        setCart(cart);
    }

    const handleAddToCart = async (productId, quantity) =>{
        const {cart} = await commerce.cart.add(productId, quantity);
        setCart(cart);
    }
    const handleUpdateCartQuantity = async (productId, quantity) => {
        const {cart} = await commerce.cart.update(productId, { quantity });
        setCart(cart);
    }
    const handleEmptyCart = async() => {
        const {cart} = await commerce.cart.empty();
        setCart(cart);
    }

    const handleRemoveFromCart = async(productId) => {
        const {cart} = await commerce.cart.remove(productId);
        setCart(cart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try{
            const incomingOrder = await  commerce.checkout.capture(checkoutTokenId, newOrder);
            setOrder(incomingOrder);
            setCart({})
        }catch(error){
            setErrorMessage(error.data.error.message);
        }
    };

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);


    return (
        <Router style={{margin: 0}}>
            <div>
                <Header totalItems={cart.total_items}/>
                <Routes>
                    <Route path='/' element={<><Products products={products} onAddToCart={handleAddToCart}/><Footer/></>}/>
                    <Route path='login/*' element={<><Login/><Footer/></>} />
                    <Route path='contact/*' element={<><Contact/> <Footer/></>} />
                    <Route path='cart/*' element={
                        <Cart cart={cart}
                              handleUpdateCartQuantity={handleUpdateCartQuantity}
                              handleRemoveFromCart={handleRemoveFromCart}
                              handleEmptyCart={handleEmptyCart}
                        />}
                    />
                    <Route path='checkout/*' element={<Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>}/>
                </Routes>

            </div>
        </Router>
    );
}