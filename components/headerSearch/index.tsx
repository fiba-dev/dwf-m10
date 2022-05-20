import { LogoPrincipal, MenuBurger } from "components/ui/logos";
import { useState } from "react";
import { MobileMenuWindows } from "components/mobilMenuWindows";
import { Buscar, BuscarOscuro } from "components/InputBuscar";
import { HeaderContainer, HeaderContainerSearch } from "./styled";
import { BotonFucsia, BotonNaranja } from "components/ui/buttons";
import { LoginDisplayAndButton } from "components/ui/displayLogin";

export function HeaderSearch() {
	const [stateWindows, setStateWindows] = useState(false);
	return (
		<HeaderContainerSearch>
			<HeaderContainer>
				<MobileMenuWindows
					estado={stateWindows}
					cambiarEstado={setStateWindows}
				></MobileMenuWindows>
				<LogoPrincipal></LogoPrincipal>
				<MenuBurger
					onClick={() => {
						setStateWindows(!stateWindows);
					}}
				></MenuBurger>
			</HeaderContainer>
			<BuscarOscuro></BuscarOscuro>
			<LoginDisplayAndButton></LoginDisplayAndButton>
		</HeaderContainerSearch>
	);
}
