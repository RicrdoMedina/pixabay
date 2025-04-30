import React from 'react';
import { FieldType, FormSchema } from '@/interfaces';
import DynamicForm from '@/components/Form/DynamicForm';
import { EyeIcon } from '@heroicons/react/24/outline';

const LoginFormRoot = () => {
	const [toggleVisibilityEmail, setToggleVisibilityEmail] =
		React.useState<FieldType>('password');

	function handleVisibilityEmail() {
		setToggleVisibilityEmail(prev => {
			return prev === 'password' ? 'text' : 'password';
		});
	}

	const loginSchema: FormSchema = [
		{
			name: 'email',
			label: 'Usuario o email',
			type: 'text',
			required: true,
			wrapperClass: 'w-full flex flex-col items-start justify-center relative',
			className:
				'w-full outline flex items-center justify-center h-10 rounded-md px-2 outline-none focus:outline-none border-custom-gray-400 border font-sans focus:border-black text-sm ease-in-out transition-all duration-500',
			labelClass: 'text-sm text-bold font-sans font-semibold mb-3',
			placeholder: 'example@gmail.com',
			validations: [
				{ regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'El correo es inválido' },
			],
		},
		{
			wrapperClass: 'w-full flex flex-col items-start justify-center relative',
			className:
				'w-full outline flex items-center justify-center h-10 rounded-md px-2 outline-none focus:outline-none border-custom-gray-400 border font-sans focus:border-black text-sm ease-in-out transition-all duration-500',
			labelClass: 'text-sm text-bold font-sans font-semibold mb-2',
			name: 'password',
			label: 'Contraseña',
			type: toggleVisibilityEmail,
			required: true,
			iconRight: (
				<span
					className="w-4 h-4 block cursor-pointer"
					onClick={() => handleVisibilityEmail()}
				>
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
				btnLabel="Iniciar sesión"
				btnClassName="w-full text-sm h-10 bg-primary text-white font-sans flex items-center justify-center font-semibold rounded-full outline-none mt-8 ease-in-out transition-all duration-500"
			/>
		</div>
	);
};

export default LoginFormRoot;
