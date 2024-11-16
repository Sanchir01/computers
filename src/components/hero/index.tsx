import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "~/shared/ui/button";
import "swiper/css";
import { useState } from "react";
import SliderActivePagination from "~/public/images/slider/sliderActivePagination";
import SliderDisabledPagination from "~/public/images/slider/sliderDisabledPagination";
import SmileIcon from "~/public/images/smile";
import styles from "~/shared/styles/hero.module.scss";

const testImage = new URL(
	"../../public/images/slider/test.svg",
	import.meta.url,
).href;

const HeroBlock = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const length = 3;
	return (
		<div className={styles.hero}>
			<div className="container">
				<div className="flex gap-10">
					<div className={styles.hero__left}>
						<h1 className={`${styles.hero__title} relative`}>
							Best&nbsp;Computers
							<br />
							in&nbsp;Russia
							<div className="absolute bottom-8 right-[123px]">
								<SmileIcon />
							</div>
						</h1>

						<span className="text-[16px] pt-6">
							* приобретайте или собирайте компьютеры на нашей платформе по
							самым выгодным ценам и предложениям.
						</span>
						<div className="pt-[52px] max-w-[270px]">
							<Button
								type="button"
								title="Купить компьютер"
								className="w-full"
							/>
						</div>
						<div className="flex gap-4 mt-12">
							{Array.from({ length }).map((_, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<div key={index} className="cursor-pointer">
									{index === slideIndex ? (
										<div>
											<SliderActivePagination />
										</div>
									) : (
										<div>
											<SliderDisabledPagination />
										</div>
									)}
								</div>
							))}
						</div>
					</div>

					<Swiper
						loop={true}
						modules={[Autoplay]}
						autoplay={{
							delay: 2000,
							disableOnInteraction: false,
						}}
						spaceBetween={50}
						slidesPerView={1}
						onSwiper={(swiper) => setSlideIndex(swiper.activeIndex)}
						pagination={{
							clickable: true,
							el: ".swiper-pagination-external",
						}}
						onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
					>
						<SwiperSlide>
							<img src={testImage} alt={`computer ${slideIndex}`} />
						</SwiperSlide>
						<SwiperSlide>
							<img src={testImage} alt={`computer ${slideIndex}`} />
						</SwiperSlide>
						<SwiperSlide>
							<img src={testImage} alt={`computer ${slideIndex}`} />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default HeroBlock;
