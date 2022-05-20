import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

import { Root } from "./styled";

import { BotonMobil, BotonNaranja } from "components/ui/buttons";
import { Large, Subtitle, Title } from "components/ui/texts";
import { getOrder } from "lib/hooks";

export function ThanksWindows() {
	const router = useRouter();
	console.log("SOY ROUTER QUERY", router.query);
	const [data, setData] = useState({} as any);
	const externalReference = router.query["external_reference"];
	console.log("SOY REFERENCE", externalReference);
	useEffect(() => {
		if (externalReference) {
			const fetchData = async () => {
				const res = await getOrder(externalReference);
				console.log("SOY RES", res);
				setData(res);
			};
			fetchData().catch(console.error);
		}
	}, [externalReference]);
	console.log("SOY DATAAAAA", data);
	if (data) {
		let status = data.data.status;
		console.log("SOY STATUS", status);

		const estado =
			status == "closed"
				? "FUE EXITOSO"
				: status == "opened"
				? " ESTA PENDIENTE"
				: "FUE RECHAZADO";

		return (
			<Root>
				<Title>Gracias por comprar en COMPRALO</Title>
				<Subtitle>SU PAGO {estado}</Subtitle>
				<a
					onClick={() => {
						router.push("/");
					}}
				>
					<Large fucsia={true}>Volver al Home </Large>
				</a>
			</Root>
		);
	} else {
		return (
			<Root>
				<Title>Gracias por comprar en COMPRALO</Title>{" "}
			</Root>
		);
	}
}
