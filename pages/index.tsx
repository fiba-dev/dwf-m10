import { Header } from "components/header";
import { Buscar } from "components/InputBuscar";
import { Title } from "components/ui/texts";
import type { NextPage } from "next";
import styled from "styled-components";
const HomeStyle = styled.h1`
	display: flex;
	flex-direction: column;
`;
const Home: NextPage = () => {
	return (
		<div>
			<Header></Header>
			<Title>El mejor e-commerce</Title>
			<Buscar></Buscar>
		</div>
	);
};

export default Home;
