import "../styles/normalize.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400&display=swap" rel="stylesheet" />
			</Head>
			<Component {...pageProps} />
		</div>
	);
}
export default MyApp;
