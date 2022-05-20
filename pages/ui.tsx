import {
	MainButton,
	BotonAzul,
	BotonNaranja,
	BotonFucsia,
} from "components/ui/buttons";
import { Card } from "components/ui/card";
import {
	CartLogo,
	InstagramLogo,
	LogoPrincipal,
	MenuBurger,
	TwitterLogo,
} from "components/ui/logos";
import { TextField } from "components/ui/textFields";
import {
	Title,
	Subtitle,
	Large,
	LargeBold,
	Body,
	BodyBold,
	Tiny,
} from "components/ui/texts";

export default function UiPage() {
	return (
		<div>
			<h1>SOY UI PAGE</h1>
			<Title>Title</Title>
			<Subtitle>Subtitle</Subtitle>
			<Large>Large</Large>
			<LargeBold>LargeBold</LargeBold>
			<Body>Body</Body>
			<BodyBold>BodyBold</BodyBold>
			<Tiny>Tiny text</Tiny>
			<BotonNaranja>Naranja</BotonNaranja>
			<BotonFucsia>Fucsia</BotonFucsia>
			<BotonAzul>Azul</BotonAzul>
			<TextField label="Nombre" placeholder="Nombre"></TextField>
			<Card
				imagen="https://res.cloudinary.com/fiba06-dev/image/upload/v1646669934/portfolio/modulo8_1_uyaz6f.jpg"
				precio="1000"
				nombre="ROBOT"
			></Card>
			<MenuBurger></MenuBurger>
			<TwitterLogo></TwitterLogo>
			<InstagramLogo></InstagramLogo>
			<CartLogo></CartLogo>
			<LogoPrincipal></LogoPrincipal>
		</div>
	);
}
