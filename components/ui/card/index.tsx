import Image from "next/image";
import styled from "styled-components";
import { Body, Large, Subtitle, Title } from "components/ui/texts";
import { BotonCeleste } from "../buttons";
import { Placeholder } from "../textFields";

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: var(--fucsia);
	width: 315px;
	height: 321px;
	border: solid 4px;
	border-radius: 8px;
	margin-bottom: 20px;
`;

const CardInfo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

export function Card({ imagen = "", precio = "", nombre = "", onClick }: any) {
	return (
		<CardContainer onClick={onClick}>
			<Image alt="Card Imagen" src={imagen} width={328} height={237} />
			<CardInfo>
				<Large>{nombre}</Large>
				<Subtitle>${precio}</Subtitle>
			</CardInfo>
		</CardContainer>
	);
}

const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 15px;
	height: 600px;
	max-width: 500px;
	justify-content: space-evenly;

	@media (min-width: 1080px) {
		max-width: 1080px;
		height: 384px;

		flex-direction: row;
	}
`;
const ItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	align-items: flex-start;
	height: 250px;
	p {
		height: 40px;
		overflow: scroll;
	}
	@media (min-width: 1080px) {
		width: 421px;

		padding: 10px;
		p {
			height: 80px;
			overflow: hidden;
		}
	}
`;

export function Item({
	imagen = "",
	precio = "",
	nombre = "",
	description = "",
	onClick,
}: any) {
	return (
		<ItemContainer>
			<Image alt="Item to Buy" src={imagen} width={"808px"} height={"384px"} />
			<ItemInfo>
				<Subtitle>{nombre}</Subtitle>
				<Title>${precio}</Title>
				<BotonCeleste onClick={onClick}>
					<Subtitle>Comprar </Subtitle>
				</BotonCeleste>
				<Body>{description}</Body>
			</ItemInfo>
		</ItemContainer>
	);
}
const BuyItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	p {
		height: 40px;
		overflow: scroll;
	}
	@media (min-width: 1080px) {
		width: 600px;
		flex-direction: row;
		padding: 10px;
		p {
			height: 80px;
			overflow: hidden;
		}
	}
`;
const BuyItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 15px;
	height: 500px;
	max-width: 500px;
	justify-content: space-evenly;

	@media (min-width: 1080px) {
		max-width: 600px;
		width: 600px;
		height: 384px;
	}
`;
export function BuyItemCard({
	imagen = "",
	precio = "",
	nombre = "",
	description = "",
	onClick,
}: any) {
	return (
		<BuyItemContainer>
			<Image alt="Item to Buy" src={imagen} width={"808px"} height={"384px"} />
			<BuyItemInfo>
				<Title>{nombre}</Title>
				<Subtitle>${precio}</Subtitle>
			</BuyItemInfo>
		</BuyItemContainer>
	);
}