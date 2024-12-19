import React from "react";
import { MapPin, Tag, Truck } from "lucide-react";

const fields = [
	{
		id: "departure",
		label: "Departure",
		placeholder: "Enter departure location",
		icon: <MapPin className="inline-block mr-2" />,
	},
	{
		id: "arrival",
		label: "Arrival",
		placeholder: "Enter arrival location",
		icon: <MapPin className="inline-block mr-2" />,
	},
	{
		id: "registration",
		label: "Registration Number",
		placeholder: "Enter vehicle registration number",
		icon: <Tag className="inline-block mr-2" />,
	},
];

const TransportRequestForm = () => {
	return (
		<div className="transport-request-form p-6 bg-gray-100 rounded shadow-md max-w-md mx-auto">
			<h2 className="text-2xl font-bold mb-4 text-center">
				Request a Transport
			</h2>
			<form>
				{fields.map((field) => (
					<div className="mb-4" key={field.id}>
						<label
							className="block text-gray-700 font-medium mb-2"
							htmlFor={field.id}
						>
							{field.icon}
							{field.label}
						</label>
						<input
							type="text"
							id={field.id}
							name={field.id}
							className="w-full p-2 border border-gray-300 rounded"
							placeholder={field.placeholder}
						/>
					</div>
				))}

				<div className="text-center">
					<button
						type="submit"
						className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center justify-center"
					>
						<Truck className="mr-2" />
						Request Transport
					</button>
				</div>
			</form>
		</div>
	);
};

export default TransportRequestForm;
