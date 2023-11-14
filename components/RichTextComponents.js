import React from 'react';

export const RichTextComponents = {
	types: {
		ulList: ({ children }) => (
			<ul className="ml-10 py-5 list-disc">{children}</ul>
		),
		listItem: ({ children }) => <li>{children}</li>,
	},
	serializers: {
		types: {
			block: (props) => {
				const style = props.node.style || 'normal';

				switch (style) {
					case 'h1':
						return <h1>{props.children}</h1>;
					// Add more cases for other block types if needed
					default:
						return <p>{props.children}</p>;
				}
			},
		},
		marks: {},
	},
};
