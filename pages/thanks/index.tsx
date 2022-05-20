import type { NextPage } from "next";
import { Root } from "./styled";
import { Login } from "components/loginEmail";
import { Header } from "components/header";
import { Footer } from "components/footer";

import { Subtitle, Title } from "components/ui/texts";
import { BotonNaranja } from "components/ui/buttons";
import { ThanksWindows } from "components/thanks";

const Thanks: NextPage = () => {
	return (
		<Root>
			<ThanksWindows></ThanksWindows>
		</Root>
	);
};

export default Thanks;
