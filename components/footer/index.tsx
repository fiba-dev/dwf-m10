import { InstagramLogo, TwitterLogo } from "components/ui/logos";
import { Body, Large } from "components/ui/texts";
import { Root, RootLinks, RootMenu, RootRedes } from "components/footer/styled";
import { useRouter } from "next/router";

export function Footer() {
	const router = useRouter();
	return (
		<Root>
			<RootLinks>
				<RootMenu>
					<a
						onClick={() => {
							router.push("/signin");
						}}
					>
						<Body white>Ingresar</Body>
					</a>
					<a>
						<Body
							white
							onClick={() => {
								router.push("/profile");
							}}
						>
							Mi Perfil
						</Body>
					</a>
					<a>
						<Body
							white
							onClick={() => {
								router.push("/");
							}}
						>
							Buscar
						</Body>
					</a>
					<a>
						<Body
							white
							onClick={() => {
								router.push("/logout");
							}}
						>
							Logout
						</Body>
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
