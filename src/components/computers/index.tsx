import ComputersLogo from "~/public/images/computers";
import MoneyIcon from "~/public/images/money";
import styles from "~/shared/styles/computers.module.scss";
const cardImage = new URL("~/public/images/card/cardImage.svg", import.meta.url)
	.href;
const cardImageTeacher = new URL(
	"~/public/images/card/cardImageTeacher.svg",
	import.meta.url,
).href;

const Computers = () => {
	return (
		<div className={styles.computers}>
			<div className="container">
				<div className="">
					<div className="flex gap-[117px]">
						<div className="max-w-[540px]">
							<img src={cardImage} alt="cardImage" />
							<div className="flex items-center gap-3 mt-[20px]">
								<h3 className={styles.computers__title}>We save your money</h3>
								<MoneyIcon />
							</div>
							<div className="mt-[22px]">
								* приобретая технику у нас, вы доверяете лучшим специалистам и
								профессионалам своего дела, мы поможем подобрать идеальный
								вариант компьютера, именно для вас.
							</div>
						</div>
						<div className="max-w-[540px]">
							<img src={cardImageTeacher} alt="cardImage" />
							<div className="flex items-center gap-3 mt-[20px]">
								<h3 className={styles.computers__title}>We save your money</h3>
								<MoneyIcon />
							</div>
							<div className="mt-[22px]">
								* приобретая технику у нас, вы доверяете лучшим специалистам и
								профессионалам своего дела, мы поможем подобрать идеальный
								вариант компьютера, именно для вас.
							</div>
						</div>
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
