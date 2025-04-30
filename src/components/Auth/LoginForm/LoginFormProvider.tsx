import React from 'react';
import DynamicTabs from '@/components/DynamicTabs/DynamicTabs';
import LoginFormRoot from '@/components/Auth/LoginForm/LoginFormRoot';
import RegisterForm from '@/components/Auth/RegisterForm/RegisterForm'

const LoginFormProvider = () => {
	const tabs = [
		{ label: 'Regístrate', component: <RegisterForm/> },
		{ label: 'Iniciar sesión', component: <LoginFormRoot/> },
	];

	return (
		<div className="w-full min-w-560px rounded-md relative overflow-hidden">
			<header className="bg-black w-full flex items-center justify-center h-12">
				<h2 id="modal-title" className="text-white font-sans font-semibold">
					Sign up to download unlimited full resolution media
				</h2>
			</header>
			<section id="modal-description" className="w-full">
				<div className='w-full py-8 flex items-center justify-center'>
					<DynamicTabs tabs={tabs} />
				</div>
			</section>
		</div>
	);
};

export default LoginFormProvider;
