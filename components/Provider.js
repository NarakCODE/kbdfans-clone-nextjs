'use client';

import React from 'react';
import { CartProvider as Provider } from 'use-shopping-cart';

const CartProvider = ({ children }) => {
	return (
		<Provider
			cartMode="checkout-session"
			currency="USD"
			mode="payment"
			stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
			successUrl="http://localhost:3000/success"
			cancelUrl="http://localhost:3000/error"
			billingAddressCollection={true}
			shouldPersist={true} // item will stay even use reload the page
			language="eng-US"
		>
			{children}
		</Provider>
	);
};

export default CartProvider;
