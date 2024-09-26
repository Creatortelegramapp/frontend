'use client'

import "../styles/style.css";
import "../styles/style.scss";
import {SDKProvider, useLaunchParams} from "@telegram-apps/sdk-react";




export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const debug = useLaunchParams().startParam === 'debug';

	return (
		<html lang="en" theme-color="dark">
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
					rel="stylesheet"
				/>

			</head>

			<body>
			<SDKProvider acceptCustomStyles debug={debug}>
				{children}
			</SDKProvider>
			</body>
		</html>
	);
}
