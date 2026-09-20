import "@/styles/app.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="flex flex-col min-h-svh">{children}</body>
		</html>
	);
}
