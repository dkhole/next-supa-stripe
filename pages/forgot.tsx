/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import Router from "next/router";
import Link from "next/link";
import { sublinkStyle, mainButtonStyle, inputStyle, authBackgroundCol, authCardCol } from "../styles/loginStyles";

export default function Forgot() {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleForgot = async (email: string) => {
		try {
			setLoading(true);
			const { data, error }: any = supabase.auth.api.resetPasswordForEmail(email);
			if (error) throw error;
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
					height: 275px;
					width: 450px;
					padding: 40px 20px;
					margin: 0 auto;
					display: flex;
					flex-direction: column;
					align-items: center;
				`}
			>
				<h1 className="header">Forgot Your Password</h1>
				<p className="description">Enter email for password reset</p>
				<div
					css={css`
						width: 90%;
						margin-top: 30px;
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
					<button
						css={css`
							${mainButtonStyle}
						`}
						onClick={(e) => {
							e.preventDefault();
							handleForgot(email);
							Router.push("/");
						}}
						className="button block"
						disabled={loading}
					>
						<span>{loading ? "Loading" : "Sent reset link to email"}</span>
					</button>
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
								Go back to login
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
