import styled, { css } from "styled-components";

export const Label = styled.label`
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	font-size: 12px;
	font-weight: 400;
	margin-left: 5px;
`;
export const Placeholder = styled.input<{ profile?: any }>`
	height: 37px;
	min-width: 350px;
	border: solid 3px;
	border-radius: 8px;
	margin: 5px;
	::placeholder {
		color: black;
	}

	@media (min-width: 1080px) {
		${(props) =>
			props.profile &&
			css`
				width: 447px;
			`}
	}
`;
const TextFieldContainer = styled.label`
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;
	@media (min-width: 1080px) {
		width: 457px;
	}
`;

export function TextField({ type = "", placeholder = "", label = "" }: any) {
	return (
		<TextFieldContainer>
			<Label>{label}</Label>
			<Placeholder type={type} placeholder={placeholder}></Placeholder>
		</TextFieldContainer>
	);
}
