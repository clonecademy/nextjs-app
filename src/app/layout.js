import "@/styles/app.css";
import { Geist } from "next/font/google";
import { cn } from "@/styles/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={cn("font-sans", geist.variable)}>
			<body className="flex flex-col min-h-svh">{children}</body>
		</html>
	);
}
