/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import Router from "next/router";
import Link from "next/link";
import { sublinkStyle, mainButtonStyle, inputStyle, authBackgroundCol, authCardCol } from "../styles/loginStyles";

export default function SignUp() {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (email: string, password: string) => {
		try {
			setLoading(true);
			const { user, session, error } = await supabase.auth.signIn({ email: email, password: password }, { redirectTo: "http://localhost:3000/" });
			if (error) throw error;
			else {
				Router.push("/");
			}
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div
			css={css`
				background-color: ${authBackgroundCol};
				min-height: 100vh;
				width: 100vw;
				padding-top: 150px;
				color: white;
				font-family: "Lexend Deca", sans-serif;
				font-size: 14px;
			`}
		>
			<div
				css={css`
					background-color: ${authCardCol};
					height: 325px;
					width: 450px;
					padding: 40px 20px;
					margin: 0 auto;
					display: flex;
					flex-direction: column;
					align-items: center;
				`}
			>
				<h1>Login</h1>
				<div
					css={css`
						width: 90%;
						margin-top: 20px;
					`}
				>
					<span>Email address</span>
					<input
						css={css`
							${inputStyle}
						`}
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div
					css={css`
						width: 90%;
					`}
				>
					<span>Password</span>
					<input
						css={css`
							${inputStyle}
						`}
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div
					css={css`
						width: 90%;
					`}
				>
					<div
						css={css`
							${sublinkStyle}
							text-align: right;
							margin-bottom: 20px;
						`}
					>
						<Link href="/forgot" passHref>
							<span
								css={css`
									cursor: pointer;
								`}
							>
								Forgot your password?
							</span>
						</Link>
					</div>
					<button
						css={css`
							${mainButtonStyle}
						`}
						onClick={(e) => {
							e.preventDefault();
							handleLogin(email, password);
						}}
						className="button block"
						disabled={loading}
					>
						<span>{loading ? "Loading" : "Sign In"}</span>
					</button>
					<div
						css={css`
							${sublinkStyle}
							width: 90%;
							text-align: center;
							margin-top: 20px;
						`}
					>
						<Link href="/signup" passHref>
							<span
								css={css`
									cursor: pointer;
								`}
							>
								Dont have an accout? Sign up
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
