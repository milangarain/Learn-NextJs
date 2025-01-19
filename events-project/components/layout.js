import Header from "./header";

export default function PageLayout({children}) {
	return (
		<>
			<Header />
			{children}
		</>
	)
}