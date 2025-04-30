import React, { FC } from 'react';

type AuthWrapperProps = {
	title: string;
};

const AuthWrapper: FC<AuthWrapperProps> = ({ title }) => {
	return (
		<div className="w-full min-w-600px rounded-md relative overflow-hidden">
			<header className="bg-black w-full flex items-center justify-center h-12">
				<h2 id="modal-title" className='text-white font-sans font-semibold'>{title}</h2>
			</header>
			<section id="modal-description" className="w-full">
			</section>
			<footer className="w-full">
				<button>Cancelar</button>
				<button>Aceptar</button>
			</footer>
		</div>
	);
};

export default AuthWrapper;
