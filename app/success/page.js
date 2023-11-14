import { Button } from '@/components/ui/button';
import { CheckCheck } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const SuccessCheckOut = () => {
	return (
		<div className="my-20 w-full max-w-xl mx-auto flex flex-col items-center justify-center gap-4">
			<CheckCheck size={80} className="text-green-500" />
			<div>
				<h2 className="mt-4 font-bold text-lg md:text-xl text-center">
					Thank you for buying!
				</h2>
				<p className="text-sm text-slate-500 text-center">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ratione
					ipsum distinctio non, modi accusamus obcaecati! Ipsum nobis maiores
					quia?
				</p>
			</div>

			<div className="flex items-center space-x-2">
				<Link href="/">
					<Button>Back to home page</Button>
				</Link>
			</div>
		</div>
	);
};

export default SuccessCheckOut;
