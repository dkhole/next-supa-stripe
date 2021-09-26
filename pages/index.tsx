/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from "@emotion/react";
import type { NextPage } from "next";
import Link from "next/link";
import { supabase } from "../utils/supabaseClient";
import { useEffect, useState } from "react";
import Router from "next/router";

const Home: NextPage = () => {
	const [session, setSession]: any = useState(null);
	useEffect(() => {
		// @ts-ignore: Unreachable code error
		setSession(supabase.auth.session());
		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);

			if (_event === "PASSWORD_RECOVERY") {
				Router.push("/reset");
			}
		});
	}, []);

	return (
		<div
			css={css`
				height: 100px;
				background-color: #181818;
			`}
		>
			<nav>
				{session && (
					<div>
						<button
							onClick={() => {
								supabase.auth.signOut();
							}}
						>
							Sign Out
						</button>
					</div>
				)}
				{!session && (
					<div>
						<Link href="/login" passHref>
							<button>Login</button>
						</Link>
					</div>
				)}
			</nav>
		</div>
	);
};

export default Home;
