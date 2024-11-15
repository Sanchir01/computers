import { Link } from "react-router-dom";
import Logo from "~/shared/images/Logo";
import LogoBox from "~/shared/images/boxtlogo";
import UserIcon from "~/shared/images/userIcon";
import { Button } from "~/shared/ui/button";

const Header = () => {
	return (
		<header className="text-white bg-black ">
			<div className="container">
				<div className="flex items-center justify-between h-20">
					<Logo />
					<div className="flex items-center gap-[30px]">
						<Link to="/">Компьютеры</Link>
						<Link to="/">Аксессуары</Link>
						<Link to="/">Мебель</Link>
						<Link to="/">Клиентам</Link>
						<Link to="/">Контакты</Link>
					</div>
					<div className="flex items-center gap-[60px]">
						<div className="flex items-center gap-[18px]">
							<LogoBox />
							<UserIcon />
						</div>
						<Button type={"button"} title={"Купить компьютер"} />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
