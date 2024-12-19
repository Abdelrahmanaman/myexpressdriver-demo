import Image from "next/image";
import Link from "next/link";

type NavItem = {
	title: string;
	type: "dropdown" | "link" | "button";
	href?: string;
	items?: Array<{
		title: string;
		href: string;
	}>;
};

const navItems: NavItem[] = [
	{
		title: "Services",
		type: "dropdown",
		items: [
			{
				title: "Express Vehicle Delivery",
				href: "https://myexpressdriver.com/convoyer-une-voiture/",
			},
			{
				title: "Flatbed Vehicle Transport",
				href: "https://myexpressdriver.com/transport-plateau/",
			},
			{
				title: "Commercial Vehicle Transport",
				href: "https://myexpressdriver.com/transport-utilitaire/",
			},
			{
				title: "Private Vehicle Delivery",
				href: "https://myexpressdriver.com/livraison-de-vehicule/",
			},
		],
	},
	{
		title: "Become a Driver",
		href: "https://myexpressdriver.com/become-driver",
		type: "link",
	},
	{
		title: "About Us",
		type: "dropdown",
		items: [
			{
				title: "Who We Are",
				href: "https://myexpressdriver.com/a-propos/",
			},
			{
				title: "FAQ",
				href: "https://myexpressdriver.com/faq-entreprise/",
			},
			{
				title: "Customer Stories",
				href: "https://myexpressdriver.com/category/portrait-client/",
			},
			{
				title: "Contact Us",
				href: "https://myexpressdriver.com/nous-contacter/",
			},
		],
	},
	{
		title: "Blog",
		href: "https://myexpressdriver.com/blog",
		type: "link",
	},
	{
		title: "Login",
		href: "https://myexpressdriver.com/login",
		type: "link",
	},
	{
		title: "Sign Up",
		href: "https://myexpressdriver.com/signup",
		type: "button",
	},
];

export default function Navbar() {
	return (
		<header className="flex justify-between items-center py-4 px-2">
			<Link href="/">
				<Image src="/logo.png" alt="logo" width={200} height={200} />
			</Link>
			<nav>
				<ul className="flex font-medium text-sm">
					{navItems.map((item) => (
						<li
							key={item.title}
							className={`${
								item.type === "dropdown"
									? "group relative"
									: item.type === "button"
										? "bg-link text-white hover:bg-link/80"
										: ""
							} py-1 px-2 hover:text-link cursor-pointer ${
								item.type === "button" ? "rounded-full" : ""
							}`}
						>
							{item.type === "dropdown" ? (
								<>
									{item.title}
									<div className="absolute py-2 cursor-auto">
										<ul className="w-72 group-hover:block shadow-2xl border-transparent group-hover:text-black space-y-2 hidden px-2 py-4 rounded-2xl bg-white border">
											{item.items?.map((subItem) => (
												<li key={subItem.title} className="hover:text-link">
													<Link href={subItem.href}>{subItem.title}</Link>
												</li>
											))}
										</ul>
									</div>
								</>
							) : (
								<Link href={item.href || "#"}>{item.title}</Link>
							)}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
