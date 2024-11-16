import ComputersLogo from "~/shared/images/computers";
import styles from "~/shared/styles/computers.module.scss";

const Computers = () => {
	return (
		<div className={styles.computers}>
			<div className="container">
				<div className="">
					<div className="flex gap-[117px]">
						<div className="">block1</div>
						<div className="">block1</div>
					</div>
					<div className="pt-[141px]">
						<ComputersLogo />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Computers;
