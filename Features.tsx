import React from "react";
import Image from "next/image";
import Link from "next/link";

type FeatureProps = {
	title: string;
	description: string;
	highlight?: string;
	linkText: string;
	href: string;
	imageSrc: string;
};

const features: FeatureProps[] = [
	{
		title: "Professional Vehicle Convoy",
		description:
			"In the automotive sector, every day counts. Opt for vehicle convoy by a professional transporter for express transfer.",
		highlight: "Fastest and most economical solution.",
		linkText: "Learn More",
		href: "/professional-convoy",
		imageSrc: "/driver.jpg",
	},
	{
		title: "Vehicle Transport on Flatbed",
		description:
			"We offer a specialized vehicle transport service on a flatbed, ensuring safe, rapid transfer without adding kilometers to your vehicle's odometer.",
		highlight: "Most chosen solution for new vehicles.",
		linkText: "Learn More",
		href: "/flatbed-transport",
		imageSrc: "/tow-truck.jpg",
	},
	{
		title: "Commercial Vehicle Transport",
		description:
			"We guarantee safety, speed, and efficiency in delivering your commercial vehicles where and when you need them (inter-site transfer, reallocation between collaborators).",
		linkText: "Learn More",
		href: "/commercial-transport",
		imageSrc: "/truck.jpg",
	},
	{
		title: "Private Vehicle Delivery",
		description:
			"We provide a fast and secure delivery and repatriation service for new or used private vehicles, right to your doorstep.",
		linkText: "Learn More",
		href: "/private-delivery",
		imageSrc: "/keys.jpg",
	},
];

function FeatureCard({
	title,
	description,
	highlight,
	linkText,
	href,
	imageSrc,
}: FeatureProps) {
	return (
		<div className="flex  rounded-3xl">
			<div className="  min-w-44 relative">
				<Image
					src={imageSrc}
					alt={title}
					fill
					className="object-cover rounded-tl-3xl rounded-bl-3xl"
				/>
			</div>
			<div className="p-6 flex-grow flex flex-col">
				<h3 className="text-2xl w-fit text-primary mb-6 relative after:content after:absolute after:w-full after:h-2 after:bg-primary after:-bottom-2 after:left-0">
					{title}
				</h3>
				<p className="text-gray-600 mb-4 max-w-[70ch]">{description}</p>
				{highlight && (
					<p className="text-primary max-w-[44ch] font-semibold mb-4">
						{highlight}
					</p>
				)}
				<Link
					href={href}
					className="mt-auto inline-block bg-primary text-white py-2 px-4 rounded text-center hover:bg-primary-dark transition-colors hover:bg-link w-fit"
				>
					{linkText}
				</Link>
			</div>
		</div>
	);
}

export default function Features() {
	return (
		<section className="py-20 ">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl w-fit text-primary mb-6 relative after:content after:absolute after:w-full after:h-2 after:bg-primary after:-bottom-2 after:left-0">
					Our Services
				</h2>
				<div className="space-y-6">
					{features.map((feature) => (
						<FeatureCard key={feature.title} {...feature} />
					))}
				</div>
			</div>
		</section>
	);
}
