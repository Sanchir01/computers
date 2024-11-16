import type React from "react";
import styles from "~/shared/styles/button.module.scss";
export type ButtonProps = {
	type: string;
	title?: string;
	className?: string;
} & React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;
export const Button = ({
	type,
	className,
	title = "Купить компьютер",
	...props
}: ButtonProps) => {
	return (
		<div className="hover:transition-all hover:duration-300 hover:drop-shadow-[0px_0px_10px_#9D38E8]">
			<button
				type={type}
				{...props}
				className={`${styles.button} ${className} px-3 py-2 bg-border-button border-2 border-bg-button
				[clip-path:polygon(0_10px,5px_10px,5px_5px,10px_5px,10px_0,calc(100%-0px)_0,100%_0px,100%_calc(100%-10px),calc(100%-5px)_calc(100%-10px),calc(100%-5px)_calc(100%-5px),calc(100%-10px)_calc(100%-5px),calc(100%-10px)_100%,0_100%,0_10px)]`}
			>
				{title}
			</button>
		</div>
	);
};
