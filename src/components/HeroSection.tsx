import Image from "next/image";
import TransportRequestForm from "./TransportRequestForm";
import { ChevronDown, Globe2, Mouse } from "lucide-react";
import ClientType from "./ClientType";

export default function HeroSection() {
	return (
		<div className="">
			<section className="pt-40 relative  h-[calc(100dvh-70px)] ">
				<div className="flex flex-col md:flex-row justify-between px-10">
					<div className="space-y-10">
						<h1 className="text-3xl text-primary w-[20ch] font-semibold">
							Moving your vehicles has never been easier.
						</h1>
						<p className="max-w-[50ch] text-lg">
							Get an immediate quote for moving a vehicle anywhere in France and
							Europe
							<Globe2 className="size-5 inline-block ml-2" />
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
					</div>
				</div>
				<TransportRequestForm />
				<div className="grid bottom-32 left-1/2 absolute   place-items-center animate- delay-700">
					<Mouse className="size-7" />
					<ChevronDown className="size-7 " />
				</div>
			</section>
			<ClientType />
		</div>
	);
}
