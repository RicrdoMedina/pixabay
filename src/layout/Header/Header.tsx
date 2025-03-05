'use client';

import Link from 'next/link';
import classNames from 'classnames';
import SearchBarDropdown from '@/components/SearchBarDropdown/SearchBarDropdown';
import Button from '@/components/Button/Button';
import ArrowDownIcon from '@/components/Svg/ArrowDownIcon';
import UploadIcon from '@/components/Svg/UploadIcon';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Logo from '@/components/Svg/Logo';
import MobileLogo from '@/components/Svg/MobileLogo';
import useMobile from '@/hooks/useIsMobile';
import useScrollDirection from '@/hooks/useScrollDirection';

const Header = () => {
	const isScrollingDown = useScrollDirection(10);
	const { isMobile } = useMobile();
	return (
		<header
			className={classNames(
				'w-full fixed inset-0 h-16 flex items-center justify-center flex-col px-4 md:px-8 z-60',
				{
					'bg-white': isScrollingDown,
					'bg-transparent': !isScrollingDown,
				}
			)}
		>
			<div className="w-full h-full flex gap-2">
				<div className="flex items-center justify-start md:flex-[1_0_140px]">
					<Link
						className={classNames('hidden md:flex', {
							'text-bold': isScrollingDown,
							'text-white': !isScrollingDown,
						})}
						href="/"
					>
						<Logo width={120} height={33} />
					</Link>
					<Link
						className={classNames('flex md:hidden', {
							'text-bold': isScrollingDown,
							'text-white': !isScrollingDown,
						})}
						href="/"
					>
						<MobileLogo width={40} height={40} />
					</Link>
				</div>
				<div className="flex items-center justify-start flex-[0_1_auto] w-full h-full">
					{isScrollingDown && (
						<SearchBarDropdown
							placeholder="Search PixaBay"
							className="w-full h-10 bg-custom-gray-200 rounded-3xl flex items-center pl-4"
							classNameInput="w-full h-full outline-0 border-none bg-transparent"
							dropdownButtonDisabled={isMobile}
						/>
					)}
				</div>
				<div className="flex items-center md:flex-[1_0_140px] gap-4 md:gap-2 h-full justify-end md:justify-center">
					<Button
						className={classNames(
							'w-24 hidden md:flex items-center justify-center bg-transparent outline-none border-none text-sm font-sans font-bold',
							{
								'text-black': isScrollingDown,
								'text-white': !isScrollingDown,
							}
						)}
						label="Explore"
						icon={<ArrowDownIcon />}
						iconPosition="right"
					/>
					<Button
						className={classNames(
							'w-auto h-10 hidden md:flex items-center justify-center mr-2 rounded-3xl px-3 text-sm font-sans font-bold whitespace-nowrap',
							{
								'text-black': isScrollingDown,
								'text-white': !isScrollingDown,
							}
						)}
						label="Log in"
					/>
					<Button
						className={classNames(
							'w-auto h-10 rounded-3xl px-3 border text-sm font-sans font-bold',
							{
								'text-black border-black': isScrollingDown,
								'text-white  border-white': !isScrollingDown,
							}
						)}
						label="Join"
					/>
					<Button
						className="w-auto h-10 rounded-3xl px-3 bg-primary text-sm font-sans font-bold text-white hidden md:flex items-center whitespace-nowrap"
						label="Upload"
						icon={<UploadIcon />}
						iconPosition="left"
					/>
					<span className="flex md:hidden items-center justify-center">
						<Bars3Icon
							className={classNames('h-6 w-6', {
								'text-black': isScrollingDown,
								'text-white': !isScrollingDown,
							})}
						/>
					</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
