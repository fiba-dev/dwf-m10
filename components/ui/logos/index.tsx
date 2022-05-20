import { Body, Subtitle } from "../texts";
import styled from "styled-components";

export function Logo() {}
const Burger = styled.div`
	@media (min-width: 1080px) {
		display: none;
	}
`;
export function MenuBurger(props: any) {
	return (
		<Burger>
			<svg
				onClick={props.onClick}
				viewBox="0 0 100 80"
				stroke="white"
				color="white"
				width="40"
				height="40"
			>
				<rect width="100" height="20" rx="8" color="white" fill="white"></rect>
				<rect y="30" width="100" height="20" fill="white" rx="8"></rect>
				<rect y="60" width="100" height="20" fill="white" rx="8"></rect>
			</svg>
		</Burger>
	);
}

export function Twitter() {
	return (
		<svg
			width="24"
			height="21"
			viewBox="0 0 24 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			color="white"
		>
			<path
				d="M23 2.00005C22.0424 2.67552 20.9821 3.19216 19.86 3.53005C19.2577 2.83756 18.4573 2.34674 17.567 2.12397C16.6767 1.90121 15.7395 1.95724 14.8821 2.2845C14.0247 2.61176 13.2884 3.19445 12.773 3.95376C12.2575 4.71308 11.9877 5.61238 12 6.53005V7.53005C10.2426 7.57561 8.50127 7.18586 6.93101 6.39549C5.36074 5.60513 4.01032 4.43868 3 3.00005C3 3.00005 -1 12 8 16C5.94053 17.398 3.48716 18.099 1 18C10 23 21 18 21 6.50005C20.9991 6.2215 20.9723 5.94364 20.92 5.67005C21.9406 4.66354 22.6608 3.39276 23 2.00005V2.00005Z"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
const ContainerRedes = styled.div`
	display: flex;
	flex-direction: row;
`;
export function TwitterLogo() {
	return (
		<ContainerRedes>
			{" "}
			<Twitter /> <Body white> My E-Commerce</Body>
		</ContainerRedes>
	);
}

export function Instagram() {
	return (
		<svg
			width="24"
			height="21"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16 11.3701C16.1234 12.2023 15.9812 13.0523 15.5937 13.7991C15.2062 14.5459 14.5931 15.1515 13.8416 15.5297C13.0901 15.908 12.2384 16.0397 11.4077 15.906C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1903 8.22768 13.4229 8.09402 12.5923C7.96035 11.7616 8.09202 10.91 8.47028 10.1584C8.84854 9.40691 9.45414 8.7938 10.2009 8.4063C10.9477 8.0188 11.7977 7.87665 12.63 8.00006C13.4789 8.12594 14.2648 8.52152 14.8716 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17.5 6.5H17.51"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
export function InstagramLogo() {
	return (
		<ContainerRedes>
			<Instagram /> <Body white> My E-Commerce</Body>
		</ContainerRedes>
	);
}
export function CartLogo() {
	return (
		<svg
			width="50"
			height="46"
			viewBox="0 0 50 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_5_148)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M18.3777 41.254C18.6935 41.254 19.2615 40.9712 19.2615 40.25C19.2615 39.5287 18.6935 39.246 18.3777 39.246C18.0618 39.246 17.4938 39.5287 17.4938 40.25C17.4938 40.9712 18.0618 41.254 18.3777 41.254ZM13.4099 40.25C13.4099 37.4117 15.8063 35.4127 18.3777 35.4127C20.949 35.4127 23.3454 37.4117 23.3454 40.25C23.3454 43.0883 20.949 45.0873 18.3777 45.0873C15.8063 45.0873 13.4099 43.0883 13.4099 40.25Z"
					fill="white"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M40.8392 41.254C41.1551 41.254 41.7231 40.9712 41.7231 40.25C41.7231 39.5287 41.1551 39.246 40.8392 39.246C40.5234 39.246 39.9554 39.5287 39.9554 40.25C39.9554 40.9712 40.5234 41.254 40.8392 41.254ZM35.8715 40.25C35.8715 37.4117 38.2679 35.4127 40.8392 35.4127C43.4106 35.4127 45.807 37.4117 45.807 40.25C45.807 43.0883 43.4106 45.0873 40.8392 45.0873C38.2679 45.0873 35.8715 43.0883 35.8715 40.25Z"
					fill="white"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M-0.883789 1.91667C-0.883789 0.303645 0.426134 -1.00397 2.04201 -1.00397H10.2098L13.0715 1.30861L14.6219 8.57937H46.9651L49.8326 12.0805L46.5654 28.1614L46.5606 28.1844C46.2226 29.7819 45.3051 31.1771 44.0191 32.1488C42.7445 33.1118 41.1779 33.6094 39.5911 33.5873H19.7892C18.2024 33.6094 16.6358 33.1118 15.3613 32.1488C14.0761 31.1777 13.1589 29.7837 12.8203 28.1875C12.8201 28.1865 12.8199 28.1855 12.8197 28.1844L9.41515 12.2183C9.39721 12.1475 9.38186 12.0756 9.36921 12.0028L7.84128 4.8373H2.04201C0.426134 4.8373 -0.883789 3.52969 -0.883789 1.91667ZM15.8675 14.4206L18.5449 26.9772C18.5804 27.1446 18.6857 27.3348 18.8929 27.4913C19.1037 27.6506 19.3939 27.7523 19.7135 27.7465L19.7662 27.746H39.6141L39.6668 27.7465C39.9864 27.7523 40.2767 27.6506 40.4874 27.4913C40.6917 27.337 40.797 27.15 40.8338 26.9843L43.3864 14.4206H15.8675Z"
					fill="white"
				/>
			</g>
			<defs>
				<clipPath id="clip0_5_148">
					<rect width="49.0071" height="46" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}

const ContainerLogo = styled.div`
	display: flex;
	width: 207px;
	height: 46px;
	justify-content: space-between;
	align-items: center;
`;

export function LogoPrincipal() {
	return (
		<ContainerLogo>
			<CartLogo />
			<Subtitle white> Compralo</Subtitle>
		</ContainerLogo>
	);
}
