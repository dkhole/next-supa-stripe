/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import Router from "next/router";
import { sublinkStyle, mainButtonStyle, inputStyle, authBackgroundCol, authCardCol } from "../styles/loginStyles";

export default function ResetPassword(props: any) {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [verifyPassword, setVerifyPassword] = useState("");
	const [session, setSession]: any = useState(null);

	useEffect(() => {
		// @ts-ignore: Unreachable code error
		setSession(supabase.auth.session());
	}, []);

	const changePassword = async (password: string) => {
		try {
			setLoading(true);
			const { user, error } = await supabase.auth.update({ password: password });
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
			{session && (
				<div
					css={css`
						background-color: ${authCardCol};
						height: 250px;
						width: 450px;
						padding: 40px 20px;
						margin: 0 auto;
						display: flex;
						flex-direction: column;
						align-items: center;
					`}
				>
					<div
						css={css`
							width: 90%;
						`}
					>
						<span>Enter new password</span>
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
						<span>Confirm new password</span>
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
							margin-top: 20px;
						`}
					>
						<button
							css={css`
								${mainButtonStyle}
							`}
							onClick={(e) => {
								e.preventDefault();
								changePassword(password);
								Router.push("/");
							}}
							className="button block"
							disabled={loading}
						>
							<span>{loading ? "Loading" : "Update password"}</span>
						</button>
					</div>
				</div>
			)}
			{!session && <span>Not logged in</span>}
		</div>
	);
}
