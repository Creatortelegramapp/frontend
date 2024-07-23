import "../styles/style.css";
import "../styles/style.scss";




export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" theme-color="dark">
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
					rel="stylesheet"
				/>

			</head>

			<body>{children}</body>
		</html>
	);
}
