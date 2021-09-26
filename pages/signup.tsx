/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import Link from "next/link";
import { sublinkStyle, mainButtonStyle, inputStyle, authBackgroundCol, authCardCol } from "../styles/loginStyles";

export default function SignUp() {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [verifyPassword, setVerifyPassword] = useState("");

	const handleSignUp = async (email: string, password: string) => {
		try {
			setLoading(true);
			const { user, session, error } = await supabase.auth.signUp({ email: email, password: password });
			if (error) throw error;
			alert("Check your email for the login link!");
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div
			css={css`
				min-height: 100vh;
				width: 100vw;
				padding-top: 150px;
				background-color: ${authBackgroundCol};
				color: white;
				font-family: "Lexend Deca", sans-serif;
				font-size: 14px;
			`}
		>
			<div
				css={css`
					height: 375px;
					width: 450px;
					background-color: ${authCardCol};
					padding: 40px 20px;
					margin: 0 auto;
					display: flex;
					flex-direction: column;
					align-items: center;
				`}
			>
				<h1>Sign Up</h1>
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
					<span>Confirm password</span>
					<input
						css={css`
							${inputStyle}
						`}
						type="password"
						value={verifyPassword}
						onChange={(e) => setVerifyPassword(e.target.value)}
					/>
				</div>
				<div
					css={css`
						width: 90%;
						margin-top: 15px;
					`}
				>
					<button
						css={css`
							${mainButtonStyle}
						`}
						onClick={(e) => {
							e.preventDefault();
							handleSignUp(email, password);
						}}
						className="button block"
						disabled={loading}
					>
						<span>{loading ? "Loading" : "Join Now"}</span>
					</button>
				</div>
				<div
					css={css`
						${sublinkStyle}
						width: 90%;
						text-align: center;
						margin-top: 20px;
					`}
				>
					<Link href="/login" passHref>
						<span
							css={css`
								cursor: pointer;
							`}
						>
							Already have an account? Sign in
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
