import Image from "next/image";
import React from "react";

export default function HeroSection() {
	return (
		<section>
			<div>
				<div className="flex flex-col md:flex-row justify-between items-center">
					<h1 className="text-2xl text-primary w-96 font-semibold">
						Moving your vehicles has never been easier.
					</h1>
					<Image src={"/car.webp"} alt="car" width={300} height={300} />
				</div>
				<p>
					Get an immediate quote for moving a vehicle anywhere in France and
					Europe.
				</p>
			</div>
		</section>
	);
}
