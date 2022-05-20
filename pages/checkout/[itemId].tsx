import { Footer } from "components/footer";
import { Header } from "components/header";
import { HeaderSearch } from "components/headerSearch";
import { Buscar } from "components/InputBuscar";
import { BuyItem } from "components/buyItem";
import { ShowProducts } from "components/showProducts";
import { Title } from "components/ui/texts";
import type { NextPage } from "next";
import Root, { ContainerProduct } from "./styled";

const Home: NextPage = () => {
	return (
		<Root>
			<HeaderSearch></HeaderSearch>
			<ContainerProduct>
				<BuyItem></BuyItem>
			</ContainerProduct>

			<Footer></Footer>
		</Root>
	);
};

export default Home;
