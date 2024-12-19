import React from "react";
import { MapPin, Tag, Truck } from "lucide-react";

const fields = [
	{
		id: "departure",
		label: "Departure",
		placeholder: "Departure",
		icon: MapPin,
	},
	{
		id: "arrival",
		label: "Arrival",
		placeholder: "Arrival",
		icon: MapPin,
	},
	{
		id: "registration",
		label: "Registration Number",
		placeholder: " Vehicle registration number",
		icon: Tag,
	},
];

const TransportRequestForm = () => {
	return (
		<div className=" bg-primary/10  p-8 rounded-3xl">
			<form className="md:flex flex-wrap justify-center items-center  gap-5">
				{fields.map((field) => (
					<div key={field.id}>
						<label
							className="sr-only text-gray-700 font-medium mb-2"
							htmlFor={field.id}
						>
							{field.label}
						</label>
						<div className="relative">
							<input
								type="text"
								id={field.id}
								name={field.id}
								className="w-full  border max-w-72  focus:outline-none rounded-2xl  bg-white px-8 py-2"
								placeholder={field.placeholder}
							/>
							<field.icon className="absolute top-3 left-3 size-4 fill-primary text-white" />
						</div>
					</div>
				))}

				<button
					type="submit"
					className="flex items-center w-72 justify-center bg-primary rounded-2xl text-white gap-2 p-2 cursor-pointer hover:bg-primary/80"
				>
					<Truck className="mr-2" />
					Request Transport
				</button>
			</form>
		</div>
	);
};

export default TransportRequestForm;
