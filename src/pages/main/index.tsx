import { lazy } from "react";
import Header from "~/components/header";

const Footer = lazy(() => import("~/components/footer"));

function HomePage() {
	return (
		<>
			<div className="wrapper">
				<Header />
				<main className="">main sdadd</main>
				<Footer />
			</div>
		</>
	);
}

export default HomePage;
