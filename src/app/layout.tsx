import "@/styles/app.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="flex flex-col min-h-svh">{children}</body>
		</html>
	);
}
