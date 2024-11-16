import Logo from "~/shared/images/Logo";
import FacebookIcon from "~/shared/images/social/facebook";
import InstIcon from "~/shared/images/social/inst";
import TwitterIcon from "~/shared/images/social/twitter";
import VKIcon from "~/shared/images/social/vk";

const Footer = () => {
	return (
		<footer className="pt-[25px] text-white ">
			<div className="container">
				<div className="border-t border-[#737373] pt-[25px]">
					<div className="grid grid-cols-3">
						<div className="pl-[22px]">
							<Logo />
						</div>
						<div className="flex flex-col gap-[2px]">
							<span className="">Связь с нами</span>

							<div className="flex gap-1">
								<div className="opacity-30"> По бесплатному номеру</div>
								<div className="">8 (800) 505-43-43</div>
							</div>
						</div>
						<div className="w-[232px] text-sm opacity-30">
							© 2023 Все права защищены.Игровая атрибутика и техника в HF.
						</div>
					</div>
					<div className="flex flex-col gap-[30px] mt-[95px]">
						<div className="opacity-30 w-[155px] text-sm">
							Наши социальные сети, для вашего изучения.
						</div>
						<div className="flex items-center gap-[26px]">
							<FacebookIcon />
							<TwitterIcon />
							<InstIcon />
							<VKIcon />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
