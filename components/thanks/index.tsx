import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

import { Root } from "./styled";

import { BotonMobil, BotonNaranja } from "components/ui/buttons";
import { Large, Subtitle, Title } from "components/ui/texts";

export function ThanksWindows() {
	const router = useRouter();
	return (
		<Root>
			<Title>Gracias por comprar en COMPRALO</Title>
			<Subtitle>
				se abrio una nueva ventana para que pueda realizar su pago
			</Subtitle>
			<a
				onClick={() => {
					router.push("/");
				}}
			>
				<Large fucsia={true}>Volver al Home </Large>
			</a>
		</Root>
	);
}
