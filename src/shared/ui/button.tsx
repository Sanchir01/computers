import type React from "react";

export type ButtonProps = {
	type: string;
	title?: string;
} & React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;
export const Button = ({ type, title, ...props }: ButtonProps) => {
	return (
		<button
			type={type}
			{...props}
			className="relative px-3 py-2 bg-bg-button border-2 border-border-button
				[clip-path:polygon(0_10px,5px_10px,5px_5px,10px_5px,10px_0,calc(100%-0px)_0,100%_0px,100%_calc(100%-10px),calc(100%-5px)_calc(100%-10px),calc(100%-5px)_calc(100%-5px),calc(100%-10px)_calc(100%-5px),calc(100%-10px)_100%,0_100%,0_10px)]"
		>
			{title}
		</button>
	);
};
