import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { fetchApi } from "./api";
export function refreshPage() {
	window.location.reload();
}
function useMe() {
	const { data, error } = useSWR("/me", fetchApi);
	console.log("SOY /ME", data);

	return data;
}
async function editMe({ nombre, direccion, telefono }: any) {
	return await fetchApi("/me", {
		method: "PATCH",
		headers: { "Content-Type": "application/json" },
		body: { nombre, direccion, telefono },
	});
}
function useProducts(productId: any) {
	console.log("Productid", productId);

	const { data, error } = useSWRImmutable(
		() => (productId ? "/products/" + productId : null),
		fetchApi
	);
	console.log("SOY DATA de items", data);

	return data;
}
function useSearchProducts(q: any, offset: any = 0, limit: any = 5) {
	console.log("soy limit searchproduct ", limit, offset, q);
	const url = q
		? +"/search?q=" + q + "&offset=" + offset + "&limit=" + limit
		: null;
	console.log("Soy url", url);
	const { data, error } = useSWRImmutable(
		() =>
			q ? "/search?q=" + q + "&offset=" + offset + "&limit=" + limit : null,
		fetchApi
	);
	console.log("Soy data", data);
	return data;
}
async function createOrder(productId: any, quantity: number) {
	console.log("SOY QUANTITY", quantity);

	return productId
		? await fetchApi("/order?productId=" + productId, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: { quantity },
		  })
		: false;
}
async function getOrder(externalReference: any) {
	return externalReference
		? await fetchApi("/order/" + externalReference, {
				headers: { "Content-Type": "application/json" },
		  })
		: false;
}
export { useProducts, useMe, useSearchProducts, editMe, createOrder, getOrder };
