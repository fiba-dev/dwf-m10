import { InstagramLogo, TwitterLogo } from "components/ui/logos";
import { Body, Large } from "components/ui/texts";
import { Root, RootLinks, RootMenu, RootRedes } from "components/footer/styled";
import styled from "styled-components";

export function Footer() {
	return (
		<Root>
			<RootLinks>
				<RootMenu>
					<a>
						<Body white>Ingresar</Body>
					</a>
					<a>
						<Body white>Mi Perfil</Body>
					</a>
					<a>
						<Body white>Buscar</Body>
					</a>
					<a>
						<Body white>Logout</Body>
					</a>
				</RootMenu>
				<RootRedes>
					<Large white>Redes</Large>
					<TwitterLogo></TwitterLogo>
					<InstagramLogo></InstagramLogo>
				</RootRedes>
			</RootLinks>
			<Body white>©2022 fiba</Body>
		</Root>
	);
}
