'use client';

import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';

const ShoppingCartModal = () => {
	const {
		cartCount,
		shouldDisplayCart,
		handleCartClick,
		cartDetails,
		removeItem,
		clearCart,
		totalPrice,
		setItemQuantity,
	} = useShoppingCart();

	const handleRemoveItem = (sku) => {
		removeItem(sku);
	};

	const truncate = (str, length) => {
		const shortStr = str.slice(0, length) + '...';
		return shortStr;
	};

	return (
		<Sheet onOpenChange={handleCartClick} open={shouldDisplayCart}>
			<SheetContent className="sm:max-w-xl md:w-[90vw] w-full ">
				<SheetHeader>
					<SheetTitle>Your Shopping Cart</SheetTitle>
					<div className="flex items-center space-x-2">
						<p>
							{cartCount} item{cartCount > 1 ? 's' : ''}
						</p>
						<button
							className="hover:underline font-bold"
							onClick={() => clearCart()}
						>
							(Clear All)
						</button>
					</div>
				</SheetHeader>

				<div className="h-[88vh] flex flex-col justify-between">
					<div className="mt-8 flex-1 overflow-y-auto">
						<ul className="-my-6 divide-y divide-gray-200 pr-5">
							{cartCount > 0 ? (
								Object.entries(cartDetails).map(([productId, product]) => (
									<Link
										href={'/'}
										// href={`/product-detail/${product.name
										// 	.toLowerCase()
										// 	.replace(/\s+/g, '-')}`}
										key={productId}
										className="flex py-6"
									>
										<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
											<Image
												src={product.images}
												alt="Product Image"
												width={200}
												height={200}
											/>
										</div>

										<div className="ml-4 flex flex-1 flex-col">
											<div>
												<div className="flex justify-between text-base font-medium text-foreground">
													<div className="group flex flex-col gap-2">
														<h3 className="group-hover:underline">
															{truncate(product.name, 40)}
														</h3>
														<span className="flex items-center w-full justify-between gap-2 mt-2">
															<p className="font-bold text-sm md:text-md ">
																${product.price}
															</p>
														</span>

														<p className="text-sm md:text-md ">
															Quantity: {product.quantity}
														</p>
													</div>

													<div className="flex flex-col justify-evenly">
														<Button
															variant="icons"
															className="hover:text-red-500"
															onClick={() => handleRemoveItem(product.id)}
														>
															<Trash2 size={20} />
														</Button>
														<div className="flex items-center space-x-2">
															<button
																className="text-2xl border w-5 h-5 flex items-center justify-center rounded-full hover:bg-foreground hover:text-secondary duration-300"
																onClick={() =>
																	setItemQuantity(
																		product.id,
																		product.quantity - 1
																	)
																}
																disabled={product.quantity <= 1}
															>
																-
															</button>
															<span>{product.quantity}</span>
															<button
																className="text-2xl border w-5 h-5 flex items-center justify-center rounded-full hover:bg-foreground hover:text-secondary duration-300"
																onClick={() =>
																	setItemQuantity(
																		product.id,
																		product.quantity + 1
																	)
																}
															>
																+
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</Link>
								))
							) : (
								<li className="text-md py-6 text-center">
									{`You don't have any items. Check out the items `}
								</li>
							)}
						</ul>
					</div>
					<div className="border-t pt-6 flex flex-col gap-4">
						<div>
							<h2 className="text-xl font-bold flex items-center justify-between">
								Subtotal:
								<span>
									$
									{cartCount > 0
										? totalPrice.toLocaleString({
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
										  })
										: '0.00'}
								</span>
							</h2>
							<p className="text-slate-500 text-md">
								Shipping and taxes are calculated at checkout.
							</p>
						</div>

						<Link href={'/success'} onClick={() => shouldDisplayCart(false)}>
							<Button className="w-full">Check Out Now</Button>
						</Link>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default ShoppingCartModal;
