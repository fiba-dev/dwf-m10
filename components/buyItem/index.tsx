import { useRouter } from "next/router";
import { useSearchProducts, useProducts, createOrder } from "lib/hooks";
import { Card, Item, BuyItemCard } from "components/ui/card";
import { useForm } from "react-hook-form";
import { ErrorMessage, MostrarProductos, Root, RootTotal } from "./styled";
import { Pagination } from "components/ui/pagination";
import { Subtitle, Title } from "components/ui/texts";
import { Placeholder } from "components/ui/textFields";
import { BotonCeleste } from "components/ui/buttons";

export function BuyItem() {
	const {
		watch,
		setError,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const router = useRouter();
	const itemId = router.query;
	console.log("SOY ROUTER QUERY", itemId);
	const watchFields = watch("cantidad");
	const product = useProducts(itemId.itemId);
	console.log("soy watch", watchFields);

	async function Comprar() {
		if (watchFields <= 10) {
			let quantity = watchFields >= 1 ? parseInt(watchFields) : 1;
			if (
				window.confirm(
					"seguro desea comprar " + quantity + " " + product.object.Name
				)
			) {
				console.log("SOY CANTIDAD E ITEMS", quantity, itemId.itemId);

				let res = await createOrder(itemId.itemId, quantity);
				if (res.url) {
					router.replace("/thanks");
					window.open(res.url);
				}
			}
		} else {
			window.alert("NO HAY STOCK");
		}
	}

	if (product) {
		console.log("SOY PRODUCT", product.object);
		let precio =
			watchFields >= 1
				? product.object["Unit cost"] * watchFields
				: product.object["Unit cost"];
		console.log("Soy precio", precio);

		return (
			<MostrarProductos>
				{/* <Subtitle>{results}</Subtitle>{" "} */}

				<BuyItemCard
					key={product.object.objectID}
					nombre={product.object.Name}
					imagen={product.object.Images[0].url}
					precio={product.object["Unit cost"]}
				></BuyItemCard>
				<Root onSubmit={handleSubmit(Comprar)}>
					<RootTotal>Total:{precio}</RootTotal>
					<Placeholder
						type="number"
						{...register("cantidad", { max: 10 })}
						placeholder="1"
					></Placeholder>

					<BotonCeleste
						onClick={() => {
							setError("cantidad", { type: "max", message: "custom message" });
						}}
					>
						<Subtitle>Finalizar Compra </Subtitle>
					</BotonCeleste>
					<ErrorMessage>
						{errors.cantidad && <h2>{"NO HAY STOCK"}</h2>}
					</ErrorMessage>
				</Root>
			</MostrarProductos>
		);
	} else {
		return <div></div>;
	}
}
