import {
	Briefcase,
	ChevronRight,
	type LucideIcon,
	Truck,
	User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ClientTypeProps = {
	title: string;
	description: string;
	btn: string;
	icon: LucideIcon;
	href: string;
	src: string;
};
const cards: ClientTypeProps[] = [
	{
		icon: Briefcase,
		title: "Business Professional",
		description: "I'm a professional with vehicle transportation needs",
		btn: "Become a Client",
		href: "/",
		src: "/marchand.png",
	},
	{
		icon: Truck,
		title: "Independent Driver",
		description: "I'm an independent driver or want to become a MED driver",
		btn: "Become a Driver",
		href: "/",
		src: "/driver.jpg",
	},
	{
		icon: User,
		title: "Individual",
		description: "I have a one-time vehicle transport need",
		btn: "Request Transport",
		href: "/",
		src: "/particulier.png",
	},
];

export default function ClientType() {
	return (
		<section className="my-10">
			<h2 className="text-2xl w-fit text-primary mb-6 relative after:content after:absolute after:w-full after:h-2 after:bg-primary after:-bottom-2 after:left-0">
				You are...
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{cards.map((card) => (
					<ClientCard key={card.title} {...card} />
				))}
			</div>
		</section>
	);
}

function ClientCard({ title, description, btn, href, src }: ClientTypeProps) {
	return (
		<div className="bg-white rounded-3xl hover:shadow-md transition-all duration-200 overflow-hidden  flex flex-col min-h-[500px]">
			<div className="p-6 flex-grow flex flex-col">
				<div className="h-72 w-full mb-4">
					<Image
						className="w-full h-full rounded-3xl object-cover"
						src={src}
						alt={title}
						width={500}
						height={500}
					/>
				</div>
				<h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
				<p className="text-gray-600 mb-6 overflow-y-auto flex-grow">
					{description}
				</p>{" "}
				<Link
					href={href}
					className="flex hover:underline underline-offset-8 items-center w-fit hover:text-link text-primary"
				>
					{btn}
					<ChevronRight className="size-5  ml-2" />
				</Link>
			</div>
		</div>
	);
}
