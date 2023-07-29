import { Link } from "react-router-dom";
import logo from "../images/restauranfood.jpg";

const Hero = () => {

    return (
			<section className="bg-olive dark:bg-gray-900">
				<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
					<div className="mr-auto place-self-center lg:col-span-7">
						<h1
							className="max-w-2xl mb-4 text-4xl font-[markazi] font-extrabold tracking-tight
            md:text-5xl xl:text-6xl text-lemon"
						>
							Little Lemon
						</h1>
						<p className="max-w-2xl mb-6 font-medium font-[karla] lg:mb-8 md:text-lg lg:text-4xl text-gray">
							Chicago
						</p>
						<p className="leading-[1.5] max-w-lg text-[14px] mb-6 font-medium lg:mb-8 md:text-lg lg:text-xl text-gray">
							We are a family owned Mediterranean restaurant, focused on the
							traditional recipes served with a modern twist.
						</p>
						<Link
							to="/book"
							className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:scale-110"
						>
							Book A Table
							<svg
								className="w-5 h-5 ml-2 -mr-1"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path className="text-lemon font-bold"
									fillRule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</Link>
					</div>
					<div className="hidden z-10 lg:mt-0 lg:col-span-5 lg:flex">
						<img
							src={logo}
							alt="mockup"
							className="w-[60%] md:mb-[-100px] rounded-lg"
						/>
					</div>
				</div>
			</section>
		);
}

export default Hero;