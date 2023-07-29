import React from "react";
import logo from "../images/Logo.svg";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="flex mx-auto max-w-[960px] justify-between items-center">
			<img src={logo} alt="little lemon" className=" md:w-[20%]" />
			<ul className="md:flex hidden p-4">
				<li className="">
					<Link to="/"> Home</Link>
				</li>
				<li className="">
					<Link to="/About"> About</Link>
				</li>
				<li className="">
					<Link to="/Menu"> Menu </Link>
				</li>
				<li className="">
					<Link to="/Book"> Reservations</Link>
				</li>
				<li className="">
					<Link to="/OrderOnline"> Order Online </Link>
				</li>
				<li className="">
					<Link to="/Login"> Login </Link>
				</li>
			</ul>
			<Hamburger />
		</nav>
	);
};

export default Nav;
