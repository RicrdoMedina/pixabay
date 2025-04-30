import React from 'react';
import { FormSchema } from '@/interfaces';
import DynamicForm from '@/components/Form/DynamicForm';
import { EyeIcon } from '@heroicons/react/24/outline';

const RegisterForm = () => {
	const loginSchema: FormSchema = [
		{
			name: 'username',
			label: '* Nombre de usuario',
			type: 'text',
			required: true,
			wrapperClass: 'w-full flex flex-col items-start justify-center relative',
			className:
				'w-full outline flex items-center justify-center h-10 rounded-md px-2 outline-none focus:outline-none border-custom-gray-400 border font-sans focus:border-black text-sm ease-in-out transition-all duration-500',
			labelClass: 'text-sm text-bold font-sans font-semibold mb-3',
			placeholder: 'Por ejemplo: maria93',
		},
		{
			wrapperClass: 'w-full flex flex-col items-start justify-center relative',
			className:
				'w-full outline flex items-center justify-center h-10 rounded-md px-2 outline-none focus:outline-none border-custom-gray-400 border font-sans focus:border-black text-sm ease-in-out transition-all duration-500',
			labelClass: 'text-sm text-bold font-sans font-semibold mb-2',
			name: 'text',
			label: '* Correo',
			type: 'email',
			required: true,
			placeholder: 'example@gmail.com',
		},
		{
			wrapperClass: 'w-full flex flex-col items-start justify-center relative',
			className:
				'w-full outline flex items-center justify-center h-10 rounded-md px-2 outline-none focus:outline-none border-custom-gray-400 border font-sans focus:border-black text-sm ease-in-out transition-all duration-500',
			labelClass: 'text-sm text-bold font-sans font-semibold mb-2',
			name: 'password',
			label: '* Contraseña',
			type: 'password',
			required: true,
			iconRight: (
				<span className="w-4 h-4 block">
					<EyeIcon />
				</span>
			),
		},
	];

	return (
		<div className="w-full">
			<DynamicForm
				schema={loginSchema}
				onSubmit={() => undefined}
				className="w-full mt-10"
				btnLabel="Unirme"
				btnClassName="w-full text-sm h-10 bg-primary text-white font-sans flex items-center justify-center font-semibold rounded-full outline-none mt-8 ease-in-out transition-all duration-500"
			/>
		</div>
	);
};

export default RegisterForm;
