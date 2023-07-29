import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Hamburger = () => {
	const [open, setOpen] = useState(false);

	const handleToggle = () => setOpen(!open);

	return (
		<>
			<div onClick={handleToggle} className="md:hidden cursor-pointer pl-8">
				{open ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>

			<ul
				className={
					open
						? "fixed text-2xl left-0 top-0 w-[60%] border-r ease-in-out duration-500  border-r-gray h-full bg-olive"
						: "fixed left-[-100%]"
				}
			>
				<div className="flex bg-gray ">
					<img src={logo} alt="little lemon" className="p-4 mx-auto pl-10" />
					<span className="text-gray">Little Lemon</span>
				</div>

				<li
					className="
                    border-b
                    border-gray
                    p-4
                    cursor-pointer
                    hover:text-gray
                    text-lemon"
				>
					<Link to="/"> Home</Link>
				</li>

				<li
					className="
                    border-b
                    border-b-gray
                    p-4
                    cursor-pointer
                    hover:text-gray
                    text-lemon"
				>
					<Link to="/About"> About</Link>
				</li>

				<li
					className="
                        border-b
                        border-b-gray
                        p-4
                        cursor-pointer
                        hover:text-gray
                        text-lemon"
				>
					<Link to="/Menu"> Menu </Link>
				</li>

				<li
					className="
                        border-b
                        border-b-gray
                        p-4
                        cursor-pointer
                        hover:text-gray
                        text-lemon"
				>
					<Link to="/Book"> Book</Link>
				</li>

				<li
					className="
                        p-4
                        cursor-pointer
                        hover:text-gray
                        border-b
                        border-b-gray
                        text-lemon"
				>
					<Link to="/OrderOnline"> Order Online </Link>
				</li>

				<li
					className="
                        p-4
                        cursor-pointer
                        hover:text-gray
                        text-lemon"
				>
					<Link to="/Login"> Login</Link>
				</li>
			</ul>
		</>
	);
};

export default Hamburger;
