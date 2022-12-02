import React from "react"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
	name: string
	email: string
	subject: string
	text: string
}

type Props = {}

const ContactMe = (props: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:vlad.vakula@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.text} (${formData.email})`
		reset()
	}
	return (
		<div className="h-screen flex relative flex-col text-c enter md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact Me</h3>
			<div className="flex flex-col space-y-10">
				<h4 className="text-4xl font-semibold text-center">I have got just what you need.</h4>
				<div className="space-y-10">
					{/* <div className="flex items-center space-x-5 justify-center">
						<PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
						<p className="text-2xl">+375-33-658-46-77</p>
					</div> */}
					<div className="flex items-center space-x-5 justify-center">
						<EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
						<p className="text-2xl">vlad.vakula@gmail.com</p>
					</div>
					<div className="flex items-center space-x-5 justify-center">
						<MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
						<p className="text-2xl">Poland</p>
					</div>
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
					<div className="flex space-x-2">
						<div className="relative">
							<input
								{...register("name", {
									required: {
										value: true,
										message: "Please enter name"
									}
								})}
								placeholder="Name"
								className="contactInput"
							/>
							<p className="absolute top-1 left-14 font-light text-[12px] text-red-400">{errors.name?.message}</p>
						</div>
						<div className="relative">
							<input
								{...register("email", {
									required: {
										value: true,
										message: "Please enter Email"
									}
								})}
								placeholder="Email"
								className="contactInput"
								type="email"
							/>
							<p className="absolute top-1 left-14 font-light text-[12px] text-red-400">{errors.email?.message}</p>
						</div>
					</div>

					<input {...register("subject")} placeholder="Subject" className="contactInput" type="text" />
					<textarea {...register("text")} placeholder="Message" className="contactInput" />
					<button type="submit" className="bg-[#f7ab0a]/70 py-5 px-10 rounded-md text-black fonf-bold text-lg">
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}

export default ContactMe