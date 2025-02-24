import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Paragraph from '@/components/Paragraph/Paragraph';
import FacebookIcon from '@/components/Svg/FacebookIcon';
import TwitterIcon from '@/components/Svg/TwitterIcon';
import InstagramIcon from '@/components/Svg/InstagramIcon';
import PinterestIcon from '@/components/Svg/PinterestIcon';

const Footer = () => {
	return (
		<footer className="border-t border-gray-200 flex flex-col items-center justify-center w-full">
			<div className="bg-white flex items-stretch gap-6 w-full p-20">
				<div className="flex-auto flex flex-col gap-y-4">
					<div className="w-full">
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
					<Paragraph
						className="w-full text-sm text-light"
						text="Over 5.3 million+ high quality stock images, videos and music shared by our talented community."
					/>
					<div className="flex gap-4 mt-auto items-center">
						<span className="text-black hover:text-primary cursor-pointer ease-in-out transition-all duration-500">
							<InstagramIcon />
						</span>
						<span className="text-black hover:text-primary cursor-pointer ease-in-out transition-all duration-500">
							<PinterestIcon />
						</span>
						<span className="text-black hover:text-primary cursor-pointer ease-in-out transition-all duration-500">
							<TwitterIcon />
						</span>
						<span className="text-black hover:text-primary cursor-pointer ease-in-out transition-all duration-500">
							<FacebookIcon />
						</span>
					</div>
				</div>
				<div className="flex flex-col flex-auto gap-4 min-w-[168px]">
					<Paragraph
						className="text-sm text-bold font-semibold"
						text="Discover"
					/>

					<ul className="p-0 gap-y-2 flex flex-col">
						<li>
							<Link
								href="/"
								className="text-light text-sm cursor-pointer hover:underline ease-in-out transition-all duration-500"
							>
								Editor's Choice
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="text-light text-sm cursor-pointer hover:underline ease-in-out transition-all duration-500"
							>
								Curated Collections
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="text-light text-sm cursor-pointer hover:underline ease-in-out transition-all duration-500"
							>
								Pixabay Radio
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="text-light text-sm cursor-pointer hover:underline ease-in-out transition-all duration-500"
							>
								Popular Images
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="text-light text-sm cursor-pointer hover:underline ease-in-out transition-all duration-500"
							>
								Popular Videos
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="text-light text-sm cursor-pointer hover:underline ease-in-out transition-all duration-500"
							>
								Popular Music
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="text-light text-sm cursor-pointer hover:underline ease-in-out transition-all duration-500"
							>
								Popular Searches
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex flex-col flex-auto gap-4 min-w-[168px]">
					<Paragraph
						className="text-sm text-bold font-semibold"
						text="Community"
					/>

					<ul className="p-0 gap-y-2 flex flex-col">
						<li>
							<Link
								href="/"
								className="text-light text-sm cursor-pointer hover:underline ease-in-out transition-all duration-500"
							>
								Blog
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="text-light text-sm cursor-pointer hover:underline ease-in-out transition-all duration-500"
							>
								Forum
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="text-light text-sm cursor-pointer hover:underline ease-in-out transition-all duration-500"
							>
								Creators
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="text-light text-sm cursor-pointer hover:underline ease-in-out transition-all duration-500"
							>
								Cameras
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex flex-col flex-auto gap-4 min-w-[168px]">
					<Paragraph className="text-sm text-bold font-semibold" text="About" />

					<ul className="p-0 gap-y-2 flex flex-col">
						<li>
							<Link
								href="/"
								className="text-light text-sm cursor-pointer hover:underline ease-in-out transition-all duration-500"
							>
								About Us
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="text-light text-sm cursor-pointer hover:underline ease-in-out transition-all duration-500"
							>
								FAQ
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="text-light text-sm cursor-pointer hover:underline ease-in-out transition-all duration-500"
							>
								License Summary
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="text-light text-sm cursor-pointer hover:underline ease-in-out transition-all duration-500"
							>
								Terms of Service
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="text-light text-sm cursor-pointer hover:underline ease-in-out transition-all duration-500"
							>
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="text-light text-sm cursor-pointer hover:underline ease-in-out transition-all duration-500"
							>
								Cockies Policy
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="text-light text-sm cursor-pointer hover:underline ease-in-out transition-all duration-500"
							>
								Digital Service Act
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="text-light text-sm cursor-pointer hover:underline ease-in-out transition-all duration-500"
							>
								Report Content
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="text-light text-sm cursor-pointer hover:underline ease-in-out transition-all duration-500"
							>
								API
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="w-full flex bg-gray-100 py-3">
				<p className="w-full text-xs text-light flex items-center justify-center">
					This site is protected by reCAPTCHA and the Google
					<a
						href="https://policies.google.com/privacy"
						target="_blank"
						className="text-bold text-xs cursor-pointer hover:underline mx-1"
					>
						Privacy Policy
					</a>
					and
					<a
						href="https://policies.google.com/terms"
						target="_blank"
						className="text-bold text-xs cursor-pointer hover:underline mx-1"
					>
						Terms of Service
					</a>
					apply.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
