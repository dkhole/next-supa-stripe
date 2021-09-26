/** @jsxImportSource @emotion/react */
import { css} from "@emotion/react";

export const authBackgroundCol = '#181818';
export const authCardCol = '#1f1f1f';
export const authSecCol = '#3ecf8e';
export const authSecButtonCol = '#24b47e';

export const sublinkStyle = css`
    color: ${authSecCol};
    text-decoration: underline;
    font-size: 13px;
`;

export const mainButtonStyle = css`
    height: 40px;
    width: 100%;
    background-color: ${authSecButtonCol};
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: #3ad89c;
    }
`;

export const inputStyle = css`
    background-color: #1f1f1f;
    font-size: 12px;
    letter-spacing: 0.5px;
    padding: 0 15px;
    margin: 15px 0;
    border: solid #444444 0.5px;
    border-radius: 5px;
    color: white;
    height: 30px;
    width: 99%;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box; /* Opera/IE 8+ */
    &:focus {
        outline: none !important;
        border-color: ${authSecCol};
    }
`;