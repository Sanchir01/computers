import { lazy } from "react";
import Header from "~/components/header";
import HeroBlock from "~/components/hero";

const Footer = lazy(() => import("~/components/footer"));
const Computers = lazy(() => import("~/components/computers"));
function HomePage() {
	return (
		<>
			<div className="wrapper">
				<Header />
				<main className="">
					<HeroBlock />
					<Computers />
				</main>
				<Footer />
			</div>
		</>
	);
}

export default HomePage;
