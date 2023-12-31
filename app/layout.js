import '@/app/globals.css';
import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import CartProvider from '@/components/Provider';
import ShoppingCartModal from '@/components/ShoppingCartModal';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import { Inter, Montserrat, Roboto } from 'next/font/google';

const montserrat = Montserrat({
	weight: '400',
	subsets: ['latin'],
});

export const metadata = {
	title: 'KStore',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<ThemeProvider attribute="class" defaultTheme="system">
					<CartProvider>
						<div className="w-full min-h-screen flex flex-col justify-between">
							<Navbar />
							<ShoppingCartModal />

							<div className="flex-1 w-full max-w-[2000px] md:px-8 px-4 pb-8 mx-auto">
								{children}
							</div>
							<Footer />
							<Toaster />
						</div>
					</CartProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
