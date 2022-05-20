import styled from "styled-components";
import { refreshPage, useMe } from "lib/hooks";
import { Body, Large } from "../texts";
import { useRouter } from "next/router";
import { getSaveitem, removeItem } from "lib/api";

import { useState } from "react";
import { BotonFucsia } from "../buttons";
import { createRouteLoader } from "next/dist/client/route-loader";
const DisplayLogin = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 1080px) {
		display: none;
	}
`;
const DisplayLoginDesktop = styled.div`
	display: none;
	flex-direction: column;
	align-items: center;
	@media (min-width: 1080px) {
		display: flex;
	}
`;

export function LoginDisplay() {
	const router = useRouter();
	let user = useMe();
	console.log("SOY USER", user);

	if (user.email) {
		return (
			<DisplayLogin>
				<Body white>{user.email}</Body>
				<a
					onClick={() => {
						removeItem("email"), removeItem("token");
						refreshPage();
					}}
				>
					{" "}
					<Large fucsia>Cerrar Sesion</Large>{" "}
				</a>
			</DisplayLogin>
		);
	} else {
		return (
			<DisplayLogin>
				<BotonFucsia
					onClick={() => {
						router.push("/signin");
					}}
				>
					Ingresar
				</BotonFucsia>
			</DisplayLogin>
		);
	}
}
export function LoginDisplayAndButton() {
	const router = useRouter();
	let user = useMe();
	if (user) {
		return (
			<DisplayLoginDesktop>
				<Body white>{user.email}</Body>
				<a
					onClick={() => {
						removeItem("email"), removeItem("token");
						refreshPage();
					}}
				>
					{" "}
					<Large fucsia>Cerrar Sesion</Large>{" "}
				</a>
			</DisplayLoginDesktop>
		);
	} else {
		return (
			<DisplayLoginDesktop>
				<BotonFucsia
					onClick={() => {
						router.push("/signin");
					}}
				>
					Ingresar
				</BotonFucsia>
			</DisplayLoginDesktop>
		);
	}
}
