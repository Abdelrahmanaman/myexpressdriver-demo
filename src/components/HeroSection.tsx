import Image from "next/image";
import React from "react";

export default function HeroSection() {
	return (
		<section className="">
			<div className="my-40">
				<div className="flex flex-col md:flex-row justify-between px-10">
					<div className="space-y-10">
						<h1 className="text-3xl text-primary w-[20ch] font-semibold">
							Moving your vehicles has never been easier.
						</h1>
						<p className="max-w-[50ch] text-lg">
							Get an immediate quote for moving a vehicle anywhere in France and
							Europe.
						</p>
					</div>
					<div className=" relative">
						<Image
							className=" w-[500px]"
							src={"/car.webp"}
							alt="car"
							width={500}
							height={500}
						/>
					</div>{" "}
				</div>
			</div>
		</section>
	);
}
