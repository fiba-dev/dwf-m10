import React, { useState, useEffect } from "react";

import router from "next/router";

import { Root } from "./styled";
import { Title } from "components/ui/texts";
import { getSaveitem, removeItem } from "lib/api";
import { refreshPage, useMe } from "lib/hooks";

export function LogoutWindows() {
	const email = getSaveitem("email");
	useEffect(() => {
		if (email) {
			removeItem("email"), removeItem("token");
			refreshPage();
		}
		if (email == null) {
			router.push("/");
		}
	}, [email]);

	return (
		<div>
			<Root>
				<Title>Logging Out</Title>
			</Root>
		</div>
	);
}
