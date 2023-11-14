'use client';

import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import { urlFor } from '@/lib/client';
import { ShoppingCart } from 'lucide-react';
import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';

const AddToBag = ({ currency, description, images, name, price }) => {
	const { addItem, handleCartClick } = useShoppingCart();
	const { toast } = useToast();

	const product = {
		name: name,
		description: description,
		price: price,
		currency: currency,
		images: urlFor(images[0]).url(),
		id: '',
	};

	function onAddToCart() {
		addItem(product);
	}

	const trancate = (str, length) => {
		const string = str.slice(0, length) + '...';
		return string;
	};

	return (
		<Button
			className="font-bold uppercase flex gap-2"
			onClick={() => {
				onAddToCart();
				handleCartClick();
				toast({
					description: `${trancate(name, 100)} has been added to the cart`,
				});
			}}
		>
			<ShoppingCart size={20} />
			Add to bag
		</Button>
	);
};
export default AddToBag;
