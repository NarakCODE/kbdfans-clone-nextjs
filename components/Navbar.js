'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Menu, Moon, ShoppingBag, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

const navLinks = [
	{ name: 'Keyboard', href: '/keyboard' },
	{ name: 'Keycaps', href: '/keycaps' },
	{ name: 'Switches', href: '/switches' },
];

export function Navbar() {
	const { setTheme } = useTheme();
	const pathname = usePathname();
	const { handleCartClick, cartCount } = useShoppingCart();

	const [open, setIsOpen] = useState(false);
	const menuVars = {
		initial: {
			scaleY: 0,
		},
		animate: {
			scaleY: 1,
			transition: {
				duration: 0.3,
			},
		},
		exit: {
			scaleY: 0,
			transition: {
				duration: 0.3,
			},
		},
	};

	return (
		<nav className="border-b">
			<div className="relative max-w-[2000px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
				<Link href="/" className="text-2xl flex items-center gap-2">
					<Image
						src={
							'https://images.vexels.com/media/users/3/224168/isolated/preview/5195015abc04377eb290772f254e2027-computer-keyboard-and-monitor-logo.png'
						}
						alt="logo"
						className="w-10"
						width={100}
						height={100}
					/>
					<h2 className="font-extrabold text-xl text-blue-500">KeyStore</h2>
				</Link>

				<div className="flex-1 items-center space-x-1 ml-4 lg:block hidden">
					{navLinks.map((link, index) => (
						<Link href={link.href} key={index}>
							<Button variant={`${pathname === link.href ? '' : 'ghost'}`}>
								{link.name}
							</Button>
						</Link>
					))}
				</div>

				{/* Responsive navbar */}
				{open && (
					<div className="lg:hidden block">
						<AnimatePresence>
							<motion.div
								className="absolute top-0 left-0 w-full h-[100vh] bg-primary-foreground md:px-8 px-4 py-4 z-50 origin-top"
								variants={menuVars}
								initial="initial"
								animate="animate"
								exit="exit"
							>
								<div className="flex items-center justify-between">
									<Link href="/" className="text-2xl flex items-center gap-2">
										<Image
											src={
												'https://images.vexels.com/media/users/3/224168/isolated/preview/5195015abc04377eb290772f254e2027-computer-keyboard-and-monitor-logo.png'
											}
											alt="logo"
											className="w-10"
											width={100}
											height={100}
										/>
										<h2 className="font-extrabold text-xl text-blue-500">
											KeyStore
										</h2>
									</Link>
									<Button variant={'icon'} onClick={() => setIsOpen(false)}>
										<X />
									</Button>
								</div>

								<div className="w-full mx-auto items-center flex-col flex my-10 space-y-2 ml-4 lg:hidden ">
									{navLinks.map((link, index) => (
										<React.Fragment key={index}>
											{pathname.startsWith(link.href) ? (
												<Button variant="secondary">
													<Link
														href={link.href}
														className="font-semibold text-lg"
													>
														{link.name}
													</Link>
												</Button>
											) : (
												<Button variant="ghost">
													<Link
														href={link.href}
														className="font-semibold text-lg"
													>
														{link.name}
													</Link>
												</Button>
											)}
										</React.Fragment>
									))}
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				)}

				<div className="flex items-center">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" size="icon">
								<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
								<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
								<span className="sr-only">Toggle theme</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem onClick={() => setTheme('light')}>
								Light
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme('dark')}>
								Dark
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme('system')}>
								System
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					<Button variant="ghost" onClick={handleCartClick}>
						<ShoppingBag />
						<span className="font-bold ml-1.5 text-md">{cartCount}</span>
					</Button>

					<Button
						variant="icon"
						className="block lg:hidden"
						onClick={() => setIsOpen(true)}
					>
						<Menu />
					</Button>
				</div>
			</div>
		</nav>
	);
}
