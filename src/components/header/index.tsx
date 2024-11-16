import { Link } from "react-router-dom";
import Logo from "~/shared/images/Logo";
import LogoBox from "~/shared/images/boxtlogo";
import UserIcon from "~/shared/images/userIcon";
import styles from "~/shared/styles/Headers.module.scss";
import { Button } from "~/shared/ui/button";
const Header = () => {
	return (
		<header className={`${styles.header} text-white bg-black`}>
			<div className="container">
				<div className="flex items-center justify-between h-20">
					<Logo />
					<nav className="">
						<ul className="flex items-center gap-[30px] ">
							<li>
								<Link to="/">Компьютеры</Link>
							</li>
							<li>
								<Link to="/">Аксессуары</Link>
							</li>
							<li>
								<Link to="/">Мебель</Link>
							</li>
							<li>
								<Link to="/">Клиентам</Link>
							</li>
							<li>
								<Link to="/">Контакты</Link>
							</li>
						</ul>
					</nav>
					<div className="flex items-center gap-[60px] ">
						<div className="flex items-center gap-[18px] ">
							<LogoBox />
							<UserIcon />
						</div>
						<div className="">teet asdsadsadsad</div>
						<Button type={"button"} title={"Купить компьютер"} />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
