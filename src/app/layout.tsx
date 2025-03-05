import { Providers } from '@/store/providers';
import Head from "next/head";
import './globals.css';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
