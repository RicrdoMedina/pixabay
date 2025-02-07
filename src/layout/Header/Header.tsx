import Link from 'next/link';
import Image from 'next/image';
import SearchBarDropdown from '@/components/SearchBarDropdown/SearchBarDropdown'
import Button from '@/components/Button/Button';
import ArrowDownIcon from '@/components/Svg/ArrowDownIcon';
import UploadIcon from '@/components/Svg/UploadIcon';

const Header = () => {
	return (
		<header className="w-full fixed inset-0 h-16 flex items-center justify-center flex-col px-8 z-60">
			<div className="w-full h-full flex">
				<div className="flex items-center justify-start flex-[1_0_140px]">
					<Link href="/">
						<Image
							src="/logo.svg"
							alt="Logo"
							width={120}
							height={33}
							priority
						/>
					</Link>
				</div>
				<div className="flex items-center justify-start flex-[0_1_auto] w-full h-full pr-4">
					<SearchBarDropdown
						placeholder="Search PixaBay"
						className="w-full h-10 bg-custom-gray-200 rounded-3xl flex items-center pl-4"
						classNameInput="w-full h-full outline-0 border-none bg-transparent"
					/>
				</div>
				<div className="flex items-center flex-[1_0_140px] h-full">
					<Button
						className="w-24 mr-2 flex items-center justify-center bg-transparent text-black outline-none border-none text-sm font-sans font-bold text-regular"
						label="Explore"
						icon={<ArrowDownIcon />}
						iconPosition="right"
					/>
					<Button
						className="w-auto h-10 mr-2 rounded-3xl px-3 text-sm font-sans font-bold text-regular whitespace-nowrap"
						label="Log in"
					/>
					<Button
						className="w-auto h-10 mr-2 rounded-3xl px-3 border border-regular text-sm font-sans font-bold text-regular"
						label="Join"
					/>
					<Button
						className="w-auto h-10 rounded-3xl px-3 bg-primary text-sm font-sans font-bold text-white flex items-center whitespace-nowrap"
						label="Upload"
						icon={<UploadIcon />}
						iconPosition="left"
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
